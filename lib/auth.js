import { cookies } from "next/headers";

const SESSION_COOKIE = "app_session";
const SESSION_MAX_AGE = 60 * 60 * 24;

async function getKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not defined");

  const id = crypto.getRandomValues(new Uint8Array(16));
  const idHex = Array.from(id).map(b => b.toString(16).padStart(2, "0")).join("");
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `${idHex}.${expires}`;

  const key = await getKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const sigHex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");

  return `${payload}.${sigHex}`;
}

export async function verifySessionToken(token) {
  try {
    const secret = process.env.SESSION_SECRET;
    if (!secret || !token || typeof token !== "string") return false;

    const parts = token.split(".");
    if (parts.length !== 3) return false;

    const [idHex, expiresStr, sigHex] = parts;
    if (!idHex || !expiresStr || !sigHex) return false;
    if (!/^[0-9a-f]+$/i.test(idHex)) return false;
    if (!/^[0-9a-f]+$/i.test(sigHex) || sigHex.length !== 64 || sigHex.length % 2 !== 0) return false;

    const expires = Number(expiresStr);
    if (!Number.isFinite(expires)) return false;
    if (Date.now() > expires) return false;

    const payload = `${idHex}.${expiresStr}`;

    const key = await getKey(secret);
    const groups = sigHex.match(/.{2}/g);
    if (!groups) return false;
    const bytes = groups.map((b) => parseInt(b, 16));
    if (bytes.some((b) => !Number.isFinite(b))) return false;
    const sigBytes = new Uint8Array(bytes);

    return await crypto.subtle.verify("HMAC", key, sigBytes, new TextEncoder().encode(payload));
  } catch {
    return false;
  }
}

export async function setSessionCookie(token) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

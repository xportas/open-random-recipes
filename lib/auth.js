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
  const secret = process.env.SESSION_SECRET;
  if (!secret || !token) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [idHex, expiresStr, sigHex] = parts;
  const payload = `${idHex}.${expiresStr}`;

  if (Date.now() > Number(expiresStr)) return false;

  const key = await getKey(secret);
  const sigBytes = new Uint8Array(sigHex.match(/.{2}/g).map(b => parseInt(b, 16)));

  return crypto.subtle.verify("HMAC", key, sigBytes, new TextEncoder().encode(payload));
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

export async function getSessionCookie() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}

export async function deleteSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

"use server";

import bcrypt from "bcryptjs";
import { createSessionToken, setSessionCookie } from "@/lib/auth";

export async function loginAction(prevState, formData) {
  const password = formData.get("password");

  if (typeof password !== "string" || !password) {
    return { error: "Introduce una contraseña" };
  }

  const hashB64 = process.env.APP_PASSWORD_HASH_B64;
  if (!hashB64) {
    return { error: "Error de configuración del servidor" };
  }

  const hash = Buffer.from(hashB64, 'base64').toString('utf-8');
  const valid = await bcrypt.compare(password, hash);
  if (!valid) {
    return { error: "Contraseña incorrecta" };
  }

  const token = await createSessionToken();
  await setSessionCookie(token);

  return { error: null };
}

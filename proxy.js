import { NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

const PUBLIC_PATHS = ["/login"];

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const isPublic = PUBLIC_PATHS.some(p => pathname.startsWith(p));
  const token = request.cookies.get("app_session")?.value;
  const isValid = token ? await verifySessionToken(token) : false;

  if (!isPublic && !isValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPublic && isValid) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

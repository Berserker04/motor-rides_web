import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/app/auth/auth";

const protectedRoutes = ["/admin", "/dashboard", "/profile"];
const unprotectedRoutes = ["/", "/auth/login", "/admin"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix)
  );

  if (!session && isProtectedRoute) {
    const absoluteURL = new URL("/auth/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (session && unprotectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/dashboard", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

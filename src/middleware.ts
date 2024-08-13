import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

console.log("ya tut");

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth");

  // Если пользователь авторизован и пытается перейти на страницу логина
  if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }

  // Если пользователь не авторизован и пытается перейти на защищенную страницу
  if (!token && request.nextUrl.pathname.startsWith("/tickets")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/tickets/:path*"], // Применяем middleware для защищённых маршрутов
};

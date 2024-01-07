import { NextRequest } from "next/server";

const locales = ["en", "pt"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    [
      "/api/contact",
      "/favicon.png",
      "/logo.png",
      "/backgroundBanner.jpg",
      "/pdf/AndersonCardoso-Resume.pdf",
    ].includes(pathname)
  )
    return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/en${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.png).*)"],
};

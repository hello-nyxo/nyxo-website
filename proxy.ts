import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./lib/i18n/routing";

const intlMiddleware = createMiddleware(routing);

const UNSUPPORTED_LOCALES = ["sv", "es", "de", "fr"];

export default function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;

  // www → non-www redirect
  if (hostname === "www.nyxo.app") {
    const url = request.nextUrl.clone();
    url.hostname = "nyxo.app";
    return NextResponse.redirect(url, 301);
  }

  // Redirect old locale prefixes that are no longer supported
  for (const locale of UNSUPPORTED_LOCALES) {
    const prefix = `/${locale}`;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      const rest = pathname.slice(prefix.length) || "/";
      const url = request.nextUrl.clone();
      url.pathname = rest;
      return NextResponse.redirect(url, 301);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(fi|en)/:path*", "/((?!api|_next|images|.*\\..*).*)"],
};

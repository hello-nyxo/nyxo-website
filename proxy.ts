import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(fi|en|es|de|sv|fr)/:path*", "/((?!api|_next|images|.*\\..*).*)"],
};

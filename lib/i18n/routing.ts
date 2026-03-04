import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fi", "es", "de", "sv", "fr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

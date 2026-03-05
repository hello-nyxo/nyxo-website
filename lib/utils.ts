/**
 * Returns Tailwind CSS classes for habit period badges.
 */
export function periodColor(period: string | unknown): string {
  if (period === "MORNING") return "bg-accent-warm/15 text-accent-warm";
  if (period === "AFTERNOON") return "bg-accent-noon/15 text-accent-noon";
  return "bg-accent-dusk/15 text-accent-dusk";
}

/**
 * Format a date string using the given locale.
 * Falls back to "en-US" if locale is not provided.
 */
export function formatDate(
  date: string,
  locale: string = "en",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
): string {
  const localeMap: Record<string, string> = {
    en: "en-US",
    fi: "fi-FI",
    es: "es-ES",
    de: "de-DE",
    sv: "sv-SE",
    fr: "fr-FR",
  };
  return new Date(date).toLocaleDateString(
    localeMap[locale] || locale,
    options
  );
}

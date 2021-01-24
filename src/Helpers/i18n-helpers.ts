import {
  Duration,
  format,
  formatDuration,
  formatRelative,
  isDate,
} from "date-fns"
import { enUS, fi } from "date-fns/locale"
import { I18nContext } from "gatsby-plugin-react-i18next"

export const getLocalizedPath = (
  path: string | null = "/",
  locale?: string | null
): string => {
  switch (locale) {
    case "fi-FI":
      return `/fi${path}`
    case "en-US":
      return `${path}`
    default:
      return `${path}`
  }
}

export const localizedFormat = (
  date: Date | number,
  f: string,
  options?: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: number
    useAdditionalWeekYearTokens?: boolean
    useAdditionalDayOfYearTokens?: boolean
  }
): string => {
  if (!isDate(date)) {
    return "-"
  }
  return format(date, f, {
    ...options,
    locale: "fi" === "fi" ? fi : enUS,
  })
}

export const localizedDuration = (
  duration: Duration,
  options?: {
    format?: string[]
    zero?: boolean
    delimiter?: string
    locale?: Locale
  }
): string => {
  return formatDuration(duration, {
    ...options,
    locale: "fi" === "fi" ? fi : enUS,
  })
}

export const localizedRelativeFormat = (
  date: Date | number,
  baseDate: Date | number,
  options?: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  }
): string => {
  if (!isDate(date)) {
    return "-"
  }
  return formatRelative(date, baseDate, {
    ...options,
    locale: "fi" === "fi" ? fi : enUS,
  })
}

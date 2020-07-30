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

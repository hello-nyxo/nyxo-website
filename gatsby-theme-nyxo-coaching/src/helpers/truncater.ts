export const truncate = (
  str: string | null = "",
  n = 100,
  useWordBoundary = true
): string => {
  if (!str || str?.length <= n) {
    return ""
  }
  const subString = str.substr(0, n - 1)
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  )
}

export const truncate = (
  str?: string | null,
  n: number,
  useWordBoundary: boolean
): string => {
  if (!str || str?.length <= n) {
    return ""
  }
  const subString = str.substr(0, n - 1) // the original check
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  )
}

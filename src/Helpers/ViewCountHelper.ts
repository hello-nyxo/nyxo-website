export const viewCount = (identity: string) => {
  const stored = JSON.parse(window.localStorage.getItem("trial") || "[]")

  if (stored === null) {
    stored.push(identity)
    localStorage.setItem("trial", JSON.stringify(stored))
  }

  if (stored.indexOf(identity) > -1 === false) {
    stored.push(identity)
    localStorage.setItem("trial", JSON.stringify(stored))
  }

  return JSON.parse(window.localStorage.getItem("trial") || "{}")
}

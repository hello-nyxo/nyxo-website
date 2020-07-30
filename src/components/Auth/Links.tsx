import { isLoggedIn } from "../../auth/AppUser"

const status = isLoggedIn()
  ? { path: "me/login", title: "Logout" }
  : { path: "me/login", title: "Login" }

export const links = [
  { path: "coaching", title: "Coaching" },
  { path: "for-you", title: "For You" },
  { path: "blog", title: "Blog" },
  { path: "about", title: "About" },
  { ...status },
]

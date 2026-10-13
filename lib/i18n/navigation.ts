import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const {
  Link,
  redirect,
  permanentRedirect,
  usePathname,
  useRouter,
  getPathname,
} =
  createNavigation(routing);

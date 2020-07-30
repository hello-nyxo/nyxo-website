/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Auth from "@aws-amplify/auth"
import Amplify from "aws-amplify"
import "prism-theme-night-owl"
import { setUser } from "./src/auth/AppUser"

const config = require("./src/aws-exports").default
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

export const onClientEntry = () => {
  Amplify.configure(config)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
  }
}

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
    })
    .catch((err) => {
      window.localStorage.setItem("gatsbyUser", null)
    })
}

import React from "react"
import { navigate } from "@reach/router"
import { isLoggedIn } from "../../auth/AppUser"

interface PrivateRouteProps {
  component: any
  path: string
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props

  if (!isLoggedIn()) {
    navigate(`/me/login`)
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute

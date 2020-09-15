import { Router } from "@reach/router"
import React, { FC } from "react"
import Details from "../components/Auth/Details"
import Login from "../components/Auth/Login"
import PrivateRoute from "../components/Auth/PrivateRoute"
import SignUp from "../components/Auth/Register"
import Reset from "../components/Auth/Reset"
import Layout from "../components/layout"
import Sleep from "../components/Auth/Sleep"

const Me: FC = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/me/details" component={Details} />
        <PrivateRoute path="/me/sleep" component={Sleep} />
        <Login path="/me/login" />
        <SignUp path="/me/register" />
        <Reset path="/me/reset" />
      </Router>
    </Layout>
  )
}

export default Me

import { navigate } from "@reach/router"
import { Auth } from "aws-amplify"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import colors from "../../colors"
import { getCurrentUser } from "../../auth/AppUser"
import { Container } from "../../components/Primitives"
import { H2, H3 } from "../Html/HtmlContent"
import { Icon } from "../Icons"
import PageHeader from "../PageHeader"
import UserHabits from "../user/UserHabits"

const Details = () => {
  const user = getCurrentUser()

  const signOut = () => {
    Auth.signOut()
      .then(function () {
        navigate("/me/login")
      })
      ["catch"](function (err) {
        console.error(err)
      })
  }

  return (
    <>
      <PageHeader title="Profile Details" text={user.email} />
      <Container>
        <H3>About You</H3>

        <p>Email: {user.email}</p>

        <ul>
          <LI>
            <Link to="/me/reset">Reset Password</Link>
          </LI>
          <LI onClick={signOut}>
            <Icon
              name="logout"
              height="30px"
              width="30px"
              stroke={colors.radiantBlue}
            />
          </LI>
        </ul>

        <H2>Sleep Coaching</H2>

        <UserHabits />
      </Container>
    </>
  )
}
export default Details

const LI = styled.li`
  display: inline-block;
  margin-right: 50px;
  vertical-align: middle;
  cursor: pointer;
`

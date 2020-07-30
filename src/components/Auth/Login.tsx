import React, { useState } from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import { isLoggedIn, setUser } from "../../auth/AppUser"
import { Link } from "gatsby"
import { Auth } from "aws-amplify"
import colors from "../../colors"
import PageHeader from "../../components/PageHeader"
import { ContentContainer } from "../Primitives"

const Login = ({ path }: { path: string }) => {
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [error, setError] = useState()

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const login = async (event: any) => {
    event.preventDefault()

    try {
      await Auth.signIn(email, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      navigate("/me/details")
    } catch (err) {
      setError(err)
      console.log(err)
    }
  }
  if (isLoggedIn()) {
    navigate("/me/details")
    return null
  }
  return (
    <div>
      <PageHeader title="" text="" />

      <OverlayDiv>
        <NewContentContainer>
          <h1>Login</h1>
          {error && <ErrorMsg>{error.message}</ErrorMsg>}
          <form onSubmit={login}>
            <InputField
              onChange={handleEmail}
              placeholder="Email"
              name="email"
              value={email}
            />
            <InputField
              onChange={handlePassword}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
            />

            <Submit type="submit" value="Login" />
          </form>
          <p>
            No account with us yet? <Link to="/me/register">Register</Link>.
          </p>
        </NewContentContainer>
      </OverlayDiv>
    </div>
  )
}
export default Login

const OverlayDiv = styled.div`
  width: 600px;
  margin: auto;
  height: 500px;
  position: relative;
  margin-top: -250px;
  background-color: #fff;
  box-shadow: var(--shadow);
  z-index: 2;

  @media screen and (max-width: 720px) {
    width: 90%;
    box-shadow: var(--shadowFull);
  }
`
const InputField = styled.input`
  border-radius: 3px;
  border: 2px solid var(--bg);
  width: 60%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
  &:focus {
    border: 2px solid var(--radiantBlue);
  }
  @media screen and (max-width: 720px) {
    width: 80%;
  }
`
const Submit = styled.input`
  padding: 1rem;
  background-color: var(--radiantBlue);
  color: white;
  border-radius: 5px;
  border: none;
  display: block;
  font-size: 1rem;
  /* margin: 1rem auto 3rem auto;
   */
  margin: 20px auto 45px auto;
  cursor: pointer;
`
const ErrorMsg = styled.p`
  color: ${colors.morningAccent};
  line-height: 24px;
  font-weight: 700;
`
const NewContentContainer = styled(ContentContainer)`
  margin: auto;
  text-align: center;
  padding-top: 50px;
`

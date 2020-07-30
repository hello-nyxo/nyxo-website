import { navigate } from "@reach/router"
import { Auth } from "aws-amplify"
import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import colors from "../../colors"
import PageHeader from "../../components/PageHeader"

const Reset = ({ path }: { path: string }) => {
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const [authCode, setAuthCode] = useState()
  const [stage, setStage] = useState(0)

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event: any) => {
    setPassword(event.target.value)
  }
  const handleAuthCode = (event: any) => {
    setAuthCode(event.target.value)
  }

  const reset = async () => {
    try {
      await Auth.forgotPassword(email)
      setStage(1)
    } catch (err) {
      setError(err)
      console.log("error...: ", err)
    }
  }

  const confirmReset = async () => {
    Auth.forgotPasswordSubmit(email, authCode, password)
      .then((data) => {
        console.log(data)
      })
      .then(() => navigate("details"))
      .catch((err) => {
        setError(err)
        console.log(err)
      })
  }

  return (
    <div>
      <PageHeader title="" text="" />

      <OverlayDiv>
        <ContentContainer>
          <h1>Reset Password</h1>
          {stage === 0 && (
            <>
              {error && <ErrorMsg>{error.message}</ErrorMsg>}
              <InputField
                type="email"
                onChange={handleEmail}
                placeholder="Email"
                name="email"
                value={email}
              />
              <div onClick={reset}>
                <Submit type="submit">Reset</Submit>
              </div>
              <p style={{ marginTop: 40 }} className="text-center">
                <Link to="/me/login">Return to Login</Link>
              </p>
            </>
          )}
          {stage === 1 && (
            <>
              {error && <ErrorMsg>{error.message}</ErrorMsg>}
              <AuthMessage>
                Check your email for your Authorization Code.
              </AuthMessage>
              <InputField
                type="email"
                onChange={handleEmail}
                placeholder="Email"
                name="email"
                value={email}
              />
              <InputField
                onChange={handleAuthCode}
                placeholder="Authorization Code"
                name="authCode"
                value={authCode}
                type="input"
              />
              <InputField
                onChange={handlePassword}
                placeholder="Password"
                name="password"
                value={password}
                type="password"
              />
              <p style={{ marginTop: 40 }} className="text-center">
                <Link to="/me/login">Return to Login</Link>
              </p>
              <div>
                <Submit onClick={confirmReset} type="submit">
                  Confirm Reset
                </Submit>
              </div>
            </>
          )}
        </ContentContainer>
      </OverlayDiv>
    </div>
  )
}
export default Reset

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
const ContentContainer = styled.div`
  width: 80%;
  height: max-content;
  margin: auto;
  text-align: center;
  padding-top: 50px;

  @media screen and (max-width: 720px) {
    width: 100%;
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
const Submit = styled.button`
  padding: 1rem;
  background-color: var(--radiantBlue);
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  margin: 20px 0;
`
const AuthMessage = styled.p`
  color: var(--radiantBlue);
`
const ErrorMsg = styled.p`
  color: ${colors.morningAccent};
  line-height: 24px;
  font-weight: 700;
`

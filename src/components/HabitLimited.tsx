import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HabitLimited = () => {
  return (
    <>
      <Overlay></Overlay>
      <LoginSection>
        <h2>To keep reading this Habit, create a free account.</h2>
        <Register>
          <LinkDesc to="/me/register">Register with Nyxo</LinkDesc>
        </Register>
        <p>
          Already have an account? <Link to="/me/login">Login</Link>.
        </p>
      </LoginSection>
    </>
  )
}

export default HabitLimited

const Overlay = styled.div`
  background: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 1)
  );
  height: 250px;
  margin-top: -250px;
  margin-bottom: 10px;
  position: relative;
`

const LoginSection = styled.div`
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`
const Register = styled.button`
  padding: 1rem;
  background-color: var(--radiantBlue);
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  margin: 20px 0;
`
const LinkDesc = styled(Link)`
  color: #fff;
`

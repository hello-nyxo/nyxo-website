import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { device, minDevice } from "../components/Primitives"
import { isLoggedIn } from "../auth/AppUser"
import { Auth } from "aws-amplify"
import { navigate } from "@reach/router"
import { NyxoLogo } from "./logo"

const signOut = () => {
  Auth.signOut()
    .then(() => navigate("/me/login"))
    .catch((err) => console.log(err))
}

const Header = () => {
  const status = isLoggedIn()
    ? { path: "me/login", title: "Logout" }
    : { path: "me/login", title: "Login" }

  const links = [
    { path: "for-you", title: "You" },
    { path: "for-organizations", title: "Organizations" },
    { path: "coaching", title: "Coaching" },
    { path: "blog", title: "Blog" },
    { ...status },
  ]
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" title={"Nyxo"}>
          <NyxoLogo name="Nyxo" />
        </Link>
      </Logo>

      <Links>
        {links.map((item, index) => (
          <Li key={index}>
            {item.title === "Logout" && (
              <MenuLink onClick={signOut} to={`/${item.path}`}>
                {item.title}
              </MenuLink>
            )}
            {item.title != "Logout" && (
              <MenuLink to={`/${item.path}`}>{item.title}</MenuLink>
            )}
          </Li>
        ))}
      </Links>
    </HeaderContainer>
  )
}

export default Header

const Logo = styled.div`
  img {
    @media ${device.mobileS} {
      width: 5rem;
    }
    width: 5rem;
  }

  @media ${minDevice.mobileS} {
    margin-bottom: 1rem;
  }

  @media ${minDevice.tablet} {
    margin-bottom: 0rem;
  }
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--bg);
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
    padding: 1rem;
  }

  @media ${minDevice.mobileS} {
    flex-direction: column;
    padding: 1rem;
  }

  @media ${minDevice.tablet} {
    flex-direction: row;
    padding: 1.5rem;
  }

  @media ${minDevice.tabletL} {
    flex-direction: row;
    padding: 1.5rem;
  }

  @media ${minDevice.laptopL} {
    flex-direction: row;
    padding: 2rem;
  }
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;

  @media ${minDevice.mobileS} {
    width: 100%;
    justify-content: space-evenly;
    padding: 0rem 0rem;
  }

  @media ${minDevice.tablet} {
    justify-content: flex-end;
    padding: 0rem 1rem;
  }
`

const Li = styled.li`
  list-style: none;
  font-family: var(--semibold);
  font-weight: 600;
  font-style: normal;
  padding-left: 1rem;

  @media ${device.mobileS} {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }

  @media ${device.tablet} {
    font-size: 1rem;
  }
`

const MenuLink = styled(Link)`
  transition: 0.2s opacity cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 0.8;
  }

  color: var(--radiantBlue);

  &:hover,
  &:active {
    color: var(--radiantBlue);
    border-bottom: 3px solid var(--radiantBlue);
    padding-bottom: 10px;
  }
`

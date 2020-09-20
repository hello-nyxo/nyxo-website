import { navigate } from "@reach/router"
import { Auth } from "aws-amplify"
import { Link as NonLocalizedLink } from "gatsby"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { isLoggedIn } from "../auth/AppUser"
import { minDevice } from "../components/Primitives"

const signOut = () => {
  Auth.signOut()
    .then(() => navigate("/me/login"))
    .catch((err) => console.log(err))
}

const Header: FC = () => {
  const { t } = useTranslation()
  const { languages, originalPath, language } = useI18next()

  const status = isLoggedIn()
    ? { path: "me/details", title: "ME" }
    : { path: "me/login", title: "LOGIN" }

  const links = [
    { path: "for-you", title: "YOU" },
    { path: "for-organizations", title: "ORGANIZATIONS" },
    { path: "coaching", title: "COACHING" },
    { path: "blog", title: "BLOG" },
    { path: "devices", title: "DEVICES" },
    { ...status },
  ]

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" title={"Nyxo"}>
          Nyxo
        </Link>
      </Logo>
      <Links>
        {links.map(({ title, path }) => (
          <Li key={title}>
            {title === "LOGIN" || title === "ME" ? (
              <NonLocalizedMenuLink to={`/${path}`}>
                {t(`NAVIGATION.${title}`)}
              </NonLocalizedMenuLink>
            ) : (
              <MenuLink to={`/${path}`}>{t(`NAVIGATION.${title}`)}</MenuLink>
            )}
          </Li>
        ))}
        {/* {languages.map((lang) => // TODO create a better language dropdown
          lang === language ? null : ( */}
        {language === "en" ? (
          <Li key={"fi"}>
            <MenuLink to={originalPath} language={"fi"}>
              {t("fi")}
            </MenuLink>
          </Li>
        ) : (
          <Li key={"en"}>
            <MenuLink to={originalPath} language={"en"}>
              {t("en")}
            </MenuLink>
          </Li>
        )}
        {/* )
        )} */}
      </Links>
    </HeaderContainer>
  )
}

export default Header

const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  font-style: normal;
  font-family: var(--semibold);

  a {
    color: hsl(255deg, 85%, 30%);
  }

  @media ${minDevice.mobileS} {
    flex: 1;
    margin-bottom: 1.5rem;
  }

  @media ${minDevice.tablet} {
    margin-bottom: 0rem;
  }
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${minDevice.mobileL} {
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
  }

  @media ${minDevice.mobileS} {
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
  }

  @media ${minDevice.tablet} {
    flex-direction: row;
    align-items: flex-end;
    padding: 1.5rem;
  }

  @media ${minDevice.tabletL} {
    flex-direction: row;
    align-items: flex-end;
    padding: 1.5rem;
  }

  @media ${minDevice.laptopL} {
    flex-direction: row;
    align-items: flex-end;
    padding: 2rem;
  }
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${minDevice.mobileS} {
    width: 100%;
    justify-content: center;
    padding: 0rem 0rem;
  }

  @media ${minDevice.tablet} {
    justify-content: flex-start;
    padding: 0rem 1rem;
  }
`

const Li = styled.li`
  list-style: none;
  font-family: var(--medium);
  font-weight: 500;
  font-style: normal;

  @media ${minDevice.mobileS} {
    font-size: 0.9rem;
    margin: 0rem 0.5rem 0rem 0.5rem;
  }

  @media ${minDevice.tablet} {
    font-size: 1rem;
  }
`

const MenuLink = styled(Link)`
  transition: 0.2s opacity cubic-bezier(0.075, 0.82, 0.165, 1);

  color: var(--radiantBlue);
  opacity: 0.9;
  &:hover,
  &:active {
    opacity: 1;
    color: var(--radiantBlue);
    border-bottom: 3px solid var(--radiantBlue);
    padding-bottom: 10px;
  }
`

const NonLocalizedMenuLink = styled(NonLocalizedLink)`
  transition: 0.2s opacity cubic-bezier(0.075, 0.82, 0.165, 1);

  color: var(--radiantBlue);
  opacity: 0.9;

  &:hover,
  &:active {
    opacity: 1;
    color: var(--radiantBlue);
    border-bottom: 3px solid var(--radiantBlue);
    padding-bottom: 10px;
  }
`

import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { Icon } from "../Icons"
import { device, minDevice } from "../Primitives"

const FloatingPrompt: FC = () => {
  const { t } = useTranslation()
  return (
    <Banner>
      <TextMobile>{t("PROMPT.MOBILE")}</TextMobile>
      <TextTablet>{t("PROMPT.TABLET")}</TextTablet>
      <TextDesktop>{t("PROMPT.DESKTOP")}</TextDesktop>
      <Button to="get-nyxo">
        <ButtonText>{t("PROMPT.BUTTON")}</ButtonText>
        <Arrow />
      </Button>
    </Banner>
  )
}

export default FloatingPrompt

const Banner = styled.div`
  position: fixed;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.75rem;
  background-color: hsl(255deg, 85%, 30%);
  border-radius: 0.75rem;
  z-index: 20;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.p`
  color: white;
  margin-left: 1rem;
`

const TextMobile = styled(Text)`
  display: block;
  @media ${minDevice.tablet} {
    display: none;
  }
`

const TextTablet = styled(Text)`
  display: none;
  @media ${minDevice.tablet} {
    display: block;
  }
  @media ${minDevice.laptop} {
    display: none;
  }
`

const TextDesktop = styled(Text)`
  display: none;

  @media ${minDevice.laptop} {
    display: block;
  }
`

const Button = styled(Link)`
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.25rem;
  color: var(--textPrimary);
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-style: normal;
  font-family: var(--medium);
  align-items: center;
`

const ButtonText = styled.p`
  display: none;
  @media ${minDevice.tablet} {
    display: block;
  }
`

const Arrow = styled(Icon).attrs(() => ({
  name: "keyboardArrowRight",
  height: 25,
  fill: "none",
  stroke: "var(--textPrimary)",
  width: 25,
  viewBox: "0 0 25 25",
}))`
  margin: 0;

  @media ${minDevice.tablet} {
    display: block;
    margin-left: 1rem;
  }
`

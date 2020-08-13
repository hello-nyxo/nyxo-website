import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import devices from "../../devices"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { useTranslation } from "gatsby-plugin-react-i18next"

const GetAppBanner: FC = () => {
  const data = useStaticQuery(graphql`
    {
      apple: file(name: { eq: "app-store-button" }) {
        publicURL
      }
      android: file(name: { eq: "playstore-button" }) {
        publicURL
      }
    }
  `)
  const { t } = useTranslation()

  return (
    <CallToAction>
      <H2>{t("GET_THE_APP.TITLE")}</H2>
      <Description>{t("GET_THE_APP.TEXT")}</Description>

      <Buttons>
        <Button
          href="https://apps.apple.com/app/nyxo/id1440417031"
          target="_new"
          rel="noopener noreferrer">
          <img alt={"App Store"} src={data?.apple?.publicURL} />
        </Button>
        <Button
          href="https://play.google.com/store/apps/details?id=fi.nyxo.app"
          target="_new"
          rel="noopener noreferrer">
          <img alt={"Google Play"} src={data?.android?.publicURL} />
        </Button>
      </Buttons>
    </CallToAction>
  )
}

export default GetAppBanner

const CallToAction = styled.div`
  text-align: center;
  background-color: var(--radiantBlue);
  color: #ffffff;
  border-radius: 20px 20px 0px 0px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 15rem;

  @media ${devices.mobileL} {
    min-height: 25rem;
  }
`

const Buttons = styled.div`
  margin-top: 3rem;
  flex-direction: row;
`

const Button = styled(OutboundLink)`
  flex: 1;
  padding: 0 0.5rem;
  img {
    max-height: 2rem;
  }
  @media ${devices.mobileL} {
    img {
      max-height: 3rem;
    }
  }
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`

const H2 = styled.h2`
  color: white;
  font-size: 2.5rem;
  line-height: 4rem;
  margin: 0 0 1rem;

  @media ${devices.mobileL} {
    font-size: 4rem;
  }
`

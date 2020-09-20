import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"

const DownloadLinks: FC = () => {
  const { t } = useTranslation()
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

  const appLinks = [
    {
      alt: "App store button",
      href: "https://apps.apple.com/app/nyxo/id1440417031",
      logo: data.apple.publicURL,
    },
    {
      alt: "Playstore button",
      href: "https://play.google.com/store/apps/details?id=fi.nyxo.app",
      logo: data.android.publicURL,
    },
  ]
  return (
    <>
      <FlexContainer>
        <CTAHeader>{t("INDEX.DOWNLOAD_NYXO")}</CTAHeader>
        {appLinks.map((item) => (
          <DownloadButton2
            key={item.href}
            href={item.href}
            target="_new"
            rel="noopener noreferrer">
            <img alt={item.alt} src={item.logo} />
          </DownloadButton2>
        ))}
      </FlexContainer>
    </>
  )
}

export default DownloadLinks

const FlexContainer = styled.div`
  width: 30rem;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 2rem;

  @media screen and (max-width: 768px) {
    width: 70%;
    border: 0.5px solid rgba(255, 255, 255, 0.52);
    box-shadow: none;
    margin: 1rem auto;
    position: relative;
    padding: 0px 2rem;
    text-align: center;
  }

  img {
    height: 2rem;
    cursor: pointer;
  }

  a {
    flex-grow: 1;
    cursor: pointer;
    padding-top: 0.2rem;
  }
`

const DownloadButton2 = styled(OutboundLink)``

const CTAHeader = styled.h2`
  flex-grow: 1;
  line-height: 1rem;

  @media screen and (max-width: 719px) {
    display: none;
  }
`

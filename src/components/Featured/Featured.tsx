import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"

const Featured: FC = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    {
      mediuutiset: file(name: { eq: "mediuutiset" }) {
        publicURL
      }
      talouselama: file(name: { eq: "talouselama" }) {
        publicURL
      }
      techcrunch: file(name: { eq: "techcrunch" }) {
        publicURL
      }
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

  const news = [
    {
      alt: "Mediauutiset logo",
      href:
        "https://www.mediuutiset.fi/uutiset/unettomuutta-voi-hoitaa-laakkeettomasti-verkossa-tarkeinta-on-se-mita-paivasaikaan-tapahtuu/725e988a-1cb3-4deb-920c-6b29cfbeaa2b",
      logo: data.mediuutiset.publicURL,
    },
    {
      alt: "Talouselämä logo",
      href:
        "https://www.talouselama.fi/uutiset/unihairioiden-kustannukset-tyonantajille-ovat-yhteensa-noin-60-miljoonaa-euroa-vuodessa-unettomuutta-voi-pian-hoitaa-laakkeettomasti-verkossa/fdfe1251-5510-421b-9cdd-67efc628d43b",
      logo: data.talouselama.publicURL,
    },
    {
      alt: "techcrunch logo",
      href:
        "https://techcrunch.com/2019/12/11/nyxo-is-building-an-app-based-sleep-coaching-program/",
      logo: data.techcrunch.publicURL,
    },
  ]
  return (
    <>
      <FlexContainer>
        <CTAHeader>{t("INDEX.GET_THE_APP")}</CTAHeader>
        {appLinks.map((item) => (
          <DownloadButton
            key={item.href}
            href={item.href}
            target="_new"
            rel="noopener noreferrer">
            <img alt={item.alt} src={item.logo} />
          </DownloadButton>
        ))}
      </FlexContainer>
      <LogoSection>
        {news.map((item, index) => (
          <GuestLogo key={index}>
            <OutboundLink
              href={item.href}
              target="_new"
              rel="noopener noreferrer">
              <img alt={item.alt} src={item.logo} />
            </OutboundLink>
          </GuestLogo>
        ))}
      </LogoSection>
    </>
  )
}

export default Featured

const LogoSection = styled.div`
  width: max-content;
  margin: 50px auto;

  @media screen and (max-width: 768px) {
  }
`

const GuestLogo = styled.div`
  width: max-content;
  margin: 0px 1rem;
  display: inline-block;

  img {
    height: 1.5rem;
    filter: grayscale(100%);
    transition: 0.3s filter ease-in-out;
    &:hover {
      filter: grayscale(0%);
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0px 1rem;

    img {
      height: 1rem;
    }
  }
`

const FlexContainer = styled.div`
  width: 30rem;
  margin: -2rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;
  border: 0.5px solid rgba(255, 255, 255, 0.52);
  box-shadow: 9px 9px 22px -2px rgb(163, 177, 198, 0.5),
    -9px -9px 18px rgba(255, 255, 255, 0.52);
  background-color: #fff;
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

const DownloadButton = styled(OutboundLink)``

const CTAHeader = styled.h2`
  flex-grow: 1;
  font-weight: bolder;
  line-height: 1rem;

  @media screen and (max-width: 719px) {
    display: none;
  }
`

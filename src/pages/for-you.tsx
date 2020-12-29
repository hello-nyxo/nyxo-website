import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import devices from "../devices"
import GetAppBanner from "../components/GetAppBanner"
import { H2, H3 } from "../components/Html/HtmlContent"
import Layout from "~theme/components/Layout/Layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/page/Header"
import PricingCard from "../components/PricingCard/PricingCard"
import { Container, P } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { useTranslation } from "gatsby-plugin-react-i18next"

const pricing = {
  free: {
    title: "FREE",
    price: "0€",
    perks: ["TRACKING", "DIARY", "CLOUD", "SERVICE"],
  },
  premium: {
    title: "PREMIUM",
    price: "4.99€",
    perks: ["TRACKING", "DIARY", "CLOUD", "SERVICE", "COACHING", "ACCESS"],
  },
}

type Props = {
  forYouCover: any
  forYouMeta: any
}

const ForYouPage: FC<PageProps<Props>> = (props) => {
  const {
    location: { pathname },
    data: { forYouMeta, forYouCover },
  } = props
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("FOR_YOU.TITLE")}
        pathName={pathname}
        description={t("FOR_YOU.DESCRIPTION")}
        staticImage={true}
        image={forYouMeta.childImageSharp.fixed.src}
      />

      <Container>
        <PageHeader
          title={t("FOR_YOU.TITLE")}
          subtitle={t("FOR_YOU.DESCRIPTION")}
          coverPhoto={forYouCover?.childImageSharp?.fluid}
        />

        <div className={"targets"}>
          <H2>{t("FOR_YOU.NYXO_OFFERING")}</H2>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_YOU.TITLE_1")}</H3>
                <P>{t("FOR_YOU.TEXT_1")}</P>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_YOU.TITLE_2")}</H3>
                <P>{t("FOR_YOU.TEXT_2")}</P>
              </div>
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_YOU.TITLE_3")}</H3>
                <P>{t("FOR_YOU.TEXT_3")}</P>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_YOU.TITLE_4")}</H3>
                <P>{t("FOR_YOU.TEXT_4")}</P>
              </div>
            </div>
          </div>

          <PricingRow>
            <PricingCard
              name={pricing.free.title}
              price={pricing.free.price}
              perks={pricing.free.perks}
            />

            <PricingCard
              name={pricing.premium.title}
              price={pricing.premium.price}
              perks={pricing.premium.perks}
            />
          </PricingRow>
        </div>
      </Container>

      <GetAppBanner />
      <NewsLetterForm />
    </Layout>
  )
}

export default ForYouPage

const PricingRow = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 3rem -1rem;
  @media ${devices.mobileS} {
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.tablet} {
    flex-direction: row;
  }
`

export const pageQuery = graphql`
  query ForYouPageQuery {
    forYouCover: file(name: { regex: "/for-you-cover/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    forYouMeta: file(name: { regex: "/For you/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

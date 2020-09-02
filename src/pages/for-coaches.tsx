import { graphql, PageProps } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import GetAppBanner from "../components/GetAppBanner"
import { H2, H3 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/page/Header"
import { Container, P } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

type Props = {
  forCoachesCover: any
  forCoachesMeta: any
}

const ForYouPage: FC<PageProps<Props>> = (props) => {
  const {
    location: { pathname },
    data: { forCoachesMeta, forCoachesCover },
  } = props
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("FOR_COACHES.TITLE")}
        pathName={pathname}
        description={t("FOR_COACHES.DESCRIPTION")}
        staticImage={true}
        image={forCoachesMeta.childImageSharp.fixed.src}
      />

      <Container>
        <PageHeader
          title={t("FOR_COACHES.TITLE")}
          subtitle={t("FOR_COACHES.DESCRIPTION")}
          coverPhoto={forCoachesCover?.childImageSharp?.fluid}
        />

        <div className={"targets"}>
          <H2>{t("FOR_COACHES.NYXO_OFFERING")}</H2>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_YOU.TITLE_1")}</H3>
                <P>{t("FOR_YOU.TEXT_1")}</P>
              </div>
            </div>
          </div>
        </div>

        <H2>This is for you</H2>

        <ul>
          <li>Univalmentajille</li>
          <li>Liikunta- ja hyvinvointialan ammattilaisille</li>
          <li>Terveydenhuoltoalan ammattilaisille</li>
        </ul>
      </Container>

      <H2>What's included</H2>
      <p>With Nyxo for Coaches you get the following features:</p>

      <ul>
        <li>Access to all Nyxo Coaching Materials</li>
        <li>
          Create your own materials, e.g. coaching weeks and include them in the
          coaching
        </li>
        <li></li>
      </ul>

      <GetAppBanner />
      <NewsLetterForm />
    </Layout>
  )
}

export default ForYouPage

export const pageQuery = graphql`
  query ForCoachesPageQuery {
    forCoachesCover: file(name: { regex: "/for-coaches/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    forCoachesMeta: file(name: { regex: "/for-coaches/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

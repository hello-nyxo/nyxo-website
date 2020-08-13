import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import GetAppBanner from "../components/GetAppBanner"
import { H1, H2, H3, P } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/page/Header"
import PricingTable from "../components/PricingTable/PricingTable"
import { Container, Demo } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

type Props = {
  forOrganizationsMeta: any
  organizationsCover: any
}

const ForOrganizations: FC<PageProps<Props>> = ({
  location: { pathname },
  data: { forOrganizationsMeta, organizationsCover },
}) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("FOR_ORGANIZATIONS.TITLE")}
        pathName={pathname}
        description={t("FOR_ORGANIZATIONS.DESCRIPTION")}
        staticImage={true}
        image={forOrganizationsMeta.childImageSharp.fixed.src}
      />

      <Container>
        <PageHeader
          title={t("FOR_ORGANIZATIONS.TITLE")}
          subtitle={t("FOR_ORGANIZATIONS.DESCRIPTION")}
          coverPhoto={organizationsCover.childImageSharp.fluid}
        />

        <div className={"targets"}>
          <div className={"title"}>
            <H2>{t("FOR_ORGANIZATIONS.SUBTITLE")}</H2>
          </div>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_ORGANIZATIONS.TITLE_1")}</H3>
                <P>{t("FOR_ORGANIZATIONS.TEXT_1")}</P>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_ORGANIZATIONS.TITLE_2")}</H3>
                <P>{t("FOR_ORGANIZATIONS.TEXT_2")}</P>
              </div>
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_ORGANIZATIONS.TITLE_3")}</H3>
                <P>{t("FOR_ORGANIZATIONS.TEXT_3")}</P>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <H3>{t("FOR_ORGANIZATIONS.TITLE_4")}</H3>
                <P>{t("FOR_ORGANIZATIONS.TEXT_4")}</P>
              </div>
            </div>
          </div>

          <PricingTable />

          <InfoText>{t("FOR_ORGANIZATIONS.CONTACT")}</InfoText>
          <BookDemo
            rel="noopener"
            href="https://calendly.com/nyxo"
            target="_blank">
            {t("FOR_ORGANIZATIONS.DEMO_BUTTON")}
          </BookDemo>
        </div>
      </Container>

      <GetAppBanner />
      <NewsLetterForm />
    </Layout>
  )
}

export default ForOrganizations

export const pageQuery = graphql`
  query ForOrganizationsQuery {
    organizationsCover: file(name: { regex: "/organizations-cover/" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    forOrganizationsMeta: file(name: { regex: "/For organizations/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    allDataJson {
      nodes {
        for_organizations {
          title
          description
        }
      }
    }
  }
`

const InfoText = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`

const BookDemo = styled(Demo)`
  margin: 0px auto 50px auto;
`

const Cover = styled(Image)`
  width: 100%;
  height: 100%;
`

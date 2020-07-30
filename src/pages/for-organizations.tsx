import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import GetAppBanner from "../components/GetAppBanner"
import { H1 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/page/Header"
import PricingTable from "../components/PricingTable/PricingTable"
import { Container, Demo } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

const ForOrganizations: FC<PageProps> = (props) => {
  const {
    location: { pathname },
    data: {
      forOrganizationsMeta,
      allDataJson: { nodes },
      organizationsCover,
    },
  } = props
  const pageInfo = nodes[0].for_organizations

  return (
    <Layout>
      <SEO
        title={pageInfo.title}
        pathName={pathname}
        description={pageInfo.description}
        staticImage={true}
        image={forOrganizationsMeta.childImageSharp.fixed.src}
      />

      <Container>
        <PageHeader
          title={pageInfo.title}
          subtitle={pageInfo.description}
          coverPhoto={organizationsCover.childImageSharp.fluid}
        />

        <div className={"targets"}>
          <div className={"title"}>
            <h2>What Nyxo Provides For Your Organization</h2>
          </div>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <h3>Nyxo for Teams</h3>
                <p>
                  Sleep is a key factor in both personal well-being and a
                  balanced worklife. With Nyxo for Teams your whole organization
                  can enjoy the benefits of Nyxo sleep coaching.
                </p>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <h3>Unlock the Full Potential of Your Team</h3>
                <p>
                  Did you know that the productivity loss caused by insufficient
                  sleep costs{" "}
                  <a href="https://www.rand.org/randeurope/research/projects/the-value-of-the-sleep-economy.html">
                    hundreds of billions
                  </a>{" "}
                  to the employers and the society every year? We help your
                  organization to perform smoother and achieve your productivity
                  goals without compromising employee well-being.
                </p>
              </div>
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <h3>Group Analytics</h3>
                <p>
                  (Coming soon.) We highlight the main areas of improvement by
                  providing group-level analytics and reports on how your
                  organization is sleeping. The data are anonymized and cannot
                  be connected to individual employees.
                </p>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <h3>Happy and Energetic Working Community</h3>
                <p>
                  A well-rested and healthy employee is a happy and motivated
                  employee. And happy faces set the mood for the whole working
                  environment. Now who wouldn’t want to work in a joyful and
                  supportive atmosphere?
                </p>
              </div>
            </div>
          </div>

          <PricingTable />

          <InfoText>
            Contact us for more information on Nyxo for Teams!
          </InfoText>
          <BookDemo
            rel="noopener"
            href="https://calendly.com/nyxo"
            target="_blank">
            Book a Free Demo
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

const Title = styled(H1)`
  text-align: center;
  margin-top: 5rem;
  font-size: 4rem;
`

const Subtitle = styled.h4`
  text-align: center;
`

const CoverPhotoContainer = styled.div`
  margin: 5rem 0rem;
  height: 30rem;
  max-height: 50vh;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);
`

const Cover = styled(Image)`
  width: 100%;
  height: 100%;
`

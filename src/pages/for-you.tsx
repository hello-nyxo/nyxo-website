import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import devices from "../devices"
import GetAppBanner from "../components/GetAppBanner"
import { H2, H3 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/page/Header"
import PricingCard from "../components/PricingCard/PricingCard"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

const pricing = {
  free: {
    title: "Free",
    price: "0€",
    perks: [
      "Sleep tracking & metrics",
      "Sleep diary & daily habits",
      " Nyxo Cloud service",
      "Quick and responsive tech support",
    ],
  },
  premium: {
    title: "Premium",
    price: "4.99€",
    perks: [
      "Sleep tracking & metrics",
      "Sleep diary & daily habits",
      " Nyxo Cloud service",
      "Quick and responsive tech support",
      "4-week data-driven sleep coaching program",
      " Full access to the coaching materials",
    ],
  },
}

const ForYouPage: FC<PageProps> = (props) => {
  const {
    location: { pathname },
    data: {
      forYouMeta,
      forYouCover,
      allDataJson: { nodes },
    },
  } = props
  const pageInfo = nodes[0].for_you

  return (
    <Layout>
      <SEO
        title={pageInfo.title}
        pathName={pathname}
        description={pageInfo.description}
        staticImage={true}
        image={forYouMeta.childImageSharp.fixed.src}
      />

      <Container>
        <PageHeader
          title={pageInfo.title}
          subtitle={pageInfo.description}
          coverPhoto={forYouCover?.childImageSharp?.fluid}
        />

        <div className={"targets"}>
          <H2>What Nyxo Provides For You</H2>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>Top Notch Sleep Tracking for Free</H3>
                <p>
                  Our easy and highly compatible sleep tracking and diary
                  functionality along with your sleep metrics are completely
                  free to use. You can easily import your sleep data from a
                  variety of different sleep trackers, as long as they are Apple
                  Health or Google Fit compatible. Alternatively, you can use
                  the App as a sleep diary and manually track your nights.
                </p>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <H3>Personalized Sleep Coaching</H3>
                <p>
                  We combine the latest sleep research and leading behavioral
                  techniques with your sleep data and provide you with a 4-week
                  long personalized coaching program that is designed to help
                  you sleep better. It focuses on all aspects of your sleep and
                  targets areas of improvement in your daily routines and
                  sleeping habits. Premium feature available for 7.99 € / month.
                </p>
              </div>
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"item"}>
                <H3>Cloud Backups</H3>
                <p>
                  Creating a Nyxo Cloud account (optional) allows you to sync
                  and store all your data in the Nyxo Cloud. You also have an
                  option to give other users, such as health care or insurance
                  providers, access to your data via Nyxo Cloud. Nyxo Cloud
                  website will be released later this year.
                </p>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"item"}>
                <H3>Health, Well-being and Productivity Benefits</H3>
                <p>
                  We humans are like incredibly complex pieces of machinery that
                  require day to day maintenance in order to function properly.
                  Sleep is one of the few basic necessities in life. It affects
                  our mental and physical well-being, performance, productivity,
                  creativity and countless other things every day. Yet it is
                  often overlooked. We help you to make the most out of the time
                  you spend in bed.
                </p>
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
    allDataJson {
      nodes {
        for_you {
          title
          description
        }
      }
    }
  }
`

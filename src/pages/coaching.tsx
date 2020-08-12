import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { CoachingPageQueryQuery } from "../../graphql-types"
import AuthorList from "../components/Author/AuthorList"
import GetAppBanner from "../components/GetAppBanner"
import HabitHighlights from "../components/Habit/HabitHighlights"
import { H1, H2, H3 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import LessonHighlights from "../components/LessonHighlights/LessonHighlights"
import { Container, P } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import WeekHighlights from "../components/week/WeekHighlights"

const CoachingPage: FC<PageProps<CoachingPageQueryQuery>> = (props) => {
  const locale = "en-US"
  const {
    data: {
      allDataJson: { nodes },
      allContentfulWeek,
      coachingMeta,
      coachingCover,
    },
    location: { pathname },
  } = props
  const weeks = allContentfulWeek.edges
  const pageInfo = nodes[0].coaching

  return (
    <Layout>
      <SEO
        title={pageInfo.title}
        description={pageInfo.description}
        pathName={pathname}
        image={coachingMeta.childImageSharp.fixed.src}
        staticImage={true}
      />

      <Container>
        <Title>{pageInfo.title}</Title>
        <Subtitle>The secret to good sleep is at your fingertips</Subtitle>
        <CoverPhotoContainer>
          <Cover fluid={coachingCover.childImageSharp.fluid} />
        </CoverPhotoContainer>
        <P>
          A good night’s sleep is the key to success. It makes you feel better,
          think better, and makes your more productive. The question is how can
          one improve their sleep? Once you go to bed, there isn’t much you can
          do to improve your sleep quality. However, there´s a clear connection
          between what you do during the day and your nightly sleep quality, and
          this is the central thesis of our sleep coaching.
        </P>
        <H3>How Nyxo Sleep Coaching Works</H3>
        <P>
          Nyxo Sleep Coaching is structured into four weeks, each one them
          focusing on a different part of good sleep. By connecting your sleep
          tracker to Nyxo, through the Nyxo app, we use your sleep data to
          personalize the coaching program to your unique needs. By examining
          different parts of daily activity, such as exercise, sleep, heart
          rate, and daily activity levels, we can bring you personalized advice
          in the form of lessons, practices, and facilitated habit change.
        </P>

        <LessonHighlights />

        <H2>Coaching weeks</H2>

        <WeekHighlights data={weeks} />

        <HabitHighlights locale={locale} />

        <H2>Authors</H2>
        <P>
          These are the authors behind the Nyxo materials you love. Here you can
          learn more about the authors, including their areas of expertise, and
          find all materials they&apos;ve written.
        </P>
        <AuthorList locale={locale} />
      </Container>
      <GetAppBanner />
    </Layout>
  )
}

export default CoachingPage

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

export const pageQueryCoaching = graphql`
  query CoachingPageQuery {
    coachingMeta: file(name: { regex: "/Coaching/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    coachingCover: file(name: { regex: "/coaching-cover/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }

    allDataJson {
      nodes {
        coaching {
          title
          description
        }
      }
    }

    allContentfulWeek(
      filter: { node_locale: { eq: "en-US" }, slug: { ne: "introduction" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          ...WeekFragment
        }
      }
    }
  }
`

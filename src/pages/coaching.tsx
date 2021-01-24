import { graphql, PageProps } from "gatsby"
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulWeek } from "../../graphql-types"
import AuthorList from "~components/Author/AuthorList"
import GetAppBanner from "~components/GetAppBanner"
import HabitHighlights from "~components/Habit/HabitHighlights"
import { H1, H2, H3 } from "~components/Html/HtmlContent"
import Layout from "~theme/components/Layout/Layout"
import LessonHighlights from "~components/LessonHighlights/LessonHighlights"
import { Container, P } from "~components/Primitives"
import SEO from "~components/SEO/SEO"
import WeekCard from "~components/week/WeekCard"
import {
  SuggestedContent,
  RecentlyUpdated,
} from "@hello-nyxo/gatsby-theme-nyxo-coaching"

type Props = {
  weeks: {
    nodes: ContentfulWeek[]
  }

  coachingMeta: {
    childImageSharp: {
      fixed: {
        src: string
      }
    }
  }
  coachingCover: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const CoachingPage: FC<PageProps<Props, { language: string }>> = (props) => {
  const {
    data: {
      weeks: { nodes: weeks },
      allContentfulLesson: { nodes: lessons },
      habits: { nodes: habits },
      recentlyUpdated: { nodes: recentlyUpdated },
      coachingMeta,
      coachingCover,
    },
    pageContext: { language },
    location: { pathname },
  } = props

  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("COACHING.TITLE")}
        description={t("COACHING.DESCRIPTION")}
        pathName={pathname}
        image={coachingMeta?.childImageSharp?.fixed?.src}
        staticImage={true}
      />

      <Container>
        <Title>{t("COACHING.TITLE")}</Title>
        <Subtitle>{t("COACHING.SUBTITLE")}</Subtitle>

        <CoverPhotoContainer>
          <Cover fluid={coachingCover.childImageSharp.fluid} />
        </CoverPhotoContainer>

        <SuggestedContent lessons={lessons} habits={habits} />

        <P>{t("COACHING.INTRODUCTION")}</P>
        <H3>{t("COACHING.HOW_IT_WORKS")}</H3>
        <P>{t("COACHING.HOW_IT_WORKS_TEXT")}</P>

        <RecentlyUpdated lessons={recentlyUpdated} />

        <LessonHighlights language={language} />

        <H2>{t("COACHING.WEEKS")}</H2>
        <P>{t("COACHING.WEEKS_TEXT")}</P>
        <Weeks>
          {weeks.map((week: ContentfulWeek) => {
            return (
              <WeekCard
                bookmarked={false}
                key={`${week?.slug}`}
                path={`/week/${week?.slug}`}
                intro={week?.intro}
                name={week?.weekName}
                duration={week?.duration}
                lessons={week?.lessons}
                coverPhoto={week?.coverPhoto?.fluid as FluidObject}
                slug={week.slug}
              />
            )
          })}
        </Weeks>

        <HabitHighlights locale={language} />
        <H2>{t("COACHING.AUTHORS")}</H2>
        <P>{t("COACHING.AUTHORS_TEXT")}</P>
        <AuthorList locale={language} />
      </Container>
      <GetAppBanner />
    </Layout>
  )
}

export default CoachingPage

const Title = styled(H1)`
  text-align: center;
  margin-top: 5rem;
  font-size: 2.8rem;
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

const Cover = styled(Image)<GatsbyImageProps>`
  width: 100%;
  height: 100%;
`

export const Weeks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem -1rem;
`

export const pageQueryCoaching = graphql`
  query CoachingQuery($language: String) {
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
    weeks: allContentfulWeek(
      filter: {
        fields: { language: { eq: $language } }
        slug: { ne: "introduction" }
      }
      sort: { fields: order }
    ) {
      nodes {
        ...WeekFragment
      }
    }

    habits: allContentfulHabit(
      filter: { fields: { language: { eq: $language } } }
    ) {
      nodes {
        ...HabitFragment
      }
    }

    allContentfulLesson(filter: { fields: { language: { eq: $language } } }) {
      nodes {
        ...LessonFragment
      }
    }

    recentlyUpdated: allContentfulLesson(
      filter: { fields: { language: { eq: $language } } }
      sort: { fields: updatedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        ...LessonFragment
      }
    }
  }
`

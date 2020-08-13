import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../LessonCard"
import { H2 } from "../Html/HtmlContent"
import { P } from "../Primitives"
import { useTranslation } from "gatsby-plugin-react-i18next"

const LessonHighlights: FC = () => {
  const { allContentfulLessonEN } = useStaticQuery(graphql`
    {
      allContentfulLessonEN: allContentfulLesson(
        filter: { node_locale: { eq: "en-US" } }
        limit: 8
      ) {
        edges {
          node {
            ...LessonFragment
          }
        }
      }
    }
  `)

  const { t } = useTranslation()
  return (
    <Container>
      <H2>{t("COACHING.LESSONS")}</H2>
      <P>{t("COACHING.LESSONS_TEXT")}</P>

      <Lessons>
        {allContentfulLessonEN.edges.map(
          ({ node }: { node: ContentfulLesson }) => (
            <LessonCard
              name={node.lessonName}
              key={node.slug}
              path={`/lesson/${node.slug}`}
              lesson={node}
              readingTime={node.lessonContent?.fields?.readingTime?.minutes}
              cover={node.cover?.fluid}
              excerpt={node.lessonContent?.fields?.excerpt}
            />
          )
        )}
      </Lessons>
    </Container>
  )
}

export default LessonHighlights

const Container = styled.div`
  margin: 10rem 0rem;
`

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

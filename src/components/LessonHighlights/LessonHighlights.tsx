import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import { H2 } from "../Html/HtmlContent"
import LessonCard from "../lesson/LessonCard"
import { P } from "../Primitives"

type Props = {
  language: string
}

const LessonHighlights: FC<Props> = ({ language }) => {
  const { lessonsEN, lessonsFI } = useStaticQuery(graphql`
    {
      lessonsEN: allContentfulLesson(
        filter: { node_locale: { eq: "en-US" } }
        limit: 8
      ) {
        nodes {
          ...LessonFragment
        }
      }

      lessonsFI: allContentfulLesson(
        filter: { node_locale: { eq: "fi-FI" } }
        limit: 8
      ) {
        nodes {
          ...LessonFragment
        }
      }
    }
  `)

  const { t } = useTranslation()
  const lessons = language === "fi" ? lessonsFI : lessonsEN

  return (
    <Container>
      <H2>{t("COACHING.LESSONS")}</H2>
      <P>{t("COACHING.LESSONS_TEXT")}</P>

      <Lessons>
        {lessons.nodes.map((lesson: ContentfulLesson) => (
          <LessonCard
            slug={`${lesson?.slug}`}
            name={lesson?.lessonName}
            key={lesson?.slug as string}
            bookmarked={false}
            onClick={() => {}}
            loading={false}
            path={`/lesson/${lesson?.slug}`}
            lesson={lesson}
            readingTime={lesson?.lessonContent?.fields?.readingTime?.minutes}
            cover={lesson?.cover?.fluid as FluidObject}
            excerpt={lesson?.lessonContent?.fields?.excerpt}
          />
        ))}
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

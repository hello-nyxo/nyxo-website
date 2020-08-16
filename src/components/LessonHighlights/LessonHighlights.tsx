import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import LoggedInUserLessonList from "./LoggedInUserLessonsList"
import LoggedOutUserLessonList from "./LoggedOutUserLessonsList"
import { isLoggedIn } from "../../auth/AppUser"
import { P } from "../Primitives"
import { H3 } from "../Html/HtmlContent"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../LessonCard"
import { H2 } from "../Html/HtmlContent"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { FluidObject } from "gatsby-image"

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
      <H3>Lessons</H3>
      <P>The world´s largest selection of sleep lessons</P>
      {isLoggedIn() ? (
        <LoggedInUserLessonList data={lessons} />
      ) : (
        <LoggedOutUserLessonList data={lessons} />
      )}

      <H2>{t("COACHING.LESSONS")}</H2>
      <P>{t("COACHING.LESSONS_TEXT")}</P>

      <Lessons>
        {lessons.nodes.map((node: ContentfulLesson) => (
          <LessonCard
            name={node.lessonName}
            key={node.slug as string}
            path={`/lesson/${node.slug}`}
            lesson={node}
            readingTime={node.lessonContent?.fields?.readingTime?.minutes}
            cover={node.cover?.fluid as FluidObject}
            excerpt={node.lessonContent?.fields?.excerpt}
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

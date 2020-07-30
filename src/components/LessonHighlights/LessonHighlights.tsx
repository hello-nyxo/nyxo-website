import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../LessonCard"
import { H3 } from "../Html/HtmlContent"
import { P } from "../Primitives"

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

  return (
    <Container>
      <H3>Lessons</H3>
      <P>The world´s largest selection of sleep lessons</P>

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

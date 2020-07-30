import { graphql, Link, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import { H5 } from "../Html/HtmlContent"

const LessonsPreview: FC = () => {
  const { allContentfulLessonEN } = useStaticQuery(graphql`
    {
      allContentfulLessonEN: allContentfulLesson(
        filter: { node_locale: { eq: "en-US" } }
        limit: 5
      ) {
        edges {
          node {
            ...LessonFragment
          }
        }
      }
    }
  `) as { allContentfulLessonEN: { edges: { node: ContentfulLesson }[] } }

  return (
    <Container>
      <H5>Lessons</H5>

      <MobilePhone>
        {allContentfulLessonEN.edges.map(({ node }) => (
          <MobileLessonCard
            key={node.lessonName}
            title={node.lessonName}
            author={node.author}
          />
        ))}
      </MobilePhone>
    </Container>
  )
}

export default LessonsPreview

const Container = styled.div``

type Props = {
  title?: string | null
  author?: string | null
  readingTime?: number | null
}

const MobileLessonCard: FC<Props> = ({
  title = "Do You Sleep Enough",
  author = "Pietari Nurmi",
}) => {
  return (
    <Card to="/">
      <Column>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Column>
      <CoverImage />
    </Card>
  )
}

const Card = styled(Link)`
  background-color: var(--bg);
  display: flex;
`

const Title = styled.h6``

const Author = styled.span``

const MobilePhone = styled.div``

const Column = styled.div``

const CoverImage = styled.div``

import React, { FC } from "react"
import styled, { keyframes } from "styled-components"
import { H3, H6 } from "../Html/HtmlContent"
import { useStaticQuery, graphql, Link } from "gatsby"
import { device } from "../Primitives"

type Sections = {
  allContentfulSection: {
    nodes: { title: string; lesson: { lessonName: string; slug: string }[] }[]
  }
}

export const CoachingHighlight: FC = () => {
  const {
    allContentfulSection: { nodes: sections },
  } = useStaticQuery(graphql`
    {
      allContentfulSection(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          title
          lesson {
            lessonName
            slug
          }
        }
      }
    }
  `) as Sections

  return (
    <Container>
      <Title>Variety of articles for every sleeper</Title>
      <SlideShow>
        <Row>
          {sections.map((section) => (
            <Column key={section.title}>
              <H6>{section.title}</H6>
              <ul>
                {section.lesson.map((lesson) => (
                  <li key={lesson.slug}>
                    <ArticleLink to={lesson.slug}>
                      {lesson.lessonName}
                    </ArticleLink>
                  </li>
                ))}
              </ul>
            </Column>
          ))}
        </Row>
      </SlideShow>
    </Container>
  )
}

const Container = styled.div``

const SlideShow = styled.div`
  position: relative;
  transform: translate3d(0, 0, 0);
`

const Title = styled(H3)`
  text-align: center;
`
const move = keyframes` 
 100% { 
    transform: translateX(-66.6666%);  
  }
`

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  animation: ${move} 30s linear infinite;
`

const Column = styled.div`
  padding: 0rem 1rem;
  flex: 0 0 300px;
  display: block;
  box-sizing: border-box;
`

const ArticleLink = styled(Link)`
  font-size: 1.15rem;
  line-height: 2rem;
  display: block;
  margin-bottom: 1.5rem;
`

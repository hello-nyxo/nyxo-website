import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import LoggedInUserLessonList from "./LoggedInUserLessonsList"
import LoggedOutUserLessonList from "./LoggedOutUserLessonsList"
import { isLoggedIn } from "../../auth/AppUser"
import { P } from "../Primitives"
import { H3 } from "../Html/HtmlContent"
import styled from "styled-components"

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
      {isLoggedIn() ? (
        <LoggedInUserLessonList data={allContentfulLessonEN} />
      ) : (
        <LoggedOutUserLessonList data={allContentfulLessonEN} />
      )}
    </Container>
  )
}

export default LessonHighlights

const Container = styled.div`
  margin: 10rem 0rem;
`

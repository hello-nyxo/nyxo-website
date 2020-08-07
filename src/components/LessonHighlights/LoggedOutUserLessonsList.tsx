import React from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../lesson/LessonCard"

interface Props {
  data: any
}

const LoggedOutUserlessonsList = (props: Props) => {
  return (
    <Lessons>
      {props.data.edges.map(({ node }: { node: ContentfulLesson }) => {
        return (
          <LessonCard
            key={node.slug}
            slug={node.slug}
            name={node.lessonName}
            path={`/lesson/${node.slug}`}
            lesson={node}
            readingTime={node.lessonContent?.fields?.readingTime?.minutes}
            cover={node.cover?.fluid}
            excerpt={node.lessonContent?.fields?.excerpt}
          />
        )
      })}
    </Lessons>
  )
}

export default LoggedOutUserlessonsList

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

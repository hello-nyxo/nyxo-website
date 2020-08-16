import React from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../lesson/LessonCard"

interface Props {
  data: any
}

const LoggedOutUserlessonsList = (props: Props) => {
  const { data } = props

  return (
    <Lessons>
      {data.nodes.map((lesson: ContentfulLesson) => {
        return (
          <LessonCard
            key={lesson.slug}
            slug={lesson.slug}
            name={lesson.lessonName}
            path={`/lesson/${lesson.slug}`}
            lesson={lesson}
            readingTime={lesson.lessonContent?.fields?.readingTime?.minutes}
            cover={lesson.cover?.fluid}
            excerpt={lesson.lessonContent?.fields?.excerpt}
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

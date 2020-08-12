import React from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../lesson/LessonCard"
import { useQuery } from "react-query"
import { FetchLessonBookmark } from "../BookmarkButton/fetchBookmarks"
import { ContentLoader, Button } from "../StyledComponents/styledComponents"
import { listLikedContents } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"

interface Props {
  data: any
}

const LoggedInUserlessonsList = (props: Props) => {
  const { data } = props

  const { data: bookmarkData, status } = useQuery(
    "lessonKey",
    FetchLessonBookmark
  )

  let i
  const limit = 3
  if (status === "error") {
    for (i = 0; i < limit; i++) {
      const { data, status } = useQuery("lessonKey", FetchLessonBookmark)
    }
  }

  const fetchData = () => {
    useQuery("lessonKey", FetchLessonBookmark)
  }

  return (
    status === "loading" ||
      (status === "error" && (
        <>
          <P>Loading additional data....</P>
          <ContentLoader
            type="Oval"
            color="#4a5aef"
            height={24}
            width={24}
            timeout={3000}
          />
          {i >= limit && (
            <>
              <p>There was a problem loading your data.</p>
              <Button onClick={fetchData}>Retry loading data</Button>
            </>
          )}
          <Lessons>
            {data.edges.map(({ node: lesson }: { node: ContentfulLesson }) => {
              return (
                <LessonCard
                  key={lesson.slug}
                  slug={lesson.slug}
                  name={lesson.lessonName}
                  path={`/lesson/${lesson.slug}`}
                  lesson={lesson}
                  readingTime={
                    lesson.lessonContent?.fields?.readingTime?.minutes
                  }
                  cover={lesson.cover?.fluid}
                  excerpt={lesson.lessonContent?.fields?.excerpt}
                />
              )
            })}
          </Lessons>
        </>
      )),
    status === "success" && (
      <Lessons>
        {data.edges.map(({ node: lesson }: { node: ContentfulLesson }) => {
          const bookmarked = bookmarkData?.data.listLikedContents.items.find(
            (item) => item.slug == lesson.slug
          )

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
              bookmarked={bookmarked}
            />
          )
        })}
      </Lessons>
    )
  )
}

export default LoggedInUserlessonsList

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

const P = styled.p`
  display: inline-block;
  margin-right: 15px;
`

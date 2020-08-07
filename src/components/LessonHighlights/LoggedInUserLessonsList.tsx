import React from "react"
import styled from "styled-components"
import { ContentfulLesson } from "../../../graphql-types"
import LessonCard from "../lesson/LessonCard"
import { listLikedContents } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useQuery } from "react-query"

interface Props {
  data: any
}

const LoggedInUserlessonsList = (props: Props) => {
  const fetchLikes = async () => {
    return await API.graphql(graphqlOperation(listLikedContents))
  }

  const { data, status } = useQuery("someKeyName", fetchLikes)

  console.log("prop data: ", JSON.stringify(props.data))
  return (
    <Lessons>
      {status === "loading" && <div>Loading data ...</div>}

      {status === "error" && <div>Error fetching bookmarked data</div>}

      {status === "success" &&
        props.data.edges.map(({ node }: { node: ContentfulLesson }) => {
          const bookmarked = data?.data.listLikedContents.items.find(
            (item) => item.slug == node.slug
          )

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
              bookmarked={bookmarked}
            />
          )
        })}
    </Lessons>
  )
}

export default LoggedInUserlessonsList

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

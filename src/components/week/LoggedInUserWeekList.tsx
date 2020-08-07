import React from "react"
import styled from "styled-components"
import { listLikedContents } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useQuery } from "react-query"
import { ContentfulWeek } from "../../../graphql-types"
import WeekCard from "./WeekCard"

interface Props {
  data: any
}

const LoggedInUserWeekList = (props: Props) => {
  const fetchLikes = async () => {
    return await API.graphql(graphqlOperation(listLikedContents))
  }

  const { data, status } = useQuery("someKeyName", fetchLikes)

  return (
    <Weeks>
      {status === "loading" && <div>Loading data ...</div>}

      {status === "error" && <div>Error fetching bookmarked data</div>}

      {status === "success" &&
        props.data.map(({ node: week }: { node: ContentfulWeek }) => {
          const bookmarked = data?.data.listLikedContents.items.find(
            (item) => item.slug == week.slug
          )
          return (
            <WeekCard
              key={week.slug}
              path={`/week/${week.slug}`}
              intro={week.intro}
              name={week.weekName}
              duration={week.duration}
              lessons={week.lessons}
              coverPhoto={week.coverPhoto.fluid}
              slug={week.slug}
              bookmarked={bookmarked}
            />
          )
        })}
    </Weeks>
  )
}

export default LoggedInUserWeekList

const Weeks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 3rem 0rem;
  margin: 2rem -1rem;
`

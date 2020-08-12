import React from "react"
import { listLikedContents } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"

export const FetchAllBookmark = async () => {
  return await API.graphql(graphqlOperation(listLikedContents))
}

export const FetchWeekBookmark = async () => {
  return await API.graphql(
    graphqlOperation(listLikedContents, { filter: { type: { eq: "week" } } })
  )
}

export const FetchLessonBookmark = async () => {
  return await API.graphql(
    graphqlOperation(listLikedContents, { filter: { type: { eq: "lesson" } } })
  )
}

export const FetchHabitBookmark = async () => {
  return await API.graphql(
    graphqlOperation(listLikedContents, { filter: { type: { eq: "habit" } } })
  )
}

export const FetchWeekLessonBookmark = async () => {
  return await API.graphql(
    graphqlOperation(listLikedContents, { filter: { type: { ne: "habit" } } })
  )
}

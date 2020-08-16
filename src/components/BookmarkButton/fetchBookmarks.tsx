import React from "react"
import { listLikedContents, likedContentBySlug } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import {
  ListLikedContentsQuery,
  GetLikedContentQueryVariables,
  LikedContentBySlugQueryVariables,
  GetLikedContentQuery,
  LikedContentBySlugQuery,
} from "../../API"
import { string } from "prop-types"
import { ContentfulLesson } from "../../../graphql-types"

export const fetchAllBookmarks = async () => {
  return (await API.graphql(graphqlOperation(listLikedContents))) as {
    data: ListLikedContentsQuery
  }
}

export const fetchWeekBookmarks = async () => {
  const { data } = (await API.graphql(graphqlOperation(listLikedContents))) as {
    data: ListLikedContentsQuery
  }

  console.log(data)

  return data
}

type Response = {
  bookmarked: boolean
  id: string
  error?: any
}

export const fetchLessonBookmarks = async (
  key: string,
  { slug }: { slug: string }
) => {
  try {
    const query: LikedContentBySlugQueryVariables = {
      slug: slug,
    }

    const {
      data: { likedContentBySlug: { items } = { items: [] } },
    } = (await API.graphql(graphqlOperation(likedContentBySlug, query))) as {
      data: LikedContentBySlugQuery
    }

    if (items?.length > 0) {
      return {
        bookmarked: true,
        id: items[0].id,
      }
    } else {
      return {
        bookmarked: false,
        id: "",
      }
    }
  } catch (error) {
    return error
  }
}

export const fetchHabitBookmarks = async () => {
  return (await API.graphql(
    graphqlOperation(listLikedContents, { filter: { type: { eq: "habit" } } })
  )) as { data: ListLikedContentsQuery }
}

export const fetchWeekNLessonBookmarks = async (
  key: string,
  { initialLessons }: { initialLessons: ContentfulLesson[] }
) => {
  console.log("initialData", initialLessons)

  try {
    const {
      data: { listLikedContents: res },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }

    const data = initialLessons.map((lesson) => {
      if (res?.items?.some((item) => item?.slug === lesson.slug)) {
        return { ...lesson, bookmarked: true }
      } else {
        return lesson
      }
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

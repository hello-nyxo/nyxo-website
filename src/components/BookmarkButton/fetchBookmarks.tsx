import { API, graphqlOperation } from "aws-amplify"
import { ContentfulLesson } from "../../../graphql-types"
import {
  LikedContentBySlugQuery,
  LikedContentBySlugQueryVariables,
  ListLikedContentsQuery,
} from "../../API"
import { likedContentBySlug, listLikedContents } from "../../graphql/queries"

// FIXME, remove when types for react-query become stable
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const fetchAllBookmarks = async () => {
  try {
    return (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }
  } catch (error) {
    return error
  }
}

export const fetchWeekBookmarks = async () => {
  const { data } = (await API.graphql(graphqlOperation(listLikedContents))) as {
    data: ListLikedContentsQuery
  }

  console.log(data)

  return data
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
  try {
    const {
      data: { listLikedContents: res },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }

    return initialLessons.map((lesson) => {
      if (res?.items?.some((item) => item?.slug === lesson.slug)) {
        return { ...lesson, bookmarked: true }
      } else {
        return lesson
      }
    })
  } catch (error) {
    console.log(error)
    return error
  }
}

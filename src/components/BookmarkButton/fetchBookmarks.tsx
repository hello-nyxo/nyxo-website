import { API, graphqlOperation } from "aws-amplify"
import {
  ContentfulLesson,
  ContentfulHabit,
  ContentfulWeek,
} from "../../../graphql-types"
import {
  LikedContentBySlugQuery,
  LikedContentBySlugQueryVariables,
  ListLikedContentsQuery,
} from "../../API"
import { likedContentBySlug, listLikedContents } from "../../graphql/queries"
import { ContentData } from "../../hooks/data-fetching"

// FIXME, remove when types for react-query become stable
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const fetchAllBookmarks = async () => {
  try {
    const {
      data: { listLikedContents: { items: bookmarks } = { items: [] } },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }
    return bookmarks
  } catch (error) {
    return error
  }
}

export const fetchUserBookmarks = async (
  key: string,
  { content }: { content: ContentData }
) => {
  try {
    const {
      data: { listLikedContents: { items: bookmarks } = { items: [] } },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }

    // Use forEach instead of map to handle cases where static data does not mach user data (e.g. user has liked new content which does not exist on site yet)
    const weeks: ContentfulWeek[] = []
    const lessons: ContentfulLesson[] = []
    const habits: ContentfulHabit[] = []

    bookmarks.forEach((bookmark: any) => {
      const extraData = content.find((item) => item.slug === bookmark.slug)
      if (extraData) {
        switch (bookmark.type) {
          case "habit":
            habits.push({ ...bookmark, ...extraData })
            break
          case "lesson":
            lessons.push({ ...bookmark, ...extraData })
            break
          case "week":
            weeks.push({ ...bookmark, ...extraData })
            break
          default:
            break
        }
      }
    })

    return {
      weeks,
      lessons,
      habits,
    }
  } catch (error) {
    console.log(error)

    return error
  }
}

export const fetchWeekBookmarks = async () => {
  const { data } = (await API.graphql(graphqlOperation(listLikedContents))) as {
    data: ListLikedContentsQuery
  }

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

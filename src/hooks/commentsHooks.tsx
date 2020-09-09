import { API, graphqlOperation } from "aws-amplify"
import { navigate } from "gatsby"
import { queryCache, useMutation, useQuery } from "react-query"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../graphql-types"
import {
  CreateLikedContentInput,
  CreateLikedContentMutation,
  DeleteLikedContentMutation,
  LikedContentBySlugQuery,
  LikedContentBySlugQueryVariables,
  ListLikedContentsQuery,
} from "../API"
import { isLoggedIn } from "../auth/AppUser"
import { createLikedContent, deleteLikedContent } from "../graphql/mutations"
import { likedContentBySlug, listLikedContents } from "../graphql/queries"

// FIXME, remove when types for react-query become stable
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const addComment = async ({ name, slug, type }: CreateLikedContentInput) => {
  if (isLoggedIn()) {
    try {
      const {
        data: { createLikedContent: response },
      } = (await API.graphql(
        graphqlOperation(createLikedContent, { input: { name, slug, type } })
      )) as { data: CreateLikedContentMutation }
      return response
    } catch (error) {
      return error
    }
  } else {
    navigate("/me/login")
  }
}

export const useAddComment = () => {
  return useMutation(addComment, {
    onSuccess: ({ slug, id }, { type }) =>
      queryCache.setQueryData([type, { slug: slug }], {
        bookmarked: true,
        id: id,
      }),
  })
}

// export const fetchAllBookmarks = async () => {
//   try {
//     const {
//       data: { listLikedContents: result = { items: [] } },
//     } = (await API.graphql(graphqlOperation(listLikedContents))) as {
//       data: ListLikedContentsQuery
//     }

//     if (!result || !result.items) return []

//     return result.items
//   } catch (error) {
//     return error
//   }
// }

// export const fetchUserBookmarks = async (
//   key: string,
//   { content }: { content: ContentData }
// ) => {
//   try {
//     const {
//       data: { listLikedContents: result },
//     } = (await API.graphql(graphqlOperation(listLikedContents))) as {
//       data: ListLikedContentsQuery
//     }

//     if (!result || !result?.items) return null
//     const { items: bookmarks } = result

//     // Use forEach instead of map to handle cases where static data does not mach user data (e.g. user has liked new content which does not exist on site yet)
//     const weeks: ContentfulWeek[] = []
//     const lessons: ContentfulLesson[] = []
//     const habits: ContentfulHabit[] = []

//     bookmarks.forEach((bookmark) => {
//       const extraData = content.find((item) => item.slug === bookmark?.slug)
//       if (extraData) {
//         switch (bookmark?.type) {
//           case "habit":
//             habits.push({ ...bookmark, ...extraData })
//             break
//           case "lesson":
//             lessons.push({ ...bookmark, ...extraData })
//             break
//           case "week":
//             weeks.push({ ...bookmark, ...extraData })
//             break
//           default:
//             break
//         }
//       }
//     })

//     return {
//       weeks,
//       lessons,
//       habits,
//     }
//   } catch (error) {
//     console.log(error)

//     return error
//   }
// }

// export const fetchWeekBookmarks = async () => {
//   const { data } = (await API.graphql(graphqlOperation(listLikedContents))) as {
//     data: ListLikedContentsQuery
//   }

//   return data
// }

// export const fetchLessonBookmarks = async (
//   key: string,
//   { slug }: { slug: string }
// ) => {
//   try {
//     const query: LikedContentBySlugQueryVariables = {
//       slug: slug,
//     }

//     const {
//       data: { likedContentBySlug: result },
//     } = (await API.graphql(graphqlOperation(likedContentBySlug, query))) as {
//       data: LikedContentBySlugQuery
//     }

//     if (!result || !result.items) return { bookmarked: false, id: "" }

//     const { items } = result

//     if (items?.length > 0) {
//       return {
//         bookmarked: true,
//         id: items[0].id,
//       }
//     } else {
//       return {
//         bookmarked: false,
//         id: "",
//       }
//     }
//   } catch (error) {
//     return error
//   }
// }

// export const fetchHabitBookmarks = async () => {
//   return (await API.graphql(
//     graphqlOperation(listLikedContents, { filter: { type: { eq: "habit" } } })
//   )) as { data: ListLikedContentsQuery }
// }

// export const fetchWeekNLessonBookmarks = async (
//   key: string,
//   { initialLessons }: { initialLessons: ContentfulLesson[] }
// ) => {
//   try {
//     const {
//       data: { listLikedContents: res },
//     } = (await API.graphql(graphqlOperation(listLikedContents))) as {
//       data: ListLikedContentsQuery
//     }

//     return initialLessons.map((lesson) => {
//       if (res?.items?.some((item) => item?.slug === lesson.slug)) {
//         return { ...lesson, bookmarked: true }
//       } else {
//         return lesson
//       }
//     })
//   } catch (error) {
//     console.log(error)
//     return error
//   }
// }

// const removeBookmark = async ({ id }: { id: string; type: string }) => {
//   if (isLoggedIn()) {
//     try {
//       const {
//         data: { deleteLikedContent: response },
//       } = (await API.graphql(
//         graphqlOperation(deleteLikedContent, { input: { id: id } })
//       )) as { data: DeleteLikedContentMutation }

//       return response
//     } catch (error) {
//       return error
//     }
//   } else {
//     navigate("/me/login")
//   }
// }

// const addBookmark = async ({ name, slug, type }: CreateLikedContentInput) => {
//   if (isLoggedIn()) {
//     try {
//       const {
//         data: { createLikedContent: response },
//       } = (await API.graphql(
//         graphqlOperation(createLikedContent, { input: { name, slug, type } })
//       )) as { data: CreateLikedContentMutation }
//       return response
//     } catch (error) {
//       return error
//     }
//   } else {
//     navigate("/me/login")
//   }
// }

// export const useDeleteBookmark = () => {
//   return useMutation(removeBookmark, {
//     onSuccess: ({ slug }, { type }) =>
//       queryCache.setQueryData([type, { slug: slug }], {
//         bookmarked: false,
//         id: "",
//       }),
//   })
// }

// export const useAddBookmark = () => {
//   return useMutation(addBookmark, {
//     onSuccess: ({ slug, id }, { type }) =>
//       queryCache.setQueryData([type, { slug: slug }], {
//         bookmarked: true,
//         id: id,
//       }),
//   })
// }

export const useGetBookmark = (slug: string, type: string) => {
  if (isLoggedIn()) {
    return useQuery([type, { slug: slug as string }], fetchLessonBookmarks, {
      initialData: () => ({
        bookmarked: false,
        id: "",
      }),
      initialStale: true,
    })
  } else {
    return {
      isLoading: false,
      data: {
        bookmarked: false,
        id: "",
      },
    }
  }
}

type InitialData = ContentfulLesson[] | ContentfulHabit[] | ContentfulWeek[]

export const useGetAllBookmarks = (initialData: InitialData) => {
  if (isLoggedIn()) {
    return useQuery("allBookmarks", fetchAllBookmarks, {
      initialStale: true,
    })
  } else {
    return initialData
  }
}

export type ContentData = Array<
  ContentfulWeek | ContentfulLesson | ContentfulHabit
>

export const useGetUserBookmarks = (content: ContentData) => {
  return useQuery(["userBookmarks", { content: content }], fetchUserBookmarks, {
    initialData: () => ({
      lessons: [],
      weeks: [],
      habits: [],
    }),
    initialStale: true,
  })
}

export const useGetLessons = (initialLessons: ContentfulLesson[]) => {
  if (isLoggedIn()) {
    return useQuery(
      ["allLessonBookmarks", { initialLessons }],
      fetchWeekNLessonBookmarks,
      {
        initialData: initialLessons,
        initialStale: true,
      }
    )
  } else {
    return {
      isLoading: false,
      data: initialLessons,
    }
  }
}

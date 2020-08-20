import React from "react"
import { useMutation, queryCache, useQuery } from "react-query"
import { graphqlOperation, API } from "aws-amplify"
import {
  DeleteLikedContentMutation,
  CreateLikedContentMutation,
  CreateLikedContentInput,
} from "../API"
import { deleteLikedContent, createLikedContent } from "../graphql/mutations"
import { isLoggedIn } from "../auth/AppUser"
import { navigate } from "gatsby"
import {
  fetchLessonBookmarks,
  fetchAllBookmarks,
  fetchUserBookmarks,
} from "../components/BookmarkButton/fetchBookmarks"
import {
  ContentfulWeek,
  ContentfulLesson,
  ContentfulHabit,
} from "../../graphql-types"

const removeBookmark = async ({ id, type }: { id: string; type: string }) => {
  if (isLoggedIn()) {
    try {
      const {
        data: { deleteLikedContent: response },
      } = (await API.graphql(
        graphqlOperation(deleteLikedContent, { input: { id: id } })
      )) as { data: DeleteLikedContentMutation }

      return response
    } catch (error) {
      return error
    }
  } else {
    navigate("/me/login")
  }
}

const addBookmark = async ({ name, slug, type }: CreateLikedContentInput) => {
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

export const useDeleteBookmark = () => {
  return useMutation(removeBookmark, {
    onSuccess: ({ slug }, { type }) =>
      queryCache.setQueryData([type, { slug: slug }], {
        bookmarked: false,
        id: "",
      }),
  })
}

export const useAddBookmark = () => {
  return useMutation(addBookmark, {
    onSuccess: ({ slug, id }, { type }) =>
      queryCache.setQueryData([type, { slug: slug }], {
        bookmarked: true,
        id: id,
      }),
  })
}

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
      bookmarked: false,
      id: "",
    }
  }
}

export const useGetAllBookmarks = (initialData: any) => {
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

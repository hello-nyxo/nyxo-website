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
import { fetchLessonBookmarks } from "../components/BookmarkButton/fetchBookmarks"

const removeBookmark = async ({ id }: { id: string }) => {
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
    onSuccess: ({ slug }) =>
      queryCache.setQueryData(["bookmark", { slug: slug }], {
        bookmarked: false,
        id: "",
      }),
  })
}

export const useAddBookmark = () => {
  return useMutation(addBookmark, {
    onSuccess: ({ slug, id }) =>
      queryCache.setQueryData(["bookmark", { slug: slug }], {
        bookmarked: true,
        id: id,
      }),
  })
}

export const useGetBookmark = (slug: string) => {
  return useQuery(
    ["bookmark", { slug: slug as string }],
    fetchLessonBookmarks,
    {
      initialData: () => ({
        bookmarked: false,
        id: "",
      }),
      initialStale: true,
    }
  )
}

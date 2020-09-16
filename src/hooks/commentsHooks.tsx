import { API, graphqlOperation } from "aws-amplify"
import { navigate } from "gatsby"
import { queryCache, useMutation, useQuery } from "react-query"

import {
  CreateCommentsInput,
  CreateCommentsMutation,
  ListCommentssQuery,
} from "../API"
import { isLoggedIn } from "../auth/AppUser"
import { createComments } from "../graphql/mutations"
import { listCommentss } from "../graphql/queries"

// FIXME, remove when types for react-query become stable
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type Comment = {
  slug: string
  type: string
  firstName?: string
  lastName?: string
  comments: string
  guest: boolean
}

const addComment = async ({
  firstName,
  lastName,
  comment,
  slug,
  type,
  guest,
}: CreateCommentsInput) => {
  try {
    const {
      data: { createComments: response },
    } = (await API.graphql(
      graphqlOperation(createComments, {
        input: { firstName, lastName, comment, slug, type, guest },
      })
    )) as { data: CreateCommentsMutation }
    return response
  } catch (error) {
    return error
  }
}

export const fetchAllComments = (slug: string) => async () => {
  try {
    const {
      data: { listCommentss: result = { items: [] } },
    } = (await API.graphql(
      graphqlOperation(listCommentss, {
        filter: { slug: { eq: slug } },
      })
    )) as {
      data: ListCommentssQuery
    }

    if (!result || !result.items) return []

    return result.items
  } catch (error) {
    return error
  }
}

export const useAddComment = () => {
  return useMutation(addComment, {
    onSuccess: ({ slug, id, type, firstName, lastName, comment, guest }) =>
      queryCache.setQueryData(
        [type, { slug: slug }, firstName, lastName, comment, guest],
        {
          comment: true,
          id: id,
        }
      ),
  })
}

export const useGetAllComments = (slug: string) => {
  return useQuery("allComments", fetchAllComments(slug), {
    initialStale: true,
  })
}

import { API, graphqlOperation } from "aws-amplify"
import { navigate } from "gatsby"
import { queryCache, useMutation, useQuery } from "react-query"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../graphql-types"
import {
  CreateFeedbackContentInput,
  CreateFeedbackContentMutation,
  UpdateFeedbackContentMutation,
  FeedbackContentBySlugQuery,
  FeedbackContentBySlugQueryVariables,
  ListFeedbackContentsQuery,
} from "../API"
import { isLoggedIn } from "../auth/AppUser"
import {
  createFeedbackContent,
  updateFeedbackContent,
} from "../graphql/mutations"
import { feedbackContentBySlug, listFeedbackContents } from "../graphql/queries"
import StarRating from "../components/Feedback/StarRating"

// FIXME, remove when types for react-query become stable
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type InitialData = ContentfulLesson[] | ContentfulHabit[] | ContentfulWeek[]

export const fetchLessonFeedback = async (
  key: string,
  { slug }: { slug: string }
) => {
  try {
    const query: FeedbackContentBySlugQueryVariables = {
      slug: slug,
    }

    const {
      data: { feedbackContentBySlug: result },
    } = (await API.graphql(graphqlOperation(feedbackContentBySlug, query))) as {
      data: FeedbackContentBySlugQuery
    }

    if (!result || !result.items) return { feedback: false, id: "", rating: 0 }

    const { items } = result

    if (items?.length > 0) {
      return {
        feedback: true,
        id: items[0].id,
        rating: items[0].rating,
      }
    } else {
      return {
        feedback: false,
        id: "",
        rating: 0,
      }
    }
  } catch (error) {
    return error
  }
}

const addFeedback = async ({
  rating,
  slug,
  type,
}: CreateFeedbackContentInput) => {
  try {
    const {
      data: { createFeedbackContent: response },
    } = (await API.graphql(
      graphqlOperation(createFeedbackContent, { input: { rating, slug, type } })
    )) as { data: CreateFeedbackContentMutation }
    return response
  } catch (error) {
    return error
  }
}

const updateFeedback = async ({
  id,
  rating,
}: {
  id: string
  rating: number
}) => {
  try {
    const context = {
      id: id,
      rating: rating,
    }

    const {
      data: { updateFeedbackContent: response },
    } = (await API.graphql(
      graphqlOperation(updateFeedbackContent, {
        input: context,
      })
    )) as { data: UpdateFeedbackContentMutation }

    return response
  } catch (error) {
    return error
  }
}

export const fetchAllFeedback = (slug: string) => async () => {
  try {
    const {
      data: { listFeedbackContents: result = { items: [] } },
    } = (await API.graphql(
      graphqlOperation(listFeedbackContents, {
        filter: { slug: { eq: slug } },
      })
    )) as {
      data: ListFeedbackContentsQuery
    }

    if (!result || !result.items) return []

    return result.items
  } catch (error) {
    return error
  }
}

//

export const useGetFeedback = (slug: string, type: string) => {
  if (isLoggedIn()) {
    return useQuery([type, { slug: slug as string }], fetchLessonFeedback, {
      initialData: () => ({
        feedback: false,
        id: "",
        rating: 0,
      }),
      initialStale: true,
    })
  } else {
    return {
      isLoading: false,
      data: {
        feedback: false,
        id: "",
        rating: 0,
      },
    }
  }
}

export const useAddFeedback = () => {
  return useMutation(addFeedback, {
    onSuccess: ({ slug, id }, { type }) =>
      queryCache.setQueryData([type, { slug: slug }], {
        feedback: true,
        id: id,
      }),
  })
}

export const useUpdateFeedback = () => {
  return useMutation(updateFeedback)
}

export const useGetAllFeedback = (slug: string) => {
  if (isLoggedIn()) {
    return useQuery("allFeedback", fetchAllFeedback(slug), {
      initialStale: true,
    })
  } else {
    return {
      isLoading: false,
    }
  }
}

import { API, graphqlOperation } from "aws-amplify"
import { queryCache, QueryResult, useMutation, useQuery } from "react-query"
import {
  CreateCoachingDataInput,
  CreateCoachingDataMutation,
  GetCoachingDataQuery,
  ListCoachingDatasQuery,
  UpdateCoachingDataInput,
  UpdateCoachingDataMutation,
} from "../API"
import { createCoachingData, updateCoachingData } from "../graphql/mutations"
import { getCoachingData, listCoachingDatas } from "../graphql/queries"

type CoachingData = Omit<
  Exclude<GetCoachingDataQuery["getCoachingData"], null>,
  "__typename"
> | null

export const listCoaching = async (): Promise<CoachingData[]> => {
  try {
    const {
      data: { listCoachingDatas: data },
    } = (await API.graphql(graphqlOperation(listCoachingDatas))) as {
      data: ListCoachingDatasQuery
    }

    return data
  } catch (error) {
    return error
  }
}

export const getCoaching = async (
  key: string,
  { id }: { id: string }
): Promise<GetCoachingDataQuery["getCoachingData"]> => {
  try {
    const {
      data: { getCoachingData: data },
    } = (await API.graphql(graphqlOperation(getCoachingData, { id }))) as {
      data: GetCoachingDataQuery
    }

    return data
  } catch (error) {
    return error
  }
}

export const createCoaching = async ({
  coaching,
}: {
  coaching: CreateCoachingDataInput
}): Promise<CreateCoachingDataMutation["createCoachingData"]> => {
  try {
    const {
      data: { createCoachingData: data },
    } = (await API.graphql(
      graphqlOperation(createCoachingData, { input: coaching })
    )) as {
      data: CreateCoachingDataMutation
    }
    return data
  } catch (error) {
    return error
  }
}

export const updateCoaching = async ({
  coaching,
}: {
  coaching: UpdateCoachingDataInput
}): Promise<UpdateCoachingDataMutation["updateCoachingData"]> => {
  try {
    const {
      data: { updateCoachingData: data },
    } = (await API.graphql(
      graphqlOperation(updateCoachingData, { input: coaching })
    )) as {
      data: UpdateCoachingDataMutation
    }
    return data
  } catch (error) {
    return error
  }
}

// HOOKS

export const useListCoaching = (): QueryResult<
  ListCoachingDatasQuery["listCoachingDatas"]
> => {
  return useQuery("listCoaching", listCoaching)
}

export const useGetCoaching = (id: string) => {
  return useQuery(["coaching", { id }], getCoaching)
}

export const useCreateCoaching = () => {
  return useMutation(createCoaching)
}

export const useUpdateCoaching = () => {
  return useMutation(updateCoaching, {
    onSuccess: (data) => {
      queryCache.invalidateQueries("listCoaching")
      queryCache.setQueryData(["coaching", { id: data?.id }], data)
    },
    onMutate: (updatedCoaching) => {
      queryCache.cancelQueries("listCoaching")
      const previousCoaching = queryCache.getQueryData("listCoaching")

      queryCache.setQueryData("listCoaching", (old) => [
        ...old,
        updatedCoaching,
      ])
      return () => queryCache.setQueryData("listCoaching", previousCoaching)
    },
    onError: (error, updatedCoaching, rollback) => rollback(),

    onSettled: () => {
      queryCache.invalidateQueries("listCoaching")
    },
  })
}

export const useGetActiveCoaching = () => {
  return useQuery("activeCoaching")
}

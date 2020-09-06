import { useQuery, QueryResult, useMutation, MutationResult } from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { GetUserQuery, UpdateUserMutation, UpdateUserInput } from "../API"
import { updateUser } from "../graphql/mutations"
import { getUser } from "../graphql/queries"

export const updateUserData = async ({
  user,
}: {
  user: UpdateUserInput
}): Promise<UpdateUserMutation["updateUser"]> => {
  const { username } = await Auth.currentAuthenticatedUser()
  const input = {
    ...user,
    id: username,
  }

  console.log(username)

  try {
    const {
      data: { updateUser: data },
    } = (await API.graphql(graphqlOperation(updateUser, { input: input }))) as {
      data: UpdateUserMutation
    }
    return data
  } catch (error) {
    console.log("UpdateUserMutation", error)

    return error
  }
}

export const getUserData = async (): Promise<GetUserQuery["getUser"]> => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { getUser: data },
    } = (await API.graphql(graphqlOperation(getUser, { id: username }))) as {
      data: GetUserQuery
    }
    return data
  } catch (error) {
    return error
  }
}

export const useGetUser = (): QueryResult<GetUserQuery["getUser"], any> => {
  return useQuery(["user"], getUserData)
}

export const useUpdateUser = (): MutationResult<
  UpdateUserMutation["updateUser"],
  any
> => {
  return useMutation(updateUserData)
}

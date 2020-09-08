import { useQuery } from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { listNights } from "../graphql/queries"
import { ListNightsQuery } from "../API"

const listSleep = async () => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { listNights: data },
    } = (await API.graphql(graphqlOperation(listNights, { id: username }))) as {
      data: ListNightsQuery
    }

    return data
  } catch (error) {
    console.log(error)
  }
}

export const useGetSleep = () => {
  return useQuery("sleep", listSleep)
}

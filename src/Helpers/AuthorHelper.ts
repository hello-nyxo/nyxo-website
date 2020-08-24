import { ContentfulAuthor, Maybe } from "../../graphql-types"

const getFirstAuthor = (
  authorCards?: Maybe<Array<Maybe<ContentfulAuthor>>> | null
): null | undefined | string => {
  return authorCards ? authorCards[0]?.name : null
}

export default getFirstAuthor

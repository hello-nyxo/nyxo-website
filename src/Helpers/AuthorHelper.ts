interface AuthorCard {
  name: string
  avatar: any
  credentials: string
}

const getFirstAuthor = (authorCards?: AuthorCard[] | null) => {
  return authorCards ? authorCards[0]?.name : null
}

export default getFirstAuthor

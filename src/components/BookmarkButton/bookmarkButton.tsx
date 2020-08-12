import React from "react"
import {
  BookmarkButtonContainer,
  Heart,
} from "../StyledComponents/styledComponents"
import { API, graphqlOperation } from "aws-amplify"
import { deleteLikedContent, createLikedContent } from "../../graphql/mutations"
import { isLoggedIn } from "../../auth/AppUser"
import { navigate } from "@reach/router"

interface Props {
  name: string
  slug: string
  type: string
  bookmarked?: any
}

const BookmarkButton = (props: Props) => {
  const { name, slug, type, bookmarked } = props

  const unlikeHandler = async () => {
    const unlikeDetails = {
      id: bookmarked?.id,
    }
    await API.graphql(
      graphqlOperation(deleteLikedContent, { input: unlikeDetails })
    )
  }

  const likeHandler = async () => {
    const likeDetails = {
      name: name,
      slug: slug,
      type: type,
    }

    isLoggedIn()
      ? await API.graphql(
          graphqlOperation(createLikedContent, { input: likeDetails })
        )
      : navigate("/me/login")
  }

  return (
    <BookmarkButtonContainer
      onClick={bookmarked ? unlikeHandler : likeHandler}
      className={bookmarked ? "active" : ""}>
      <Heart
        height="25px"
        width="25px"
        name={bookmarked ? "heartLiked" : "heart"}
        viewBox="0 0 28 30"
      />
    </BookmarkButtonContainer>
  )
}

export default BookmarkButton

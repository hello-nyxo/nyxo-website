import React from "react"
import { LikeButtonContainer, HeartLiked, Heart } from "../Primitives"
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

const LikeButton = (props: Props) => {
  const likeDetails = {
    name: props.name,
    slug: props.slug,
    type: props.type,
  }

  const unlikeDetails = {
    id: props.bookmarked?.id,
  }

  const unlikeHandler = async () => {
    await API.graphql(
      graphqlOperation(deleteLikedContent, { input: unlikeDetails })
    )
  }

  const likeHandler = async () => {
    isLoggedIn()
      ? await API.graphql(
          graphqlOperation(createLikedContent, { input: likeDetails })
        )
      : navigate("/me/login")
  }

  return props.bookmarked ? (
    <LikeButtonContainer onClick={unlikeHandler}>
      <HeartLiked height="25px" width="25px" name="heart" viewBox="0 0 28 30" />
    </LikeButtonContainer>
  ) : (
    <LikeButtonContainer onClick={likeHandler}>
      <Heart height="25px" width="25px" name="heart" viewBox="0 0 28 30" />
    </LikeButtonContainer>
  )
}

export default LikeButton

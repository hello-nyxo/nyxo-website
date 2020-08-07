import React from "react"
import { HeartLiked, Heart } from "../Primitives"
import { API, graphqlOperation } from "aws-amplify"
import { deleteLikedContent, createLikedContent } from "../../graphql/mutations"
import styled from "styled-components"
import { listLikedContents } from "../../graphql/queries"
import { useQuery } from "react-query"
import { isLoggedIn } from "../../auth/AppUser"
import { navigate } from "@reach/router"

interface Props {
  name: string
  slug: string
  type: string
  bookmarked?: any
}

const LikeButton = (props: Props) => {
  const fetchLikes = async () => {
    return await API.graphql(graphqlOperation(listLikedContents))
  }

  const { data, status } = useQuery("someKeyName", fetchLikes)

  const bookmarked = data?.data.listLikedContents.items.find(
    (item) => item.slug == props.slug
  )

  const likeDetails = {
    name: props.name,
    slug: props.slug,
    type: props.type,
  }

  const unlikeDetails = {
    id: bookmarked?.id,
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

  return bookmarked ? (
    <ActiveLikeButtonContainer onClick={unlikeHandler}>
      <HeartLiked height="25px" width="25px" name="heart" viewBox="0 0 28 30" />
      Remove Bookmark
    </ActiveLikeButtonContainer>
  ) : (
    <LikeButtonContainer onClick={likeHandler}>
      <Heart height="25px" width="25px" name="heart" viewBox="0 0 28 30" />
      Add to Bookmarks
    </LikeButtonContainer>
  )
}

export default LikeButton

const ActiveLikeButtonContainer = styled.button`
  position: relative;
  top: 10px;
  right: 0px;
  border: none;
  background-color: var(--morning);
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 15px;
  transition: 0.2s;
  color: var(--morningAccent);

  &:hover {
    box-shadow: var(--shadow);
    transition: 0.2s;
  }
`
const LikeButtonContainer = styled.button`
  position: relative;
  top: 10px;
  right: 0px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--morningAccent);
  border-radius: 10px;
  padding: 10px 15px;
  transition: 0.2s;
  color: var(--morningAccent);

  &:hover {
    box-shadow: var(--shadow);
    background-color: var(--morning);
    transition: 0.2s;
    border: none;
  }
`

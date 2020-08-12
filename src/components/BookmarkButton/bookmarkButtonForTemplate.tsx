import React from "react"
import { Heart } from "../StyledComponents/styledComponents"
import { API, graphqlOperation } from "aws-amplify"
import { deleteLikedContent, createLikedContent } from "../../graphql/mutations"
import styled from "styled-components"
import { isLoggedIn } from "../../auth/AppUser"
import { navigate } from "@reach/router"

type Props = {
  name: string
  slug: string
  type: string
  bookmarked?: any
}

const BookmarkButtonForTemplate = (props: Props) => {
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
      {bookmarked ? "Remove Bookmark" : "Add to Bookmarks"}
    </BookmarkButtonContainer>
  )
}

export default BookmarkButtonForTemplate

const BookmarkButtonContainer = styled.button`
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

  &.active {
    background-color: var(--morning);
    border: none;
  }
`

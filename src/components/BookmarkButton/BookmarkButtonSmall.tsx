import React, { EventHandler, FC, MouseEvent } from "react"
import styled from "styled-components"
import { Icon } from "../Icons"

type Props = {
  bookmarked: boolean
  loading: boolean
  onClick?: EventHandler<MouseEvent<HTMLButtonElement>>
}

const BookmarkButton: FC<Props> = ({ bookmarked, loading, onClick }) => {
  return (
    <HeartContainer>
      {bookmarked && (
        <HeartIcon
          height="25px"
          width="25px"
          bookmarked={bookmarked}
          viewBox="0 0 30 30"
        />
      )}
    </HeartContainer>
  )
}

export default BookmarkButton

export const HeartContainer = styled.span`
  position: absolute;
  top: 10px;
  right: 0px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  cursor: pointer;
`

type HeartIconProps = {
  bookmarked: boolean
}

export const HeartIcon = styled(Icon).attrs(() => ({
  fill: "#F42D97",
  stroke: "none",
  name: "heartBookmarkFilled",
}))<HeartIconProps>`
  margin: 0px;
  flex: 1;
`

import React, { EventHandler, FC, MouseEvent } from "react"
import styled from "styled-components"
import { Icon } from "../Icons"

type Props = {
  bookmarked: boolean
  loading: boolean
  onClick: EventHandler<MouseEvent<HTMLButtonElement>>
}

const BookmarkButton: FC<Props> = ({ bookmarked, loading, onClick }) => {
  return (
    <Button onClick={onClick} disabled={loading}>
      <HeartIcon
        height="25px"
        width="25px"
        bookmarked={bookmarked}
        viewBox="0 0 30 30"
      />
    </Button>
  )
}

export default BookmarkButton

export const Button = styled.button`
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

export const HeartIcon = styled(Icon).attrs(
  ({ bookmarked }: HeartIconProps) => ({
    fill: "#F42D97",
    stroke: "none",
    name: bookmarked ? "heartBookmarkFilled" : "heartBookmarkOutline",
  })
)<HeartIconProps>`
  margin: 0px;
  flex: 1;
`

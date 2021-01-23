import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { EventHandler, FC, MouseEvent } from "react"
import styled, { css } from "styled-components"
import { Icon } from "../Icons"

type Props = {
  bookmarked: boolean
  loading: boolean
  onClick: EventHandler<MouseEvent<HTMLButtonElement>>
}

const BookmarkButton: FC<Props> = ({ bookmarked, onClick, loading }) => {
  const { t } = useTranslation()

  return (
    <BookmarkContainer
      disabled={loading}
      onClick={onClick}
      bookmarked={bookmarked}>
      <HeartIcon
        height="25px"
        width="25px"
        bookmarked={bookmarked}
        viewBox="0 0 30 30"
      />
      <Text>{bookmarked ? t("REMOVE_BOOKMARK") : t("ADD_BOOKMARK")}</Text>
    </BookmarkContainer>
  )
}

export default BookmarkButton

const BookmarkContainer = styled.button<HeartIconProps>`
  position: relative;
  background-color: var(--morning);
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  transition: 0.2s ease-in-out;
  color: var(--morningAccent);
  outline: var(--morningAccent);
  box-shadow: var(--shadow);

  &:hover {
    background-color: var(--morning);
    transition: 0.2s;
  }
  &:active {
    box-shadow: inset 1px 1px 3px 3px #6d676712;
  }

  ${({ bookmarked }) =>
    bookmarked &&
    css`
      box-shadow: var(--shadow);
      background-color: var(--morning);
      &:active {
        box-shadow: inset 1px 1px 3px 3px #6d676712;
      }
    `}
`

const Text = styled.span`
  min-width: 9rem;
  display: block;
  font-size: 0.9rem;
  font-family: var(--medium);
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

import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

type Props = {
  tags: (string | null)[] | null | undefined
  largeTags?: boolean
}

const TagSection: FC<Props> = ({ tags, largeTags }) => {
  return (
    <>
      {tags?.map((tag = "tag") => (
        <Tag
          large={largeTags}
          key={`${kebabCase(tag as string)}`}
          to={`/tags/${kebabCase(tag as string)}`}>
          {tag}
        </Tag>
      ))}
    </>
  )
}

export default TagSection

type TagProps = {
  readonly large?: boolean
}

const Tag = styled(Link)<TagProps>`
  padding: ${({ large }) => (large ? "0.5rem" : "0.3rem")};
  margin: 0.5rem 0.3rem;
  font-size: ${({ large }) => (large ? "1rem" : "0.6rem")};
  font-family: var(--medium);
  color: var(--textPrimary);
  display: inline-block;
  background-color: #f3f3f3;
  border-radius: 0.2rem;
  text-transform: uppercase;
`

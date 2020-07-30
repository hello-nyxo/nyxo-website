import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { kebabCase } from "lodash"
import { device } from "../Primitives"

const TagFilter = () => {
  const data = useStaticQuery(graphql`
    query TagQuery {
      tags: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)
  const tags = data?.tags?.group
  const tagCount = 3
  return (
    <TagList>
      {tags?.slice(0, tagCount).map(({ tag, totalCount }: any) => {
        return (
          <TagLinkLI key={tag}>
            <TagLink data-count={totalCount} to={`/tags/${kebabCase(tag)}/`}>
              {tag}
            </TagLink>
          </TagLinkLI>
        )
      })}
      <TagLinkLI>
        <TagLinkMoreTags to={`/tags`}>All Tags</TagLinkMoreTags>
      </TagLinkLI>
    </TagList>
  )
}

export default TagFilter

const TagLink = styled(Link)`
  position: relative;
  &:after {
    display: inline-flex;
    content: attr(data-count);
    border-radius: 10px;
    background: var(--radiantBlue);
    background-repeat: repeat-x;
    position: absolute;
    right: -1rem;
    font-size: 0.6rem;
    color: white;
    padding: 4px;
    top: -5px;
    line-height: 90%;
  }
  margin-left: 2rem;
`
const TagLinkMoreTags = styled(Link)`
  position: relative;
  margin-left: 2rem;
`

const TagLinkLI = styled.li``

const TagList = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 1440px;
  margin: 1rem auto;
  padding: 0rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    width: max-content;
  }
`

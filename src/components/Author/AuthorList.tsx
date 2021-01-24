import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import AuthorCard from "./AuthorCardLarge"
import { ContentfulAuthor } from "../../../graphql-types"

type Props = {
  locale: string
}

const queryEN = graphql`
  query {
    allContentfulAuthor(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: lesson, order: ASC }
    ) {
      edges {
        node {
          ...AuthorFragment
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            authorSlug
          }
        }
      }
    }
  }
`

const AuthorList: FC<Props> = ({ locale }) => {
  const {
    allContentfulAuthor: { edges: authors },
    allMarkdownRemark: { edges: blogPosts },
  } = useStaticQuery(queryEN)

  return (
    <Authors>
      {authors.map(({ node: author }: { node: ContentfulAuthor }) => (
        <AuthorCard
          key={author.id}
          author={author}
          blogPosts={blogPosts.filter(
            ({ node: post }) => post?.frontmatter?.authorSlug === author.slug
          )}
        />
      ))}
    </Authors>
  )
}

export default AuthorList

const Authors = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem -0.5rem 5rem;
`

import React, { FC } from "react"
import AuthorCard from "./AuthorCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import devices from "../../devices"
import { H3 } from "../Html/HtmlContent"
import { ContentfulAuthor } from "../../../graphql-types"

const AuthorFeaturette: FC = () => {
  const {
    allContentfulAuthor: { nodes: authors },
  } = useStaticQuery(graphql`
    {
      allContentfulAuthor(
        filter: {
          node_locale: { eq: "en-US" }
          slug: {
            nin: [
              "kayla-gordon"
              "chinh-duong"
              "eeva-siika-aho"
              "perttu-lahteenlahti"
              "miska-nurmi"
            ]
          }
        }
      ) {
        nodes {
          id
          credentials
          name
          slug
          avatar {
            file {
              url
            }
            fluid(maxWidth: 50) {
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {authors.map((author: ContentfulAuthor) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </Container>
  )
}

export default AuthorFeaturette

const Title = styled(H3)`
  margin: 0rem 1rem 1rem;
`

const Container = styled.div`
  background-color: var(--secondaryBg);
  box-shadow: var(--shadow);
  padding: 1rem;
  z-index: 2;
  position: relative;
  box-sizing: border-box;
  @media ${devices.tablet} {
    padding: 1rem 0rem;
  }
`

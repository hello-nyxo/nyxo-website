import React, { FC } from "react"
import AuthorCard from "../Author/AuthorCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import devices from "../../devices"
import { H3, H2, P } from "../Html/HtmlContent"
import { ContentfulAuthor } from "../../../graphql-types"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AuthorFeaturette: FC = () => {
  const {
    allContentfulAuthor: { nodes: authors },
  } = useStaticQuery(graphql`
    {
      allContentfulAuthor(
        filter: {
          node_locale: { eq: "en-US" }
          slug: { in: ["liisa-kuula", "anu-katriina-pesonen", "pietari-nurmi"] }
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
  const { t } = useTranslation()

  return (
    <Container>
      <Column>
        <Title>{t("INDEX.AUTHORS")}</Title>
        <P>{t("INDEX.AUTHORS_TEXT")}</P>
      </Column>
      <Column>
        {authors.map((author: ContentfulAuthor) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </Column>
    </Container>
  )
}

export default AuthorFeaturette

const Container = styled.div`
  margin: 5rem 0rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Title = styled(H2)`
  margin: 0 0 2rem 0;
`

const Column = styled.div`
  flex: 1;
`

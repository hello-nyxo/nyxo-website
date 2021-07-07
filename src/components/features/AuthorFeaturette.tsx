import { graphql, useStaticQuery } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled, { css } from "styled-components"
import { ContentfulAuthor } from "../../../graphql-types"
import { H2, P } from "../Html/HtmlContent"

export const AuthorFeaturette: FC = () => {
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
        <Cards>
          {authors.map((author: ContentfulAuthor, index: number) => (
            <Card key={author.id} z={index}>
              <div>{author.name}</div>
            </Card>
          ))}
        </Cards>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  margin: 15rem 0rem;
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

type CardProps = {
  z: number
}

const Card = styled.div<CardProps>`
  color: white;

  position: absolute;
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  cursor: auto;

  ${({ z }) => css`
    right: ${z * 50}px;
    top: ${z * 50}px;

    &:hover {
      transform: translate(-120px, -40px) skewX(-10deg) rotateZ(-10deg)
        scaleX(0.9);
    }
  `}

  background: radial-gradient(
    120% 154.37% at 100% 100%,
    rgba(51, 253, 241, 0.1) 0%,
    rgba(200, 96, 0, 0.1) 100%
  );
  box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
    rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px inset;
  width: 335px;
  height: 220px;
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  );
  box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  cursor: pointer;
  border-radius: 30px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 20px;
`

const Cards = styled.div`
  position: relative;
  transform-origin: left top;
  width: 100%;
  height: 100%;

  &:hover {
    ${Card} {
      transform: translate(-120px, -30px) skewX(-10deg) rotateZ(-10deg)
        scaleX(0.9);

      &:hover {
        transform: translate(-120px, -40px) skewX(-10deg) rotateZ(-10deg)
          scaleX(0.9);
      }
    }
  }
`

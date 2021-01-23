import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulAuthor, Maybe } from "../../../graphql-types"
import Image, { FluidObject } from "gatsby-image"
import { device } from "../Primitives"
import { Link } from "gatsby-plugin-react-i18next"

type Author = {
  author: Maybe<ContentfulAuthor>
}

const AuthorCard: FC<Author> = ({ author }) => {
  return (
    <Card to={`/author/${author?.slug}`}>
      <Container>
        <Avatar
          alt={author?.name ?? "Author"}
          fluid={author?.avatar?.fluid as FluidObject}
        />
        <RightSide>
          <Name>{author?.name}</Name>
          <Credentials>{author?.credentials}</Credentials>
        </RightSide>
      </Container>
    </Card>
  )
}

export default AuthorCard

const Card = styled(Link)`
  box-sizing: border-box;
  margin: 0.5rem;
  display: block;

  @media ${device.desktopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`

const Container = styled.div`
  background-color: var(--bg);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s ease-in-out all;
  min-height: 3rem;

  &:hover {
    box-shadow: var(--shadow);
    background-color: var(--secondaryBg);
  }
`
const Name = styled.div`
  font-weight: bold;
  color: var(--textPrimary);
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

const Credentials = styled.span`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: var(--textSecondary);
`
const Avatar = styled(Image)`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`

import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import React, { FC } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import {
  ContentfulAuthor,
  MarkdownRemarkFrontmatter,
} from "../../../graphql-types"
import { device } from "~components/Primitives"

type Author = {
  author: ContentfulAuthor
  blogPosts: MarkdownRemarkFrontmatter[]
}

const AuthorCardLarge: FC<Author> = ({ author, blogPosts }) => {
  const lessonCount = author?.lesson?.length
  const postCount = blogPosts.length
  return (
    <StyledLink to={`/author/${author.slug}`}>
      <Container>
        {author?.avatar?.fluid && (
          <Avatar fluid={author?.avatar.fluid as FluidObject} />
        )}
        <RightSide>
          <Name>{author.name}</Name>
          <Credentials>{author.credentials}</Credentials>
          <Stats>
            {lessonCount && lessonCount > 0 && (
              <Stat>Lessons: {lessonCount} </Stat>
            )}
            {postCount > 0 && <Stat>Blog posts: {postCount}</Stat>}
          </Stats>
        </RightSide>
      </Container>
    </StyledLink>
  )
}

export default AuthorCardLarge

const Avatar = styled(Image)<GatsbyImageProps>`
  min-height: 5rem;
  min-width: 5rem;
  border-radius: 10rem;
`

const Stats = styled.div`
  margin-top: 2rem;
`

const Stat = styled.span`
  font-size: 0.8rem;
  color: var(--textSecondary);
  font-family: var(--medium);
  margin-right: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  line-height: 1rem;
  margin-top: 0.5rem;
  color: var(--textSecondary);
`

const StyledLink = styled(Link)`
  display: flex;
  flex: 1;
  margin: 0.5rem;
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  background-color: #fff;
  box-shadow: var(--shadow);
  border-radius: 0.5rem;

  @media ${device.desktopL} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
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

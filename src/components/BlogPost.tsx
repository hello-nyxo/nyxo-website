import Img from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { GatsbyImage } from "../../@types/childImageSharp"
import devices from "../devices"
import { Link } from "gatsby-plugin-react-i18next"

type Props = {
  title?: string | null | undefined
  slug?: string | null
  author?: string | null | undefined
  description?: string | null | undefined
  thumbnailBlog: GatsbyImage
  tags?: string[] | null[] | null
}

const BlogPost: FC<Props> = ({
  title,
  slug,
  author,
  description,
  thumbnailBlog,
  tags = ["sleep"],
}) => {
  const mainTag = tags ? tags[0] : ["sleep"]

  return (
    <Card to={`${slug}`}>
      <ImageContainer>
        <Image
          alt="Blog Cover Image"
          fluid={thumbnailBlog?.childImageSharp?.fluid}
        />
        <Tags>
          <Tag>{mainTag}</Tag>
        </Tags>
      </ImageContainer>

      <H3>{title}</H3>
      <Author>{author}</Author>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: description as string,
        }}
      />
    </Card>
  )
}

export default BlogPost

const Card = styled(Link)`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;

  @media ${devices.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media ${devices.tablet} {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media ${devices.laptop} {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`

const Author = styled.span`
  font-size: 0.9rem;
  color: var(--textSecondary);
  font-family: var(--medium);
  display: block;
  margin-bottom: 0.5rem;
  display: 500;
  font-weight: normal;
`

const H3 = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 23px;
`

const Image = styled(Img)`
  height: 100%;
`

const Excerpt = styled.p`
  font-size: 0.9rem;
  color: var(--textSecondary);
  line-height: 22px;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
`

const Tags = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
`

const Tag = styled.span`
  background-color: var(--radiantBlue);
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 30px;
  color: white;
  margin: 0px 0.5rem 0.5rem 0.5rem;
  font-family: var(--primaryFont);
`

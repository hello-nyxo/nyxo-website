import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulLesson,
  MarkdownRemarkFrontmatter,
} from "../../graphql-types"
import BlogPost from "../components/BlogPost"
import { H1 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import LessonCard from "../components/LessonCard"
import { Container } from "../components/Primitives"
import TagSection from "../components/tags/Tags"
import getFirstAuthor from "../Helpers/AuthorHelper"
import { BlogPostNode } from "../typings/blog-types"
import SEO from "../components/SEO/SEO"

const first = (list: BlogPostNode[] | { node: ContentfulLesson }[]) => {
  for (const i in list) return list[i] ? list[i].node : list[i]
}

const combineTags = (
  lessons: { node: ContentfulLesson }[],
  blogPosts: { node: { frontmatter: MarkdownRemarkFrontmatter } }[]
) => {
  const tags: string[] = []
  if (lessons) {
    lessons?.forEach(({ node }) =>
      node.keywords?.forEach((keyword) => tags.push(keyword))
    )
  }

  if (blogPosts) {
    blogPosts.forEach(({ node: { frontmatter } }) =>
      frontmatter?.tags?.forEach((keyword) => tags.push(keyword))
    )
  }

  return [...new Set(tags)]
}

type Props = {
  allMarkdownRemark: {
    edges: {
      node
    }[]
  }
  allContentfulLesson: {
    edges: {
      node: ContentfulLesson
    }[]
  }
}

type Context = {
  tag: string
}

const Tag: FC<PageProps<Props, Context>> = ({
  pageContext,
  data,
  location: { pathname },
}) => {
  const { tag } = pageContext
  const { edges: blogPosts } = data.allMarkdownRemark
  const { edges: lessons } = data.allContentfulLesson

  const firstPost = first(blogPosts) as
    | undefined
    | { frontmatter: MarkdownRemarkFrontmatter }
  const firstLesson = first(lessons) as undefined | ContentfulLesson

  const combinedTags = combineTags(lessons, blogPosts)

  const spotlight = firstLesson
    ? {
        cover: firstLesson.cover?.fluid,
        title: firstLesson.lessonName,
        author: getFirstAuthor(firstLesson.authorCard),
      }
    : {
        cover: firstPost?.frontmatter?.thumbnailBlog?.childImageSharp?.fluid,
        title: firstPost?.frontmatter.title,
        author: firstPost?.frontmatter.author,
      }

  return (
    <Layout>
      <Container>
        <SEO
          pathName={pathname}
          title={`Tag: ${tag}`}
          description={` Nyxo coaching lessons and blog posts in the category ${tag}.`}
        />
        <Title>{tag}</Title>
        <Subtitle>
          Nyxo coaching lessons and blog posts in the category {tag}.
        </Subtitle>

        <TagsContainer>
          <TagSection tags={combinedTags} />
        </TagsContainer>

        <CoverPhotoContainer>
          <Cover fluid={spotlight.cover} />
          <Spotlight>
            <SpotlightTitle>{spotlight.title}</SpotlightTitle>
            <Author>{spotlight.author}</Author>
          </Spotlight>
        </CoverPhotoContainer>
        <Posts>
          {blogPosts.map(({ node }: { node: BlogPostNode }) => {
            const {
              excerpt,
              frontmatter: {
                slug,
                title,
                author,
                description,
                thumbnailBlog,
                tags,
              },
            } = node

            return (
              <BlogPost
                key={slug}
                author={author}
                title={title}
                slug={`/${slug}`}
                description={description || excerpt}
                thumbnailBlog={thumbnailBlog}
                tags={tags}
              />
            )
          })}
          {lessons.map(({ node }: { node: ContentfulLesson }) => (
            <LessonCard
              key={node.slug as string}
              name={node.lessonName}
              path={`/lesson/${node.slug}`}
              readingTime={
                node.lessonContent.fields.readingTime.minutes as number
              }
              cover={node.cover.fluid}
              lesson={node}
              excerpt={node.lessonContent.fields.excerpt as string}
            />
          ))}
        </Posts>
      </Container>
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query Tags($tag: String, $locale: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            author
            title
            slug
            tags
            thumbnailBlog {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }

    allContentfulLesson(
      filter: { node_locale: { eq: $locale }, keywords: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          ...LessonFragment
        }
      }
    }
  }
`

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

const Title = styled(H1)`
  text-align: center;
  text-transform: capitalize;
  margin-top: 5rem;
  font-size: 4rem;
`

const Subtitle = styled.h4`
  text-align: center;
`

const CoverPhotoContainer = styled.div`
  position: relative;
  margin: 5rem 0rem;
  height: 30rem;
  max-height: 50vh;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);
`

const Cover = styled(Image)`
  width: 100%;
  height: 100%;
`

const Spotlight = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem 2rem;
  background: linear-gradient(#2d2d2d00, #232323eb);
`

const SpotlightTitle = styled.h3`
  color: white;
  font-family: var(--semibold);
  text-shadow: 2px 2px 10px #333333cf;
  margin-bottom: 0.5rem;
`

const TagsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

const Author = styled.span`
  font-family: var(--medium);
  color: white;
  font-size: 0.9rem;
`

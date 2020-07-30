import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import BlogPost from "./BlogPost"
import { H2 } from "../components/Html/HtmlContent"
import { BlogPostNode } from "../typings/blog-types"

const BlogPreview: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              author
              title
              slug
              tags
              thumbnailBlog {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <BlogSection>Check out our blog!</BlogSection>
      <Posts>
        {posts.map(({ node }: { node: BlogPostNode }) => {
          const frontmatter = node.frontmatter
          const fields = node.fields
          const slug = frontmatter?.slug
          const excerpt = node.excerpt

          const author = frontmatter.author
          const title = frontmatter.title || fields?.slug
          const description = frontmatter.description || excerpt
          const thumbnailBlog = frontmatter?.thumbnailBlog
          const tags = frontmatter.tags

          return (
            <BlogPost
              key={slug as string}
              author={author}
              title={title}
              slug={slug}
              description={description}
              thumbnailBlog={thumbnailBlog}
              tags={tags}
            />
          )
        })}
      </Posts>

      <BlogText>
        <BlogLink to="/blog">More from our blog</BlogLink>
      </BlogText>
    </>
  )
}

export default BlogPreview

const BlogSection = styled(H2)`
  font-size: 36px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 45px;
  }
`
const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: var(--maxWidth);
  box-sizing: border-box;
`

const BlogLink = styled(Link)`
  padding: 1rem;
  font-weight: 500;
  color: var(--radiantBlue);
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  margin: 2rem 2rem 2rem auto;

  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }
`
const BlogText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: var(--maxWidth);
  cursor: pointer;
`

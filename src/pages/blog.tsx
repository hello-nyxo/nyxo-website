import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import TagFilter from "../components/Blog/TagFilter"
import BlogPost from "../components/BlogPost"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/page/Header"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { Meta } from "../../@types/content/meta"
import { GatsbyImage } from "../../@types/childImageSharp"
import { BlogPostNode } from "../typings/blog-types"
import { useTranslation } from "gatsby-plugin-react-i18next"

type Props = {
  dataJson: Meta
  blogMeta: GatsbyImage
  blogCover: GatsbyImage
  allMarkdownRemark: {
    nodes: BlogPostNode[]
  }
}

const BlogPage: FC<PageProps<Props>> = ({
  location: { pathname },
  data: {
    allMarkdownRemark: { nodes: blogPosts },
    blogMeta,
    blogCover,
  },
}) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("BLOG.TITLE")}
        description={t("BLOG.DESCRIPTION")}
        pathName={pathname}
        image={blogMeta.childImageSharp.fixed.src}
        staticImage={true}
      />

      <Container>
        <PageHeader
          title={t("BLOG.TITLE")}
          subtitle={t("BLOG.DESCRIPTION")}
          coverPhoto={blogCover.childImageSharp.fluid}
        />
        <TagWrap>
          <TagFilter />
        </TagWrap>

        <Posts>
          {blogPosts.map(
            ({
              frontmatter: {
                slug,
                author,
                title,
                description,
                thumbnailBlog,
                tags,
              },
            }: BlogPostNode) => {
              return (
                <BlogPost
                  key={slug}
                  author={author}
                  title={title}
                  slug={`/${slug}`}
                  description={description}
                  thumbnailBlog={thumbnailBlog}
                  tags={tags}
                />
              )
            }
          )}
        </Posts>
      </Container>

      <NewsLetterForm />
    </Layout>
  )
}

export default BlogPage

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: 1440px;
`

const TagWrap = styled.div`
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space: nowrap;
  }
`

export const pageQuery = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    blogCover: file(name: { regex: "/blog-cover/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    blogMeta: file(name: { regex: "/Our Blog/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    tags: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

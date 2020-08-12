import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulAuthor } from "../../graphql-types"
import AuthorCard from "../components/Author/AuthorCard"
import { H1, H3 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import { TextContainer, Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import TagSection from "../components/tags/Tags"
import { RelatedContentFactory } from "../Helpers/related-content"
import { BlogPostNode } from "../typings/blog-types"
import BlogPost from "../components/BlogPost"
import { useTranslation } from "gatsby-plugin-react-i18next"

type Props = {
  markdownRemark: BlogPostNode
  allMarkdownRemark: {
    edges: {
      node: BlogPostNode
    }[]
  }
  contentfulAuthor: ContentfulAuthor
}

const BlogPostTemplate: FC<PageProps<Props>> = ({
  data: {
    markdownRemark: {
      excerpt,
      html,
      frontmatter: {
        slug = "",
        tags,
        thumbnailBlog,
        canonical,
        description,
        title,
        date,
      },
    },
    contentfulAuthor: author,
    allMarkdownRemark,
  },
  location: { pathname },
}) => {
  const blogPosts = allMarkdownRemark.edges.map(
    ({ node }: { node: BlogPostNode }) => node
  )
  const relatedBlogPosts = new RelatedContentFactory(blogPosts, slug)
    .setMaxArticles(3)
    .setTags(tags)
    .getArticles()

  const { t } = useTranslation()

  return (
    <Layout>
      <>
        <SEO
          title={title as string}
          pathName={pathname}
          image={thumbnailBlog?.childImageSharp?.fixed?.src}
          description={description || excerpt}
          staticImage={true}
          canonical={canonical}
        />

        <Header>
          <TextContainer>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Image
              alt="Blog post cover"
              fluid={thumbnailBlog?.childImageSharp?.fluid}
            />
          </TextContainer>
        </Header>

        <TextContainer>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          {!!author && <AuthorCard author={author} />}

          <Tags>
            <H3>{t("TAGS")}</H3>
            <TagSection largeTags tags={tags} />
          </Tags>

          <ShareArea></ShareArea>
        </TextContainer>
        <Container>
          <H3>{t("RELATED")}</H3>
          <RelatedContentSection>
            {relatedBlogPosts.map(
              ({ article: blogPost }: { article: BlogPostNode }) => (
                <BlogPost
                  key={blogPost.frontmatter.slug}
                  tags={blogPost.frontmatter.tags}
                  slug={`/${blogPost.frontmatter.slug}`}
                  title={blogPost.frontmatter.title}
                  author={blogPost.frontmatter.author}
                  thumbnailBlog={blogPost.frontmatter.thumbnailBlog}
                  description={blogPost.frontmatter.description}
                />
              )
            )}
          </RelatedContentSection>
        </Container>
      </>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $author: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        author
        canonical
        thumbnailBlog {
          childImageSharp {
            fixed(width: 800, quality: 75) {
              ...GatsbyImageSharpFixed_noBase64
            }
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
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

    contentfulAuthor(slug: { eq: $author }) {
      ...AuthorFragment
    }
  }
`

const Image = styled(Img)``

const Header = styled.div`
  text-align: center;
  padding: 1rem 0 2rem 0;
  position: relative;
`

export const Content = styled.div`
  margin: 5rem 0 5rem;

  p {
    font-size: 1.15rem;
    line-height: 2rem;
    margin-bottom: 2.5rem;
  }

  b {
    font-weight: bold;
    font-family: "Montserrat-semibold", sans-serif;
  }

  i {
    font-style: italic;
  }
  .gatsby-highlight {
    margin: 2rem 0rem;
  }

  .gatsby-resp-image-wrapper {
    margin: 2rem 0rem;
  }

  strong {
    font-weight: bold;
    font-family: "Montserrat-semibold", sans-serif;
  }

  ul {
    counter-reset: counter;
    margin-bottom: 2rem;
    li {
      counter-increment: counter;
      padding-left: 1.5rem;
      margin-bottom: 1rem;
      font-size: 1.15rem;
      position: relative;
      &:before {
        display: inline;
        font-size: 2rem;
        line-height: 2rem;
        margin-right: 10px;
        position: absolute;
        content: "•";
        color: hsl(255deg, 85%, 30%);
        font-weight: bold;
        font-family: "Montserrat-semibold", sans-serif;
      }

      p {
        display: inline;
      }
    }
  }

  li {
    font-size: 1.15rem;
    line-height: 2rem;
  }

  ol {
    counter-reset: list;
    padding-left: 1rem;
    li {
      counter-increment: list;
      margin-bottom: 2rem;
      position: relative;
      &:before {
        display: inline;
        content: counter(list);
        margin-right: 15px;
        color: hsl(255deg, 85%, 30%);
        font-weight: bold;
        font-size: 1rem;
        line-height: 2rem;
        font-family: "Montserrat-semibold", sans-serif;
      }
      p {
        display: inline;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: -2px;
    right: -2px;
    bottom: 0px;
    height: 2px;
    border-radius: 2px;
    transition: transform 200ms ease 150ms, opacity 350ms ease 150ms;
  }

  h1 {
    margin: 3.5rem 0rem 2rem;
    font-size: 2.5rem;
    color: hsl(255deg, 85%, 30%);
    line-height: 5rem;
  }

  h2 {
    margin: 3.5rem 0rem 2rem;
    font-size: 2rem;
    color: hsl(255deg, 85%, 30%);
  }

  h3 {
    margin: 3.5rem 0rem 2rem;
    font-size: 1.8rem;
    color: hsl(255deg, 85%, 30%);
  }

  h4 {
    margin: 3.5rem 0rem 2rem;
    font-size: 1.6rem;
    color: hsl(255deg, 85%, 30%);
  }

  h5 {
    margin: 3.5rem 0rem 2rem;
    font-size: 1.4rem;
    color: hsl(255deg, 85%, 30%);
  }

  h6 {
    margin: 2.5rem 0rem 1rem;
    font-size: 1.2rem;
    color: hsl(255deg, 85%, 30%);
  }
`

const Date = styled.p`
  margin-bottom: 50px;
`

const ShareArea = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  border-top: 1px solid var(--textSecondary);
`

const Title = styled(H1)`
  text-align: center;
  margin-top: 5rem;
  font-size: 4rem;
  line-height: 5rem;
`

const Tags = styled.div``

const RelatedContentSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem -0.5rem;
  flex-wrap: wrap;
`

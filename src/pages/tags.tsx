import { graphql, Link, PageProps } from "gatsby"
import { kebabCase, uniqBy } from "lodash"
import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import PageHeader from "../components/PageHeader"
import { P } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { TagsPageQueryQuery } from "../../graphql-types"

const TagsPage: FC<PageProps<TagsPageQueryQuery>> = (props) => {
  const {
    location: { pathname },
    data: {
      allMarkdownRemark: { group },
      tagsMeta,
      allContentfulLesson: { group: tags },
      allDataJson: { nodes },
    },
  } = props
  const pageInfo = nodes[0].tags

  return (
    <Layout>
      <SEO
        title={pageInfo.title}
        pathName={pathname}
        description={pageInfo.description}
        staticImage={true}
        image={tagsMeta.childImageSharp.fixed.src}
      />

      <PageHeader title={pageInfo.title} text={""} />

      <Tags>
        {group.map(({ tag, totalCount }: { tag: any; totalCount: number }) => {
          return (
            <TagLinkLI key={tag}>
              <TagLink data-count={totalCount} to={`/tags/${kebabCase(tag)}/`}>
                {tag}
              </TagLink>
            </TagLinkLI>
          )
        })}
        {tags.map((tag) => {
          return (
            <TagLinkLI key={tag.fieldValue}>
              <TagLink
                data-count={tag.totalCount}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}
              </TagLink>
            </TagLinkLI>
          )
        })}
      </Tags>

      <NewsLetterForm />
    </Layout>
  )
}

export default TagsPage

const TagLink = styled(Link)`
  position: relative;
  text-align: left;
  font-size: 1.5rem;
  &:after {
    display: inline-flex;
    content: attr(data-count);
    border-radius: 10px;
    background: var(--radiantBlue);
    background-repeat: repeat-x;
    position: absolute;
    right: -1rem;
    font-size: 0.8rem;
    color: white;
    padding: 4px;
    top: -5px;
    line-height: 90%;
  }
  margin-left: 2rem;
`

const TagLinkLI = styled.li`
  margin: 0px 20px 30px 50px;
`

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 5rem auto 10rem;
  max-width: 1140px;
`

export const pageQuery = graphql`
  query TagsPageQuery {
    tagsMeta: file(name: { regex: "/Tags/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    allDataJson {
      nodes {
        tags {
          title
          description
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
    allContentfulLesson(filter: { node_locale: { eq: "en-US" } }) {
      group(field: keywords) {
        fieldValue
        totalCount
      }
    }
  }
`

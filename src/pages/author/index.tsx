import { graphql, PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { AuthorsPageQueryQuery } from "../../../graphql-types"
import AuthorList from "../../components/Author/AuthorList"
import Layout from "../../components/layout"
import PageHeader from "../../components/PageHeader"
import { Container } from "../../components/Primitives"
import SEO from "../../components/SEO/SEO"
import { PageQuery } from "../../typings/PageQuery"

interface Props extends PageQuery {
  data: AuthorsPageQueryQuery
}

const CoachingPage = (props: PageProps<AuthorsPageQueryQuery>) => {
  const {
    data: {
      allDataJson: { nodes },
      coachingMeta,
    },
    location: { pathname },
  } = props
  const {
    title = "Authors Page",
    description = "Nyxo Authors",
  } = nodes[0].authors

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        pathName={pathname}
        image={coachingMeta?.childImageSharp?.fixed?.src}
        staticImage={true}
      />
      <PageHeader
        title="Nyxo Authors"
        text="Explore the people behind Nyxo Sleep Coaching"
      />
      <Container>
        <Authors>
          <AuthorList />
        </Authors>
      </Container>
    </Layout>
  )
}

export default CoachingPage

const Authors = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const pageQueryCoaching = graphql`
  query AuthorsPageQuery {
    coachingMeta: file(name: { regex: "/Coaching/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allDataJson {
      nodes {
        authors {
          title
          description
        }
      }
    }
  }
`

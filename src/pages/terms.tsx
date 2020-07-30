import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { Content } from "../templates/blog-post"

type Props = {
  termsMeta: {
    childImageSharp: {
      fixed: {
        src: string
      }
    }
  }
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
    }
  }
  dataJson: {
    terms: {
      description: string
      title: string
    }
  }
}

const TermsPage: FC<PageProps<Props>> = ({
  location: { pathname },
  data: {
    markdownRemark: { html },
    termsMeta,
    dataJson: {
      terms: { description, title },
    },
  },
}) => (
  <Layout>
    <SEO
      title={title}
      pathName={pathname}
      description={description}
      staticImage={true}
      image={termsMeta.childImageSharp.fixed.src}
    />

    <PageHeader title={title} text="" />
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Layout>
)

export default TermsPage

export const pageQuery = graphql`
  query TermsPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/content/terms/" }) {
      html
      frontmatter {
        title
      }
    }
    termsMeta: file(name: { regex: "/Terms/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    dataJson {
      terms {
        description
        title
      }
    }
  }
`

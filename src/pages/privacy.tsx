import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { Content } from "../templates/blog-post"
import { Meta } from "../../@types/content/meta"

type Props = {
  privacyMeta: {
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
  dataJson: Meta
}

const PrivacyPage: FC<PageProps<Props>> = ({
  location: { pathname },
  data: {
    markdownRemark: { html },
    privacyMeta,
    dataJson: {
      privacy: { description, title },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title={title}
        pathName={pathname}
        description={description}
        staticImage={true}
        image={privacyMeta.childImageSharp.fixed.src}
      />

      <PageHeader title={title} text="" />
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/content/privacy/" }) {
      html
      frontmatter {
        title
      }
    }
    privacyMeta: file(name: { regex: "/Privacy/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    dataJson {
      privacy {
        title
        description
      }
    }
  }
`

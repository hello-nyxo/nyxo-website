import React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO/SEO"
import { PageProps, graphql } from "gatsby"

interface PageQuery extends PageProps {
  data: any
}

const NotFoundPage = (props: PageQuery) => {
  const {
    location: { pathname },
    data,
  } = props
  return (
    <Layout>
      <SEO
        title="404: Not found"
        description="You just hit a route that doesn&#39;t exist... the sadness :( "
        pathName={pathname}
        image={data.notFoundMeta.childImageSharp.fixed.src}
      />
      <div className={"container"}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    notFoundMeta: file(name: { regex: "/404/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

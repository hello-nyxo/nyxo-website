import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/Primitives"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Icon } from "../components/Icons"

type Props = {
  allMarkdownRemark: {
    nodes: any // not sure about the types. I tried to reference the `BlogPostNode` type, but it doesn't exist.
  }
}

const Device = ({ data: { allMarkdownRemark } }: any) => {
  const nodes = allMarkdownRemark.nodes

  return (
    <Layout>
      <Container>
        {nodes.map(({ frontmatter }: any) => {
          return (
            <DeviceContainer key={frontmatter.slug}>
              <DeviceLogo
                height="100px"
                width="100px"
                name={frontmatter?.icon}
                stroke={frontmatter.stroke}
                viewBox={frontmatter.viewbox}
                fill={frontmatter.fill}
              />
              <H1>{frontmatter.title}</H1>
            </DeviceContainer>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Device

export const pageQuery = graphql`
  query($slug: String) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          slug
          icon
          title
          fill
          stroke
          viewbox
          description
        }
      }
    }
  }
`
const H1 = styled.h1`
  text-align: center;
`
const DeviceContainer = styled.div`
  margin-top: 100px;
`
const DeviceLogo = styled(Icon)`
  margin: auto;
  display: block;
`

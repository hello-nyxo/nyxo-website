import React from "react"
import styled from "styled-components"
import { Icon } from "../Icons"
import { useStaticQuery, graphql } from "gatsby"

const FeatureGrid = () => {
  const { forYou } = useStaticQuery(graphql`
    query FeaturesQuery {
      forYou: pagesJson {
        features {
          icon
          text
          title
        }
      }
    }
  `)
  return (
    <FeatureSection>
      <H2>Features</H2>
      <Grid>
        {forYou.features.map((feature: any, index: number) => (
          <Column key={index}>
            <Icon name={feature.icon} width="50px" height="50px" />
            <Content>
              <Title>{feature.title}</Title>
              <Text>{feature.text}</Text>
            </Content>
          </Column>
        ))}
      </Grid>
    </FeatureSection>
  )
}

export default FeatureGrid

const FeatureSection = styled.section``

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const H2 = styled.h2``

const Column = styled.div`
  width: 33.333%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  flex: 1;
`

const Title = styled.h3`
  margin: 0 0 1rem;
`

const Text = styled.p``

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"

export const LessonUI: FC = () => {
  const { lessons } = useStaticQuery(graphql`
    {
      lessons: file(relativePath: { eq: "lessons.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Container className="sleep-ui">
      <Image fluid={lessons.childImageSharp.fluid} />
    </Container>
  )
}

const Container = styled.div`
  will-change: transform;
  width: 183px;
  height: 220px;
  position: absolute;
  top: 150px;
  right: 180px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px,
    rgba(65, 19, 19, 0.2) 0px 0px 0px 0.5px inset;
  transform: rotateY(-20deg) rotateX(20deg);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  &:hover {
    top: 100px;
    height: 320px;
  }
`

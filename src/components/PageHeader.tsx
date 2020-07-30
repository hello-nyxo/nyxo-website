import React, { FC } from "react"
import styled from "styled-components"
import devices from "../devices"
import Image, { FluidObject } from "gatsby-image"
type Props = {
  title?: string | null
  text?: string | null
  coverPhoto?: FluidObject | null
}

const PageHeader: FC<Props> = ({ title, text, coverPhoto }) => (
  <Outer>
    <CoverPhotoContainer>
      {!!coverPhoto && <CoverPhoto fluid={coverPhoto} />}
    </CoverPhotoContainer>

    <Container>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
    </Container>
  </Outer>
)

export default PageHeader

const Outer = styled.div`
  background-color: var(--bg);
  position: relative;
  margin-bottom: 5rem;
`

const Container = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  height: 20rem;
  padding: 100px 0 100px 0;
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const CoverPhotoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &:after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.15);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const CoverPhoto = styled(Image)`
  height: 100%;
  width: 100%;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: white;
  padding: 0 0 15px 0;
  line-height: 54px;
  text-shadow: 2px 2px 5px #00000082;

  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    font-size: 44px;
  }
`

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  margin: 2rem 2rem;

  @media ${devices.tablet} {
    margin: 2rem 5rem;
  }
`

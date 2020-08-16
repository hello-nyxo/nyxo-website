import React, { FC } from "react"
import styled from "styled-components"
import { H1 } from "../Html/HtmlContent"
import Image, { FluidObject } from "gatsby-image"

type Props = {
  title?: null | string
  subtitle?: null | string
  coverPhoto: FluidObject
}

const PageHeader: FC<Props> = ({
  title = "Nyxo",
  subtitle = "Sleep Coaching",
  coverPhoto,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <CoverPhotoContainer>
        {!!coverPhoto && <Cover fluid={coverPhoto} />}
      </CoverPhotoContainer>
    </>
  )
}

export default PageHeader

const Title = styled(H1)`
  text-align: center;
  margin-top: 5rem;
  font-size: 3rem;
`

const Subtitle = styled.h4`
  text-align: center;
  max-width: 80%;
  margin: auto;
`

const CoverPhotoContainer = styled.div`
  margin: 5rem 0rem;
  height: 30rem;
  max-height: 50vh;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Cover = styled(Image)`
  width: 100%;
  height: 100%;
  /* -webkit-filter: sepia(0.35) contrast(1.25) saturate(1.25);
  filter: sepia(0.35) contrast(1.25) saturate(1.25);

  &:before {
    background: rgba(125, 105, 24, 0.2);
    content: "";
    mix-blend-mode: darken;
  } */
`

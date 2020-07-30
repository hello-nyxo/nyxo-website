import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { device } from "../Primitives"

type Props = {
  position: string
  name: string
  image: FluidObject
  slug: string
}

const PersonCard: FC<Props> = ({ image, name, position, slug }) => {
  return (
    <Person to={`/author/${slug}`}>
      <ImageWrap>
        <Image alt={name} fluid={image} />
      </ImageWrap>
      <InfoWrap>
        <Name>{name}</Name>
        <Row>
          <Position>{position}</Position>
        </Row>
      </InfoWrap>
    </Person>
  )
}

export default PersonCard

const Person = styled(Link)`
  display: flex;
  flex-direction: row;
  margin: 1rem 0.5rem;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  box-shadow: var(--shadow);
  box-sizing: border-box;
  transition: transform 0.15s ease-in;
  &:hover {
    transform: translateY(-2px);
  }

  @media ${device.desktopL} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`

const ImageWrap = styled.div`
  width: 3rem;
  height: 3rem;
  min-width: 50px;

  img {
    border-radius: 50%;
  }
`

const InfoWrap = styled.div`
  margin-left: 30px;
`

const Position = styled.div`
  font-size: 0.9rem;
  font-family: var(--medium);
  color: var(--textSecondary);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Name = styled.h3`
  margin: 0rem 0rem 0.5rem;
`

import React, { FC } from "react"
import styled from "styled-components"
import { device } from "../Primitives"
import { Icon } from "../Icons"

type Props = {
  publication: any
}

const PublicationCard: FC<Props> = ({ publication }) => {
  return (
    <Publication key={publication.id}>
      <Title>{publication.title}</Title>
      <Row>
        <Year>{publication.year}</Year>
        {publication.authors.map((author) => (
          <AuthorName key={author.name}>{author.name}</AuthorName>
        ))}
      </Row>
      <Abstract>{publication.abstract}</Abstract>

      {publication.pdfUrl && (
        <PdfLink href={publication.pdfUrl}>
          <PdfIcon />
        </PdfLink>
      )}
    </Publication>
  )
}

export default PublicationCard

const Publication = styled.div`
  margin: 1rem 0.5rem;
  padding: 0.5rem;
  display: block;
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 5px;
  border: 1px solid white;
  width: 100%;

  picture {
    opacity: 1;
    transition: 0.2s ease-in-out opacity;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    picture {
      opacity: 0.8;
    }
  }

  @media ${device.desktopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
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

const Title = styled.h6`
  margin: 0rem;
  font-size: 1.2rem;
`

const AuthorName = styled.span`
  color: var(--textSecondary);
  font-family: var(--medium);
  font-size: 0.8rem;
  margin-right: 0.5rem;
`

const Abstract = styled.p`
  font-size: 0.9rem;
  line-height: 1.2rem;
`

const Year = styled.span`
  color: var(--radiantBlue);
  font-family: var(--medium);
  font-size: 0.8rem;
  margin-right: 1rem;
`

const Row = styled.div`
  margin: 0.5rem 0rem 1rem;
`

const PdfLink = styled.a`
  display: block;
  margin-top: 1rem;
`
const PdfIcon = styled(Icon).attrs(() => ({
  name: "pdf",
  stroke: "none",
  fill: "currentColor",
  height: "25px",
  width: "25px",
}))``

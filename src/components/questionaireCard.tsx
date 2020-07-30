import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface Props {
  name: string
  path: string
}

const QuestionaireCard = (props: Props) => {
  const { path, name } = props
  return (
    <Card to={path}>
      <Title>{name}</Title>
    </Card>
  )
}

export default QuestionaireCard

const Card = styled(Link)`
  padding: 1rem;
  margin: 1rem 0rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
`

const Title = styled.h4`
  margin: 0;
  font-weight: bold;
  color: var(--radiantBlue);
`

const ReadingTime = styled.span``

const Excerpt = styled.p``

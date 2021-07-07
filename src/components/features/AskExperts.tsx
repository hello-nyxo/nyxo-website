import React, { FC } from "react"
import styled from "styled-components"
import { H2, P } from "../Html/HtmlContent"

const AskExperts: FC = () => {
  return (
    <Container>
      <Column>
        <H2>Got a Question? We are here to help!</H2>
        <P></P>
      </Column>
    </Container>
  )
}

export default AskExperts

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  flex: 1;
`

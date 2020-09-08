import { Container } from "../Primitives"
import React, { FC } from "react"

const Sleep: FC = () => {
  const { data } = useSleep()
  return (
    <Container>
      <H3>SLEEP</H3>
    </Container>
  )
}

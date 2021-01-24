import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  title: string
}

export const Button: FC = ({ title }) => {
  return (
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button``

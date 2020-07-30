import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  toggleMenu: () => void
}

const DrawerToggleButton: FC<Props> = ({ toggleMenu }) => {
  const handleClick = () => {
    toggleMenu()
  }

  return (
    <ToggleButton onClick={handleClick}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  )
}

export default DrawerToggleButton

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  margin-left: 2rem;
`

const ToggleButtonLine = styled.div`
  width: 20px;
  height: 3px;
  background-color: #4a5aef;
`

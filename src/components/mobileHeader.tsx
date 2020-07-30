import { Link } from "gatsby"
import React, { FC } from "react"
import { NyxoLogo } from "../components/logo"
import styled from "styled-components"
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"

type Props = {
  toggleMenu: () => void
}

const MobileHeader: FC<Props> = ({ toggleMenu }) => {
  const toggle = () => {
    toggleMenu()
  }

  return (
    <HeaderWrap>
      <div className={"container"}>
        <div className={"top-menu"}>
          <div className={"logo"}>
            <Link to="/" title={"Nyxo"}>
              <NyxoLogo name="Nyxo" />
            </Link>
          </div>
          <DrawerToggleButton toggleMenu={toggle} />
        </div>
      </div>
    </HeaderWrap>
  )
}

export default MobileHeader

const HeaderWrap = styled.header`
  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

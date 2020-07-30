import React, { memo, useState } from "react"
import MobileHeader from "../mobileHeader"
import SideDrawer from "../SideDrawer/SideDrawer"

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <MobileHeader toggleMenu={toggleMenu} />
      <SideDrawer showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  )
}

export default memo(SideMenu)

import React, { useEffect, FC } from "react"
import "../../static/styles/all.scss"
import Header from "./header"
import generateAscii from "../Helpers/AsciiHelper"
import Footer from "./Footer/Footer"
import styled from "styled-components"
import { Link } from "gatsby-plugin-react-i18next"
import { Icon } from "./Icons"
import devices from "../devices"
import { minDevice } from "./Primitives"
import FloatingPrompt from "./GetAppBanner/FloatingPrompt"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ children }) => {
  useEffect(() => {
    generateAscii()
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>

      <FloatingPrompt />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout

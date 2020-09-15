import React, { FC, useEffect } from "react"
import "../../static/styles/all.scss"
import generateAscii from "../Helpers/AsciiHelper"
import Footer from "./Footer/Footer"
import FloatingPrompt from "./GetAppBanner/FloatingPrompt"
import Header from "./header"

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

import React, { useEffect, FC } from "react"
import "../../static/styles/all.scss"
import Header from "./header"
import generateAscii from "../Helpers/AsciiHelper"
import Footer from "./Footer/Footer"

type Props = {
  children: JSX
}

const Layout: FC<Props> = ({ children }) => {
  useEffect(() => {
    generateAscii()
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout

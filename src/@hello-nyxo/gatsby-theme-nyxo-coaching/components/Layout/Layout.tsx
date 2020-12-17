import React, { FC, useEffect } from "react"
import Footer from "~components/Footer/Footer"
import Header from "~components/header"
// import generateAscii from "~helpers/AsciiHelper"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ children }) => {
  useEffect(() => {
    // generateAscii()
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

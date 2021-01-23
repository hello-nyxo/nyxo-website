import React, { FC, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Footer from "~components/Footer/Footer"
import Header from "~components/header"
import { lightTheme } from "~styles/themes"
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
      <ThemeProvider theme={lightTheme}>
        <Header />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  )
}

export default Layout

import React, { useEffect, FC } from "react"
import "../../static/styles/all.scss"
import Header from "./header"
import generateAscii from "../Helpers/AsciiHelper"
import Footer from "./Footer/Footer"
import FloatingPrompt from "./GetAppBanner/FloatingPrompt"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ children }) => {
  useEffect(() => {
    generateAscii()
  }, [])

  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  return (
    <>
      <Header />
      <Content style={style}>
        <main>{children}</main>
      </Content>
      <FloatingPrompt />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout

const Content = styled(animated.div)``

import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTransition, animated } from "react-spring"
import { links } from "../Auth/Links"

type Props = {
  showMenu: boolean
  toggleMenu: () => void
}

const SideDrawer: FC<Props> = ({ showMenu, toggleMenu }) => {
  const handleClick = () => {
    toggleMenu()
  }

  const transitions = useTransition(showMenu, null, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  })

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <SideDrawerWrap key={key} style={props}>
            <Ul>
              {links.map((link, index) => (
                <Li key={index}>
                  <ClickLink
                    onClick={handleClick}
                    to={`/${link.path}`}
                    title={link.title}>
                    {link.title}
                  </ClickLink>
                </Li>
              ))}
            </Ul>
          </SideDrawerWrap>
        ) : null
      )}
    </>
  )
}

export default SideDrawer

const SideDrawerWrap = styled(animated.nav)`
  background-color: #f4f5f9;
  height: 100%;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 30;
`

const ClickLink = styled(Link)`
  color: #4a5aef;
  text-decoration: none;
  font-size: 1.2rem;

  &.active {
    border-left: 4px solid #4a5aef;
    color: #4a5aef;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 50px;
`

const Li = styled.li`
  margin-top: 1rem;
`

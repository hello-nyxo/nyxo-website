import styled from "styled-components"
import { Icon } from "../Icons"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

export const BookmarkButtonContainer = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  cursor: pointer;
`

export const Heart = styled(Icon).attrs(() => ({
  fill: "none",
  stroke: "#F42D97",
}))`
  margin: 0px;
`

export const BookmarkContainer = styled.div`
  float: right;
  margin-top: 30px;
`
export const Weeks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem -1rem;
`
export const ContentLoader = styled(Loader)`
  display: inline-block;
  width: max-content;
`
export const Button = styled.button`
  background-color: #4a5aef;
  color: #ffffff;
  border-radius: 5px;
  padding: 2px 5px;
`
export const Loading = styled.div`
  height: 2rem;
`

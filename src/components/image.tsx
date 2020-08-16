import Img from "gatsby-image"
import React, { FC } from "react"

interface Props {
  alt: string
  path: any
}

const Image: FC<Props> = ({ alt, path = "/" }) => {
  return <Img key={alt} fluid={path ? path : ""} alt={alt} />
}
export default Image

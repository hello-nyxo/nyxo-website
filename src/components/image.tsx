import Img from "gatsby-image"
import React from "react"

interface Props {
  alt: string
  path: any
}

const Image = ({ alt, path = "/" }: Props) => {
  return <Img key={alt} fluid={path ? path : ""} alt={alt} />
}
export default Image

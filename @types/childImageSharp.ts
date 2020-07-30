import { FluidObject, FixedObject } from "gatsby-image"

export type GatsbyImage = {
  childImageSharp: {
    fixed: FixedObject
    fluid: FluidObject
  }
}

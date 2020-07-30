import React from "react"
import renderer from "react-test-renderer"

import Image from "../image"

describe("Image Component", () => {
  const path = "/static/12427087eb4503fdd2e65051f774db4e/47813/anu.jpg"
  const alt = "Anu"

  it("renders correctly", () => {
    const tree = renderer.create(<Image path={path} alt={alt} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

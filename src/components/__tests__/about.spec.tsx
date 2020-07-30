import React from "react"
import renderer from "react-test-renderer"

import PersonCard from "../About/PersonCard"

describe("PersonCard", () => {
  const position = "Some title"
  const name = "1234556789"
  const image = "/static/12427087eb4503fdd2e65051f774db4e/47813/anu.jpg"

  it("renders correctly", () => {
    const tree = renderer
      .create(<PersonCard name={name} position={position} image={image} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from "react"
import renderer from "react-test-renderer"

import { Icon } from "../Icons"

describe("Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Icon name="sun" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

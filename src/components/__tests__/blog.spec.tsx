import React from "react"
import renderer from "react-test-renderer"

import TagFilter from "../Blog/TagFilter"

describe("TagFilter", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TagFilter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

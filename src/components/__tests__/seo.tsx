import React from "react"
import renderer from "react-test-renderer"

import SEO from "../SEO/SEO"

describe("SEO", () => {
  const title = "some title"
  const path = "/"
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title={title} pathName={path} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from "react"
import renderer from "react-test-renderer"

import PageHeader from "../PageHeader"

describe("Page header", () => {
  const title = "A title"
  const text = "Lorem ipsum"

  it("renders correctly", () => {
    const tree = renderer
      .create(<PageHeader title={title} text={text} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

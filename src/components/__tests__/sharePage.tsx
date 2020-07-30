import React from "react"
import renderer from "react-test-renderer"

import SharePage from "../sharePage"

describe("SharePage", () => {
  const subject = "sleep coaching is great!"
  const url = "https://www.example.com"
  const excerpt = "Lorem ipsum"

  it("renders correctly", () => {
    const tree = renderer
      .create(<SharePage subject={subject} url={url} excerpt={excerpt} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

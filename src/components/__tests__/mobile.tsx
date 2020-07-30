import React from "react"
import renderer from "react-test-renderer"

import MobileHeader from "../mobileHeader"

describe("Mobile Header", () => {
  const toggleMenu = () => {
    toggleMenu()
  }

  it("renders correctly", () => {
    const tree = renderer
      .create(<MobileHeader toggleMenu={toggleMenu} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

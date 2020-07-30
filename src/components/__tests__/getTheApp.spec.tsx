import React from "react"
import renderer from "react-test-renderer"

import GetTheApp from "../GetAppBanner/index"

describe("Get the app", () => {
  it("renders correctly", () => {
    const getApp = renderer.create(<GetTheApp />).toJSON()
    expect(getApp).toMatchSnapshot()
  })
})

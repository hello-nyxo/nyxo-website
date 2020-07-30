import React from "react"
import renderer from "react-test-renderer"
import LessonLimited from "../LessonLimited"

const RendersCorrectly = "renders correctly"

describe("Lesson Limited", () => {
  it(RendersCorrectly, () => {
    const tree3 = renderer.create(<LessonLimited />).toJSON()
    expect(tree3).toMatchSnapshot()
  })
})

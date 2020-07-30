import React from "react"
import renderer from "react-test-renderer"

import QuestionnaireCard from "../questionaireCard"

describe("Questionnaire", () => {
  // Mock data for testing
  const title = "Some title"
  const id = "1234556789"

  it("renders correctly", () => {
    const tree = renderer
      .create(<QuestionnaireCard name={title} path={id} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

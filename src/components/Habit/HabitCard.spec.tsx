import React from "react"
import renderer from "react-test-renderer"
import HabitCard from "./HabitCard"
import { render } from "@testing-library/react"

describe("HabitCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <HabitCard period="MORNING" slug="test-habit" title="Test Habit" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("displays the correct title", () => {
    const { getByTestId } = render(
      <HabitCard period="MORNING" slug="test-habit" title="Test Habit" />
    )
    expect(getByTestId("habit-title")).toHaveTextContent("Test Habit")
  })
})

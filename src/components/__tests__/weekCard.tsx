import React from "react"
import renderer from "react-test-renderer"

import WeekCard from "../week/WeekCard"

describe("Week card", () => {
  const name = "Week name"
  const path = "/week/week-name"
  const key = path
  const duration = 15
  const intro = "Lorem ipsum"
  const lessons = [
    {
      lessonName: "Why We Sleep?",
      slug: "why-we-sleep",
    },
    {
      lessonName: "Internal Clock",
      slug: "internal-clock",
    },
    {
      lessonName: "Sleep Pressure",
      slug: "sleep-pressure",
    },
    {
      lessonName: "Is Napping Bad for You?",
      slug: "is-napping-bad-for-you",
    },
    {
      lessonName: "Do You Sleep Enough?",
      slug: "do-you-sleep-enough",
    },
    {
      lessonName: "Sleep Quality",
      slug: "sleep-quality",
    },
    {
      lessonName: "Sleep Hygiene",
      slug: "sleep-hygiene",
    },
  ]
  const coverPhoto = "cat.jpeg"

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <WeekCard
          key={key}
          name={name}
          path={path}
          duration={duration}
          intro={intro}
          lessons={lessons}
          coverPhoto={coverPhoto}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

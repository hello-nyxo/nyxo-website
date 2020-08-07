import React from "react"
import styled from "styled-components"
import { ContentfulWeek } from "../../../graphql-types"
import WeekCard from "./WeekCard"

interface Props {
  data: any
}

const LoggedOutUserWeekList = (props: Props) => {
  return (
    <Weeks>
      {props.data.map(({ node: week }: { node: ContentfulWeek }) => {
        return (
          <WeekCard
            key={week.slug}
            path={`/week/${week.slug}`}
            intro={week.intro}
            name={week.weekName}
            duration={week.duration}
            lessons={week.lessons}
            coverPhoto={week.coverPhoto.fluid}
            slug={week.slug}
          />
        )
      })}
    </Weeks>
  )
}

export default LoggedOutUserWeekList

const Weeks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 3rem 0rem;
  margin: 2rem -1rem;
`

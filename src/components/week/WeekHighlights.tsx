import React from "react"
import LoggedInUserWeekList from "./LoggedInUserWeekList"
import LoggedOutUserWeekList from "./LoggedOutUserWeekList"
import { isLoggedIn } from "../../auth/AppUser"

interface Props {
  data: any
}

const WeekHighlights = (props: Props) => {
  const { data } = props
  return (
    <>
      {isLoggedIn() ? (
        <LoggedInUserWeekList data={data} />
      ) : (
        <LoggedOutUserWeekList data={data} />
      )}
    </>
  )
}

export default WeekHighlights

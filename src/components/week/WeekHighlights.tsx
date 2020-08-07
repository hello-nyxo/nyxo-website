import React from "react"
import LoggedInUserWeekList from "./LoggedInUserWeekList"
import LoggedOutUserWeekList from "./LoggedOutUserWeekList"
import { isLoggedIn } from "../../auth/AppUser"

interface Props {
  data: any
}

const WeekHighlights = (props: Props) => {
  return (
    <>
      {isLoggedIn() ? (
        <LoggedInUserWeekList data={props.data} />
      ) : (
        <LoggedOutUserWeekList data={props.data} />
      )}
    </>
  )
}

export default WeekHighlights

import React from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { useQuery } from "react-query"
import styled from "styled-components"
import { ContentfulWeek } from "../../../graphql-types"
import { fetchWeekBookmarks } from "../BookmarkButton/fetchBookmarks"
import { Button, Weeks } from "../StyledComponents/styledComponents"
import WeekCard from "./WeekCard"

interface Props {
  data: any
}

const LoggedInUserWeekList = (props: Props) => {
  const { data } = props
  const { data: bookmarkData, status } = useQuery("weekKey", fetchWeekBookmarks)

  let i = 0
  const limit = 3
  if (status === "error") {
    for (i; i < limit; i++) {
      const { data, status } = useQuery("weekKey", fetchWeekBookmarks)
    }
  }

  const fetchData = () => {
    useQuery("weekKey", fetchWeekBookmarks)
  }

  return (
    status === "loading" ||
      (status === "error" && (
        <>
          <P>Loading additional data....</P>
          <WeekLoader
            type="Oval"
            color="#4a5aef"
            height={24}
            width={24}
            timeout={3000}
          />
          {i >= limit && (
            <>
              <p>There was a problem loading your data.</p>
              <Button onClick={fetchData}>Retry loading data</Button>
            </>
          )}
          <Weeks>
            {data.map((week: ContentfulWeek) => {
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
        </>
      )),
    status === "success" && (
      <Weeks>
        {data.map((week: ContentfulWeek) => {
          // const bookmarked = bookmarkData?.data.listLikedContents.items.find(
          //   (item) => item.slug == week.slug
          // )
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
              bookmarked={false}
            />
          )
        })}
      </Weeks>
    )
  )
}

export default LoggedInUserWeekList

const P = styled.p`
  display: inline-block;
  margin-right: 15px;
`
const WeekLoader = styled(Loader)`
  display: inline-block;

  width: max-content;
`

import { navigate } from "@reach/router"
import { Auth } from "aws-amplify"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../../graphql-types"
import { getCurrentUser } from "../../auth/AppUser"
import colors from "../../colors"
import { Container } from "../../components/Primitives"
import HabitCard from "../Habit/HabitCard"
import { H2, H3, H4 } from "../Html/HtmlContent"
import { Icon } from "../Icons"
import PageHeader from "../PageHeader"
import UserHabits from "../user/UserHabits"
import LessonCard from "../lesson/LessonCard"
import WeekCard from "../week/WeekCard"
import { useGetUserBookmarks } from "../../hooks/data-fetching"

const Details: FC = () => {
  const {
    allContentfulWeek: { nodes: weeks },
    allContentfulHabit: { nodes: habits },
    allContentfulLesson: { nodes: lessons },
  } = useStaticQuery(graphql`
    query {
      allContentfulHabit(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...HabitFragment
        }
      }

      allContentfulLesson(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...LessonFragment
        }
      }

      allContentfulWeek(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...WeekFragment
        }
      }
    }
  `)

  const user = getCurrentUser()

  const signOut = () => {
    Auth.signOut()
      .then(function () {
        navigate("/me/login")
      })
      ["catch"](function (err) {
        console.error(err)
      })
  }

  const data = useGetUserBookmarks([...weeks, ...habits, ...lessons])
  console.log(data)
  return (
    <>
      <PageHeader title="Profile Details" text={user.email as string} />
      <Container>
        <H3>You</H3>

        <p>Email: {user.email}</p>
        <ul>
          <LI>
            <Link to="/me/reset">Reset Password</Link>
          </LI>
          <LI onClick={signOut}>
            <Icon
              name="logout"
              height="30px"
              width="30px"
              stroke={colors.radiantBlue}
            />
          </LI>
        </ul>

        <H3>Bookmarked Content</H3>
        <H4>Weeks</H4>
        <BookmarkContainer>
          {weeks.map((week: ContentfulWeek) => {
            return (
              <WeekCard
                bookmarked={false}
                key={`${week?.slug}`}
                path={`/week/${week?.slug}`}
                intro={week?.intro}
                name={week?.weekName}
                duration={week?.duration}
                lessons={week?.lessons}
                coverPhoto={week?.coverPhoto?.fluid as FluidObject}
                slug={week.slug}
              />
            )
          })}
        </BookmarkContainer>
        <H4>Lessons</H4>
        <BookmarkContainer>
          {lessons.map((lesson: ContentfulLesson) => (
            <LessonCard
              slug={`${lesson?.slug}`}
              name={lesson?.lessonName}
              key={lesson?.slug as string}
              bookmarked={false}
              onClick={() => {}}
              loading={false}
              path={`/lesson/${lesson?.slug}`}
              lesson={lesson}
              readingTime={lesson?.lessonContent?.fields?.readingTime?.minutes}
              cover={lesson?.cover?.fluid as FluidObject}
              excerpt={lesson?.lessonContent?.fields?.excerpt}
            />
          ))}
        </BookmarkContainer>

        <H4>Habits</H4>
        <BookmarkContainer>
          {habits.map((node: ContentfulHabit) => (
            <HabitCard
              link
              key={node.slug as string}
              period={node.period}
              title={node.title}
              slug={`/habit/${node.slug}`}
              excerpt={node.description?.fields?.excerpt}
            />
          ))}
        </BookmarkContainer>

        <H2>Sleep Coaching</H2>

        <UserHabits />
      </Container>
    </>
  )
}
export default Details

const LI = styled.li`
  display: inline-block;
  margin-right: 50px;
  vertical-align: middle;
  cursor: pointer;
`
const BookmarkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -1rem;
`
const P = styled.p`
  display: inline-block;
  margin-right: 15px;
`

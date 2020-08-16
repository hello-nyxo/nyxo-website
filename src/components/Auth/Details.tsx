import React from "react"
import { navigate } from "@reach/router"
import { getCurrentUser } from "../../auth/AppUser"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Auth } from "aws-amplify"
import styled from "styled-components"
import colors from "../../colors"
import { Container } from "../../components/Primitives"
import LessonCard from "../../components/lesson/LessonCard"
import WeekCard from "../week/WeekCard"
import HabitCard from "../Habit/HabitCard"
import { H2, H3 } from "../Html/HtmlContent"
import { Icon } from "../Icons"
import PageHeader from "../PageHeader"
import UserHabits from "../user/UserHabits"
import { useQuery } from "react-query"
import { fetchAllBookmarks } from "../BookmarkButton/fetchBookmarks"
import {
  ContentLoader,
  Button,
} from "../../components/StyledComponents/styledComponents"

const Details = () => {
  const graphqlData = useStaticQuery(graphql`
    query {
      allContentfulHabit {
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

  const weeksEN = graphqlData.allContentfulWeek.nodes
  const habits = graphqlData.allContentfulHabit.nodes
  const lessonsEN = graphqlData.allContentfulLesson.nodes

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

  const { data: bookmarkData, status } = useQuery(
    "detailsKey",
    fetchAllBookmarks
  )

  let i = 0
  const limit = 3
  if (status === "error") {
    for (i; i < limit; i++) {
      const { data, status } = useQuery("detailsKey", fetchAllBookmarks)
    }
  }

  const fetchData = () => {
    useQuery("detailsKey", fetchAllBookmarks)
  }

  return (
    <>
      <PageHeader title="Profile Details" text={user.email} />
      <Container>
        <H3>About You</H3>

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
        <BookmarkContainer>
          {status === "loading" ||
            (status === "error" && (
              <>
                <P>Loading additional data....</P>
                <ContentLoader
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
              </>
            ))}

          {status === "success" &&
            lessonsEN.map(({ slug, lessonName, lessonContent, cover }: any) => {
              const bookmarked = bookmarkData?.data.listLikedContents.items.find(
                (item) => item.slug == slug
              )

              return (
                bookmarked && (
                  <LessonCard
                    key={bookmarked.id}
                    slug={slug}
                    name={lessonName}
                    path={`/lesson/${slug}`}
                    readingTime={lessonContent?.fields?.readingTime?.minutes}
                    cover={cover?.fluid}
                    excerpt={lessonContent?.fields?.excerpt}
                    bookmarked={bookmarked}
                  />
                )
              )
            })}

          {status === "success" &&
            weeksEN.map(
              ({
                slug,
                intro,
                weekName,
                duration,
                lessons,
                coverPhoto,
              }: any) => {
                const bookmarked = bookmarkData?.data.listLikedContents.items.find(
                  (item) => item.slug == slug
                )

                return (
                  bookmarked && (
                    <WeekCard
                      key={bookmarked.id}
                      path={`/week/${slug}`}
                      intro={intro}
                      name={weekName}
                      duration={duration}
                      lessons={lessons}
                      coverPhoto={coverPhoto.fluid}
                      slug={slug}
                      bookmarked={bookmarked}
                    />
                  )
                )
              }
            )}
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
  margin: 0 -0.5rem;
`
const P = styled.p`
  display: inline-block;
  margin-right: 15px;
`

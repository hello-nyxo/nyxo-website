import React from "react"
import { navigate } from "@reach/router"
import { getCurrentUser } from "../../auth/AppUser"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Auth } from "aws-amplify"
import styled from "styled-components"
import colors from "../../colors"
import { Container } from "../../components/Primitives"
import { listLikedContents } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import LessonCard from "../../components/lesson/LessonCard"
import WeekCard from "../week/WeekCard"
import HabitCard from "../Habit/HabitCard"
import { ContentfulLesson } from "../../../graphql-types"
import { H2, H3 } from "../Html/HtmlContent"
import { Icon } from "../Icons"
import PageHeader from "../PageHeader"
import UserHabits from "../user/UserHabits"
import { useQuery } from "react-query"

const Details = () => {
  const graphqlData = useStaticQuery(graphql`
    query {
      allContentfulHabit {
        edges {
          node {
            ...HabitFragment
          }
        }
      }

      allContentfulLesson(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            ...LessonFragment
          }
        }
      }

      allContentfulWeek(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            ...WeekFragment
          }
        }
      }
    }
  `)

  const weeksEN = graphqlData.allContentfulWeek.edges
  const habits = graphqlData.allContentfulHabit.edges
  const lessonsEN = graphqlData.allContentfulLesson.edges

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

  const fetchLikes = async () => {
    return await API.graphql(graphqlOperation(listLikedContents))
  }

  const { data, status } = useQuery("someKeyName", fetchLikes)

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
          {status === "loading" && <div>Loading bookmarks ...</div>}

          {status === "error" && <div>Error fetching bookmarked data</div>}

          {status === "success" &&
            lessonsEN.map(({ node }: { node: ContentfulLesson }) => {
              const bookmarked = data.data.listLikedContents.items.find(
                (item) => item.slug == node.slug
              )

              return (
                bookmarked && (
                  <LessonCard
                    key={bookmarked.id}
                    slug={node.slug}
                    name={node.lessonName}
                    path={`/lesson/${node.slug}`}
                    lesson={node}
                    readingTime={
                      node.lessonContent?.fields?.readingTime?.minutes
                    }
                    cover={node.cover?.fluid}
                    excerpt={node.lessonContent?.fields?.excerpt}
                    bookmarked={bookmarked}
                  />
                )
              )
            })}

          {status === "success" &&
            weeksEN.map(({ node }: any) => {
              const bookmarked = data.data.listLikedContents.items.find(
                (item) => item.slug == node.slug
              )

              return (
                bookmarked && (
                  <WeekCard
                    key={bookmarked.id}
                    path={`/week/${node.slug}`}
                    intro={node.intro}
                    name={node.weekName}
                    duration={node.duration}
                    lessons={node.lessons}
                    coverPhoto={node.coverPhoto.fluid}
                    slug={node.slug}
                    bookmarked={bookmarked}
                  />
                )
              )
            })}
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

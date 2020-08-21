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
import { useTranslation } from "gatsby-plugin-react-i18next"
import { ContentLoader, Loading } from "../StyledComponents/styledComponents"

const Details: FC = () => {
  const {
    allContentfulWeek: { nodes: weekContent },
    allContentfulHabit: { nodes: habitContent },
    allContentfulLesson: { nodes: lessonContent },
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
  const {
    data: { lessons, weeks, habits },
    status,
  } = useGetUserBookmarks([...weekContent, ...habitContent, ...lessonContent])
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

  const { t } = useTranslation()

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
        {weeks?.length > 0 && (
          <>
            <H4>{t("COACHING.WEEKS")}</H4>
            <Loading>
              {status === "loading" && (
                <>
                  <P>{t("LOADING_DATA")}</P>
                  <ContentLoader
                    type="Oval"
                    color="#4a5aef"
                    height={24}
                    width={24}
                    timeout={3000}
                  />
                </>
              )}
            </Loading>
            <BookmarkContainer>
              {weeks.map((week: ContentfulWeek) => {
                return (
                  <WeekCard
                    bookmarked={false}
                    key={`${week?.id}-${week?.slug}`}
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
          </>
        )}
        {lessons?.length > 0 && (
          <>
            <H4>{t("COACHING.LESSONS")}</H4>
            <Loading>
              {status === "loading" && (
                <>
                  <P>{t("LOADING_DATA")}</P>
                  <ContentLoader
                    type="Oval"
                    color="#4a5aef"
                    height={24}
                    width={24}
                    timeout={3000}
                  />
                </>
              )}
            </Loading>
            <BookmarkContainer>
              {lessons.map((lesson: ContentfulLesson) => (
                <LessonCard
                  slug={`${lesson?.slug}`}
                  name={lesson?.lessonName}
                  key={`${lesson?.id}-${lesson?.slug}`}
                  bookmarked={false}
                  loading={false}
                  path={`/lesson/${lesson?.slug}`}
                  lesson={lesson}
                  readingTime={
                    lesson?.lessonContent?.fields?.readingTime?.minutes
                  }
                  cover={lesson?.cover?.fluid as FluidObject}
                  excerpt={lesson?.lessonContent?.fields?.excerpt}
                />
              ))}
            </BookmarkContainer>
          </>
        )}
        {habits?.length > 0 && (
          <>
            <H4>{t("HABITS")}</H4>
            <Loading>
              {status === "loading" && (
                <>
                  <P>{t("LOADING_DATA")}</P>
                  <ContentLoader
                    type="Oval"
                    color="#4a5aef"
                    height={24}
                    width={24}
                    timeout={3000}
                  />
                </>
              )}
            </Loading>
            <BookmarkContainer>
              {habits.map((node: ContentfulHabit) => (
                <HabitCard
                  link
                  key={`${node.id}${node.slug}`}
                  period={node.period}
                  title={node.title}
                  slug={`/habit/${node.slug}`}
                  excerpt={node.description?.fields?.excerpt}
                />
              ))}
            </BookmarkContainer>
          </>
        )}

        <H2>{t("COACHING.SLEEP_COACHING")}</H2>
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

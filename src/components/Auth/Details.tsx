import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import {
	ContentfulHabit,
	ContentfulLesson,
	ContentfulWeek
} from "../../../graphql-types"
import { Container } from "../../components/Primitives"
import { useGetUserBookmarks } from "../../hooks/bookmark-hooks"
import HabitCard from "../Habit/HabitCard"
import { H2, H3, H4 } from "../Html/HtmlContent"
import LessonCard from "../lesson/LessonCard"
import Coaching from "../user/Coaching"
import UserHabits from "../user/UserHabits"
import UserInfo from "../user/UserInfo"
import WeekCard from "../week/WeekCard"

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
  } = useGetUserBookmarks([...weekContent, ...habitContent, ...lessonContent])
  const { t } = useTranslation()

  return (
    <Container>
      <UserInfo />
      <Coaching />

      <H3>Bookmarked Content</H3>
      {weeks?.length > 0 && (
        <>
          <H4>{t("COACHING.WEEKS")}</H4>
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
  )
}
export default Details

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

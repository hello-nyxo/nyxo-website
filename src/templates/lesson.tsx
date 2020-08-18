import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulAuthor,
  ContentfulLesson,
  LessonByIdQuery,
} from "../../graphql-types"
import AuthorCard from "../components/Author/AuthorCard"
import HabitCard from "../components/Habit/HabitCard"
import HtmlContent, { H1, H3, H4 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import LargeLessonCard from "../components/lesson/LargeLessonCard"
import { Container, TextContainer } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import TagSection from "../components/tags/Tags"
import getFirstAuthor from "../Helpers/AuthorHelper"
import { getLocalizedPath } from "../Helpers/i18n-helpers"
import { useTranslation } from "gatsby-plugin-react-i18next"
const Lesson: FC<PageProps<LessonByIdQuery, { locale: string }>> = ({
  data,
  pageContext: { locale },
  location: { pathname },
}) => {
  const {
    nextLesson,
    previousLesson,
    contentfulLesson: {
      lessonName: title = "",
      lessonContent: content,
      createdAt,
      updatedAt,
      cover,
      keywords,
      authorCard,
      additionalInformation: readMore,
      habit: habits,
    },
  } = data as {
    contentfulLesson: ContentfulLesson
    nextLesson: ContentfulLesson
    previousLesson: ContentfulLesson
  }
  const { t } = useTranslation()
  const description = content.fields.excerpt
  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={title}
        description={description}
        published={createdAt}
        updated={updatedAt}
        image={cover.fixed.src}
        category="Health"
        tags="Sleep"
        author={getFirstAuthor(authorCard)}
      />

      <TextContainer>
        <TitleContainer>
          <H1>{title}</H1>
        </TitleContainer>

        <Cover>
          <CoverImage fluid={cover?.fluid} />
        </Cover>

        <HtmlContent document={content.json} />
        {habits && <H3>{t("HABITS_TO_TRY")}</H3>}
        <Habits>
          {habits?.map((habit: any, index: number) => (
            <HabitCard
              link
              key={index}
              title={habit.title}
              period={habit.period}
              slug={`/habit/${habit.slug}`}
              excerpt={habit.description.fields.excerpt}
            />
          ))}
        </Habits>
        {readMore && (
          <>
            <H3>{t("ADDITIONAL_READING")}</H3>
            <HtmlContent document={readMore.json} />
          </>
        )}

        <H4>{t("LESSON_BY")}</H4>
        <Authors>
          {authorCard?.map((author: ContentfulAuthor) => (
            <AuthorCard key={author.slug} author={author} />
          ))}
        </Authors>

        <H4>{t("TAGS")}</H4>
        <Tags>
          <TagSection tags={keywords} />
        </Tags>
      </TextContainer>

      <Container>
        <hr />
        <MoreLessonsContainer>
          {previousLesson && (
            <LargeLessonCard
              path={`/lesson/${previousLesson.slug}`}
              lesson={previousLesson}
            />
          )}
          {nextLesson && (
            <LargeLessonCard
              path={`/lesson/${nextLesson.slug}`}
              lesson={nextLesson}
            />
          )}
        </MoreLessonsContainer>
      </Container>
    </Layout>
  )
}

export default Lesson

export const Authors = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem -0.5rem;
  flex-wrap: wrap;
`

export const pageQuery = graphql`
  query LessonById(
    $slug: String!
    $locale: String!
    $previous: String
    $next: String
  ) {
    contentfulLesson(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...LessonFragment
    }
    nextLesson: contentfulLesson(
      slug: { eq: $next }
      node_locale: { eq: $locale }
    ) {
      ...LessonFragment
    }
    previousLesson: contentfulLesson(
      slug: { eq: $previous }
      node_locale: { eq: $locale }
    ) {
      ...LessonFragment
    }
  }
`

const Cover = styled.div`
  margin: 5rem 0rem;
  height: 30rem;
  max-height: 50vh;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);
`

const CoverImage = styled(Image)`
  height: 100%;
  width: 100%;
`

const Habits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`

const TitleContainer = styled.div`
  text-align: center;
`

const MoreLessonsContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -0.5rem 1rem;
`

const Tags = styled.div`
  margin: 0rem -0.3rem 2rem;
`

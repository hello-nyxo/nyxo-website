import { graphql, PageProps } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulLesson, LessonByIdQuery } from "../../graphql-types"
import AuthorCard from "../components/Author/AuthorCard"
import BookmarkButton from "../components/BookmarkButton/Bookmark"
import HabitCard from "../components/Habit/HabitCard"
import HtmlContent, { H1, H3, H4 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import LargeLessonCard from "../components/lesson/LargeLessonCard"
import { Container, TextContainer } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import TagSection from "../components/tags/Tags"
import getFirstAuthor from "../Helpers/AuthorHelper"
import {
  useAddBookmark,
  useDeleteBookmark,
  useGetBookmark,
} from "../hooks/bookmark-hooks"

const Lesson: FC<PageProps<LessonByIdQuery, { locale: string }>> = ({
  data,
  location: { pathname },
}) => {
  const {
    nextLesson,
    previousLesson,
    contentfulLesson: {
      lessonName: title = "",
      lessonContent: content,
      slug,
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

  const description = content?.fields?.excerpt
  const { t } = useTranslation()
  const {
    data: { bookmarked, id },
    isLoading,
  } = useGetBookmark(slug as string, "lesson")
  const [remove, { isLoading: removeLoading }] = useDeleteBookmark()
  const [add, { isLoading: addLoading }] = useAddBookmark()

  const handleBookmarking = async () => {
    if (bookmarked) {
      remove({ id: id, type: "lesson" })
    } else {
      await add({
        name: title,
        slug: slug as string,
        type: "lesson",
      })
    }
  }

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={title}
        description={description}
        published={createdAt}
        updated={updatedAt}
        image={cover?.fixed?.src}
        category="Health"
        tags="Sleep"
        author={getFirstAuthor(authorCard)}
      />

      <TextContainer>
        <TitleContainer>
          <H1>{title}</H1>
        </TitleContainer>

        <Cover>
          <CoverImage fluid={cover?.fluid as FluidObject} />
        </Cover>

        <ActionRow>
          <BookmarkButton
            onClick={handleBookmarking}
            bookmarked={bookmarked}
            loading={removeLoading || addLoading || isLoading}
          />
        </ActionRow>

        <HtmlContent document={content?.json} />
        {habits && <H3>{t("HABITS_TO_TRY")}</H3>}

        <Habits>
          {habits?.map((habit) => (
            <HabitCard
              link
              key={`${habit?.slug}`}
              title={habit?.title}
              period={habit?.period}
              slug={`/habit/${habit?.slug}`}
              excerpt={habit?.description?.fields?.excerpt}
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
          {authorCard?.map((author) => (
            <AuthorCard key={`${author?.slug}`} author={author} />
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

const ActionRow = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`
const FeedbackButton = styled.button`
  border-radius: 5px;
  border: 1px solid var(--radiantBlue);
  background-color: white;
  color: var(--radiantBlue);
  padding: 5px 10px;
`
const FeedbackInsights = styled.small`
  color: var(--radiantBlue);
  font-size: 12px;
`

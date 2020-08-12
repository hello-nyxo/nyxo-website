import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"
import { groupBy } from "lodash"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../graphql-types"
import HabitCard from "../components/Habit/HabitCard"
import HtmlContent, { H1, H3, H5, H6 } from "../components/Html/HtmlContent"
import { Icon } from "../components/Icons"
import Layout from "../components/layout"
import LessonCard from "../components/lesson/LessonCard"
import { Container, device, Row } from "../components/Primitives"
import { BookmarkButtonTemplateContainer } from "../components/StyledComponents/styledComponents"
import SEO from "../components/SEO/SEO"
import TagSection from "../components/tags/Tags"
import LargeWeekCard from "../components/week/LargeWeekCard"
import { getLocalizedPath } from "../Helpers/i18n-helpers"
import BookmarkButton from "../components/BookmarkButton/bookmarkButtonForTemplate"
import { useQuery } from "react-query"
import { FetchWeekLessonBookmark } from "../components/BookmarkButton/fetchBookmarks"
import { ContentLoader } from "../components/StyledComponents/styledComponents"

type Props = {
  contentfulWeek: ContentfulWeek
  nextWeek: ContentfulWeek
  previousWeek: ContentfulWeek
  habits: {
    edges: { node: ContentfulHabit }[]
  }
  tags?: {
    group: { fieldValue: string }[]
  }
}

const Week: FC<PageProps<Props>> = (props) => {
  const {
    data: {
      tags,
      habits,
      previousWeek,
      nextWeek,
      contentfulWeek: {
        slug,
        lessons,
        weekDescription,
        createdAt,
        updatedAt,
        weekName: title,
        coverPhoto,
      },
    },
    pageContext: { locale },
    location: { pathname },
  } = props

  const description = documentToPlainTextString(weekDescription.json)

  const groupedLessons = groupBy(lessons, (lesson) => lesson?.section?.title)
  const sectionData = lessons.map((item) => ({
    title: item.section?.title,
    id: item.section?.id,
    description: item.section?.description,
    order: item.section?.order,
  }))

  const sections = Object.entries(groupedLessons).map((group) => {
    return {
      header: { ...sectionData.find((item) => item.title === group[0]) },
      data: group[1],
    }
  })

  const { data, status } = useQuery(
    "lessonTemplateKey",
    FetchWeekLessonBookmark
  )

  const bookmarked = data?.data.listLikedContents.items.find(
    (item) => item.slug == slug
  )

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={title}
        description={description}
        image={coverPhoto.fixed.src}
        category="Health"
        tags="Sleep"
        published={createdAt}
        updated={updatedAt}
      />
      <Container>
        <H1>{title}</H1>

        <Cover>
          <CoverImage fluid={coverPhoto?.fluid} />
          <BookmarkButtonTemplateContainer>
            <BookmarkButton
              name={title}
              type="week"
              slug={slug}
              bookmarked={bookmarked}
            />
          </BookmarkButtonTemplateContainer>
        </Cover>

        <H3>About this week:</H3>

        <Row>
          <Column>
            <HtmlContent document={weekDescription.json} />
          </Column>
          {tags?.group?.length > 0 && (
            <Column>
              <TagTitle>
                <TagIcon />
                Tags
              </TagTitle>
              <Tags>
                <TagSection
                  tags={tags.group.map(
                    ({ fieldValue = "adenosine" }) => fieldValue
                  )}
                />
              </Tags>
            </Column>
          )}
        </Row>

        <H3>Lessons for this week</H3>

        {sections.map((section) => (
          <Section key={section.header.id}>
            <H6>{section.header.title}</H6>
            <HtmlContent document={section.header.description?.json} />
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
                  <Lessons>
                    {section.data.map((lesson: ContentfulLesson) => {
                      return (
                        <LessonCard
                          key={lesson.slug}
                          slug={lesson.slug}
                          name={lesson.lessonName}
                          path={`/lesson/${lesson.slug}`}
                          lesson={lesson}
                          readingTime={
                            lesson.lessonContent?.fields?.readingTime?.minutes
                          }
                          cover={lesson.cover?.fluid}
                          excerpt={lesson.lessonContent?.fields?.excerpt}
                        />
                      )
                    })}
                  </Lessons>
                </>
              ))}

            {status === "success" && (
              <Lessons>
                {section.data.map((lesson: ContentfulLesson) => {
                  const bookmarkedLesson = data?.data.listLikedContents.items.find(
                    (item) => item.slug == lesson.slug
                  )

                  return (
                    <LessonCard
                      key={lesson.slug}
                      slug={lesson.slug}
                      name={lesson.lessonName}
                      path={`/lesson/${lesson.slug}`}
                      lesson={lesson}
                      readingTime={
                        lesson.lessonContent?.fields?.readingTime?.minutes
                      }
                      cover={lesson.cover?.fluid}
                      excerpt={lesson.lessonContent?.fields?.excerpt}
                      bookmarked={bookmarkedLesson}
                    />
                  )
                })}
              </Lessons>
            )}
          </Section>
        ))}

        {habits?.edges.length > 0 && (
          <>
            <H3>Habits</H3>
            <Habits>
              {habits.edges.map(({ node }: { node: ContentfulHabit }) => (
                <HabitCard
                  link
                  key={node.slug as string}
                  title={node.title}
                  slug={getLocalizedPath(`/habit/${node.slug}`, locale)}
                  excerpt={node.description?.fields?.excerpt}
                  period={node.period}
                />
              ))}
            </Habits>
          </>
        )}

        <hr />
        <H3>More Coaching Weeks</H3>
        <NextWeeksContainer>
          {previousWeek && (
            <LargeWeekCard
              path={`/week/${previousWeek.slug}`}
              week={previousWeek}
              slug={previousWeek.slug}
            />
          )}
          {nextWeek && (
            <LargeWeekCard
              path={`/week/${nextWeek.slug}`}
              week={nextWeek}
              slug={nextWeek.slug}
            />
          )}
        </NextWeeksContainer>
      </Container>
    </Layout>
  )
}

export default Week

export const pageQuery = graphql`
  query WeekById(
    $slug: String!
    $locale: String!
    $previous: String
    $next: String
  ) {
    tags: allContentfulLesson(
      filter: {
        node_locale: { eq: $locale }
        week: { elemMatch: { slug: { eq: $slug } } }
      }
    ) {
      group(field: keywords) {
        fieldValue
      }
    }
    nextWeek: contentfulWeek(slug: { eq: $next }) {
      ...WeekFragment
    }
    previousWeek: contentfulWeek(slug: { eq: $previous }) {
      ...WeekFragment
    }
    contentfulWeek(slug: { eq: $slug }) {
      ...WeekFragment
    }

    habits: allContentfulHabit(
      filter: {
        node_locale: { eq: $locale }
        lesson: { elemMatch: { week: { elemMatch: { slug: { eq: $slug } } } } }
      }
    ) {
      edges {
        node {
          title
          period
          slug
          description {
            fields {
              excerpt
            }
          }
        }
      }
    }
  }
`

const Section = styled.div`
  margin-bottom: 5rem;
`

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

const Habits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`

const Column = styled.div`
  flex: 1;
  margin: 0.5rem;

  @media ${device.desktopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: calc(100% - 2 * 0.5rem);
    flex: 1 1 calc(100% - 2 * 0.5rem);
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
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

const TagTitle = styled(H5)`
  margin: 0rem 0rem 1rem;
`

const TagIcon = styled(Icon).attrs(() => ({
  name: "tag",
  fill: "#2c0b8e",
  stroke: "none",
  height: "20px",
  width: "20px",
  viewBox: "0 0 25 25",
}))``

const NextWeeksContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  margin: 0rem -0.5rem 2rem;
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const P = styled.p`
  display: inline-block;
  margin-right: 15px;
`

import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { Document } from "@contentful/rich-text-types"
import { graphql, PageProps } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { groupBy } from "lodash"
import React, { FC } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../graphql-types"
import BookmarkButton from "../components/BookmarkButton/BookmarkButton"
import { fetchWeekNLessonBookmarks } from "../components/BookmarkButton/fetchBookmarks"
import HabitCard from "../components/Habit/HabitCard"
import HtmlContent, { H1, H3, H5, H6 } from "../components/Html/HtmlContent"
import { Icon } from "../components/Icons"
import Layout from "../components/layout"
import LessonCard from "../components/lesson/LessonCard"
import { Container, device, Row } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { ContentLoader } from "../components/StyledComponents/styledComponents"
import TagSection from "../components/tags/Tags"
import LargeWeekCard from "../components/week/LargeWeekCard"
import {
  useGetBookmark,
  useDeleteBookmark,
  useAddBookmark,
} from "../hooks/data-fetching"

type Props = {
  contentfulWeek: ContentfulWeek
  nextWeek: ContentfulWeek
  previousWeek: ContentfulWeek
  habits: { nodes: ContentfulHabit[] }
  tags: {
    group: { fieldValue: string }[]
  }
}

type Lesson = ContentfulLesson & {
  bookmarked?: boolean
}
type Section = {
  title: string
  id: string
  description: { json: Document }
  order: number
}

const Week: FC<PageProps<Props, { locale: string }>> = ({
  data: {
    tags: { group: tags },
    habits: { nodes: habits },
    previousWeek,
    nextWeek,
    contentfulWeek: {
      lessons,
      weekDescription,
      createdAt,
      slug,
      updatedAt,
      weekName: title,
      coverPhoto,
    },
  },
  location: { pathname },
}) => {
  const { t } = useTranslation()
  // Week bookmark data
  const {
    data: { bookmarked: weekBookmarked, id },
    isLoading: getLoading,
  } = useGetBookmark(slug as string)
  const [remove, { isLoading: removeLoading }] = useDeleteBookmark()
  const [add, { isLoading: addLoading }] = useAddBookmark()

  // Lesson bookmark data
  const initialLessons: Lesson[] = lessons?.map((lesson) => ({
    ...(lesson as ContentfulLesson),
    bookmarked: false,
  }))

  const { data, status, isLoading } = useQuery(
    ["week", { initialLessons }],
    fetchWeekNLessonBookmarks,
    {
      initialData: initialLessons,
      initialStale: true,
    }
  )

  const description = documentToPlainTextString(weekDescription?.json)
  const groupedLessons = groupBy(data, (lesson) => lesson?.section?.title)

  const sectionData: Section[] = data?.map((item: Lesson) => ({
    title: item?.section?.title,
    id: item?.section?.id,
    description: item?.section?.description,
    order: item?.section?.order,
  }))

  const sections = Object.entries(groupedLessons).map((group) => {
    const header = sectionData.find((section) => section.title === group[0])
    return {
      header: header,
      data: group[1],
    }
  })

  const handleBookmark = async () => {
    if (weekBookmarked) {
      remove({ id: id })
    } else {
      await add({
        name: title,
        slug: slug as string,
        type: "week",
      })
    }
  }

  console.log(sections)
  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={title}
        description={description}
        image={coverPhoto?.fixed?.src}
        category="Health"
        tags="Sleep"
        published={createdAt}
        updated={updatedAt}
      />
      <Container>
        <H1>{title}</H1>

        <Cover>
          <CoverImage fluid={coverPhoto?.fluid as FluidObject} />
        </Cover>
        <BookmarkButton
          loading={removeLoading || addLoading || getLoading}
          onClick={handleBookmark}
          bookmarked={weekBookmarked}
        />

        <H3>{t("ABOUT_THIS_WEEK")}</H3>

        <Row>
          <Column>
            <HtmlContent document={weekDescription?.json} />
          </Column>
          {tags?.length > 0 && (
            <Column>
              <TagTitle>
                <TagIcon />
                {t("TAGS")}
              </TagTitle>
              <Tags>
                <TagSection
                  tags={tags.map(({ fieldValue = "adenosine" }) => fieldValue)}
                />
              </Tags>
            </Column>
          )}
        </Row>

        <H3>{t("LESSONS_FOR_THIS_WEEK")}</H3>
        <Loading>
          {status === "loading" && (
            <>
              <P>Loading additional data....</P>
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

        {sections.map(({ header, data }) => (
          <Section key={header?.id}>
            <H6>{header?.title}</H6>
            <HtmlContent document={header?.description?.json as Document} />

            <Lessons>
              {data.map((lesson) => {
                return (
                  <LessonCard
                    bookmarked={lesson?.bookmarked}
                    key={`${lesson?.slug}`}
                    slug={`${lesson?.slug}`}
                    name={lesson?.lessonName}
                    path={`/lesson/${lesson?.slug}`}
                    onClick={handleBookmark}
                    lesson={lesson}
                    loading={isLoading}
                    readingTime={
                      lesson?.lessonContent?.fields?.readingTime?.minutes
                    }
                    cover={lesson?.cover?.fluid as FluidObject}
                    excerpt={lesson?.lessonContent?.fields?.excerpt}
                  />
                )
              })}
            </Lessons>
          </Section>
        ))}

        {habits?.length > 0 && (
          <>
            <H3>{t("COACHING.HABITS")}</H3>
            <Habits>
              {habits.map((node: ContentfulHabit) => (
                <HabitCard
                  link
                  key={node.slug as string}
                  title={node.title}
                  slug={`/habit/${node.slug}`}
                  excerpt={node.description?.fields?.excerpt}
                  period={node.period}
                />
              ))}
            </Habits>
          </>
        )}

        <hr />
        <H3>{t("MORE_COACHING_WEEKS")}</H3>
        <NextWeeksContainer>
          {previousWeek && (
            <LargeWeekCard
              path={`/week/${previousWeek.slug}`}
              week={previousWeek}
            />
          )}
          {nextWeek && (
            <LargeWeekCard path={`/week/${nextWeek.slug}`} week={nextWeek} />
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
    nextWeek: contentfulWeek(
      slug: { eq: $next }
      node_locale: { eq: $locale }
    ) {
      ...WeekFragment
    }
    previousWeek: contentfulWeek(
      slug: { eq: $previous }
      node_locale: { eq: $locale }
    ) {
      ...WeekFragment
    }
    contentfulWeek(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...WeekFragment
    }

    habits: allContentfulHabit(
      filter: {
        node_locale: { eq: $locale }
        lesson: { elemMatch: { week: { elemMatch: { slug: { eq: $slug } } } } }
      }
    ) {
      nodes {
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

const Loading = styled.div`
  height: 2rem;
`

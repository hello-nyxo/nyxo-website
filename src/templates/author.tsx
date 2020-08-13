import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulAuthor } from "../../graphql-types"
import HtmlContent, { H1, H3 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import LessonCard from "../components/LessonCard"
import { Container, device } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { useTranslation } from "gatsby-plugin-react-i18next"

type Props = {
  contentfulAuthor: ContentfulAuthor
  allGoogleScholar: {
    edges: {
      title: string
      authors: { name: string }[]
    }[]
  }
}

const Author: FC<PageProps<Props>> = ({
  data: {
    contentfulAuthor: { name, avatar, credentials, lesson, description },
  },
  location: { pathname },
}) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={name}
        description={documentToPlainTextString(description?.json)}
      />

      <Container>
        <Row>
          <Avatar>
            <Image fluid={avatar.fluid} />
          </Avatar>
          <Column>
            <Name>{name}</Name>
            <Credentials>{credentials}</Credentials>
          </Column>
        </Row>
        <HtmlContent document={description?.json} />

        {/* {!!allGoogleScholar?.edges?.length && (
          <>
            <H3>Publications</H3>
            <Publications>
              {allGoogleScholar?.edges.map(({ node: publication }) => (
                <PublicationCard
                  key={publication.id}
                  publication={publication}
                />
              ))}
            </Publications>
          </>
        )} */}

        {lesson?.length > 0 && (
          <>
            <H3>{`${t("LESSONS_BY")} ${name}`}</H3>
            <Lessons>
              {lesson.map((ln: any) => (
                <LessonCard
                  cover={ln.cover.fluid}
                  key={ln.slug}
                  name={ln.lessonName}
                  path={`/lesson/${ln.slug}`}
                  lesson={ln}
                  excerpt={ln.lessonContent.fields.excerpt}
                  readingTime={ln.lessonContent.fields.readingTime.minutes}
                />
              ))}
            </Lessons>
          </>
        )}
        {}
      </Container>
    </Layout>
  )
}

export default Author

export const pageQuery = graphql`
  query AuthorBySlug($slug: String!, $locale: String!) {
    contentfulAuthor(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      name
      slug
      credentials
      description {
        json
        fields {
          excerpt
        }
      }
      lesson {
        ...LessonFragment
      }
      avatar {
        fluid(maxWidth: 500) {
          src
        }
      }
    }

    # allGoogleScholar(
    #   filter: { searchquery: { eq: $scholar } }
    #   sort: { fields: year, order: DESC }
    # ) {
    #   edges {
    #     node {
    #       title
    #       journal
    #       pdfUrl
    #       url
    #       year
    #       relatedUrl
    #       abstract
    #       citedByCount
    #       id
    #       authors {
    #         name
    #       }
    #       searchquery
    #     }
    #   }
    # }
  }
`

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Avatar = styled.div`
  width: 10rem;
  border-radius: 15rem;
  height: 10rem;
  overflow: hidden;
`

const Image = styled(Img)`
  height: 100%;
  width: 100%;
`
const Credentials = styled.h6`
  margin: 0rem 0rem;
  font-family: var(--semibold);
  font-weight: bold;
  font-style: normal;
`

const Publications = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 4rem 0rem 2rem;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    flex-direction: column;
  }

  @media ${device.mobileS} {
    flex-direction: column;
  }
`
const Column = styled.div`
  @media ${device.desktopL} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
    margin-left: 3rem;
  }

  @media ${device.desktop} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
    margin-left: 3rem;
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
    margin-left: 3rem;
  }

  @media ${device.laptop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
    margin-left: 3rem;
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
    margin-left: 3rem;
  }

  @media ${device.tablet} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
    margin-top: 2rem;
    text-align: center;
    margin-left: 0rem;
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
    text-align: center;
    margin-left: 0rem;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
    text-align: center;
    margin-left: 0rem;
  }
`

const Name = styled(H1)`
  margin: 0;
  line-height: 3rem;
`

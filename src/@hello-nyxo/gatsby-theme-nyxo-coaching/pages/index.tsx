import { RecentlyUpdated } from "@hello-nyxo/gatsby-theme-nyxo-coaching"
import { Meta } from "@types/content/meta"
import { graphql, PageProps } from "gatsby"
import GatsbyImage from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import BlogPreview from "~components/BlogPreview"
import Featured from "~components/Featured/Featured"
import { AuthorFeaturette } from "~components/features/AuthorFeaturette"
import { DataDrivenDemo } from "~components/features/DataDriven"
import { SyncFeatures } from "~components/features/SyncFeatures"
import { Hero } from "~components/hero/Hero"
import Image from "~components/image"
import NewsLetterForm from "~components/newsletter"
import SEO from "~components/SEO/SEO"
import Layout from "~theme/components/Layout/Layout"

type Props = {
  wce: GatsbyImage
  indexMeta: GatsbyImage
  datasources: GatsbyImage
  lessons: GatsbyImage
  cover: GatsbyImage
  data: GatsbyImage
  dataJson: Meta
}

const IndexPage: FC<PageProps<Props>> = ({
  location: { pathname },
  data: {
    indexMeta,
    recentlyUpdated: { nodes: recentlyUpdated },
  },
}) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("INDEX.TITLE")}
        pathName={pathname}
        description={t("INDEX.INTRODUCTION")}
        staticImage={true}
        image={indexMeta.childImageSharp.fixed.src}
        canonical={pathname}
      />

      <Hero />
      <Featured />
      {/* <CoachingHighlight /> */}

      <IndexContainer>
        <SyncFeatures />
        <DataDrivenDemo />
        <AuthorFeaturette />

        <RecentlyUpdated lessons={recentlyUpdated} />
      </IndexContainer>
      <BlogPreview />

      <NewsLetterForm />
    </Layout>
  )
}

export default IndexPage

const HeroMessage = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 42px;
    font-weight: 700;
    line-height: 54px;
  }
`

const HeroImg = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
`

const NewImage = styled(Image)`
  position: relative;
  overflow: visible;
`

const FeaturesHeroText = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 45px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 45px;
  }
`

const IndexContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0rem 2rem;
  margin: 0px auto;
  padding: 0rem 2rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
    margin: auto;
  }
`

const HeroContentWrap = styled.div`
  width: 70%;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const pageQuery = graphql`
  query IndexPageQuery($language: String) {
    indexMeta: file(name: { regex: "/Index/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    cover: file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    recentlyUpdated: allContentfulLesson(
      filter: { fields: { language: { eq: $language } } }
      sort: { fields: updatedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        ...LessonFragment
      }
    }
  }
`

import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { GatsbyImage } from "../../@types/childImageSharp"
import { Meta } from "../../@types/content/meta"
import AuthorFeaturette from "../components/Author/AuthorFeaturette"
import BlogPreview from "../components/BlogPreview"
import Featured from "../components/Featured/Featured"
import Image from "../components/image"
import Layout from "../components/layout"
import NewsLetterForm from "../components/newsletter"
import { Container, Demo } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import { P } from "../components/Html/HtmlContent"

type Props = {
  datasource: GatsbyImage
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
    datasources,
    lessons,
    cover,
    data,
    dataJson: {
      index: { title, description },
    },
  },
}) => {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <Layout>
      <SEO
        title={title}
        pathName={pathname}
        description={description}
        staticImage={true}
        image={indexMeta.childImageSharp.fixed.src}
        canonical={pathname}
      />

      <div className={"page-header home"}>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
        <HeroMessage>{t("INDEX.TITLE")}</HeroMessage>
        <Container>
          <HeroContentWrap>
            <P>{t("INDEX.INTRODUCTION")}</P>
          </HeroContentWrap>
        </Container>
        <HeroImg>
          <NewImage
            alt={"Nyxo Dashboard and phone"}
            path={cover.childImageSharp.fluid}
          />
        </HeroImg>
      </div>

      <Featured />

      <IndexContainer>
        <div className={"features"}>
          <div className={"feature__item"}>
            <div className={"row"}>
              <div className="col-6 first">
                <div className={"thumbnail"}>
                  <Image
                    alt="Nyxo data sources"
                    path={datasources.childImageSharp.fluid}
                  />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <FeaturesHeroText>
                    No need to buy a new sleep tracker
                  </FeaturesHeroText>
                  <p>
                    Import your data from your existing sleep tracker. If you do
                    not own a sleep tracker, you can also use Nyxo’s built in
                    sleep diary feature to track your sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <FeaturesHeroText>
                    Developed together with the leading sleep researchers
                  </FeaturesHeroText>
                  <p>
                    Nyxo sleep coaching program is based on the latest
                    scientific evidence. It focuses on improving all aspects of
                    your sleep and daily rhythm of life. See all the authors{" "}
                    <Link to="/author">here</Link>
                  </p>
                </div>
              </div>
              <div className="col-6 first">
                <AuthorFeaturette />
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className="col-6 first">
                <div className={"thumbnail"}>
                  <Image
                    alt="Nyxo data sources"
                    path={data.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <FeaturesHeroText>
                    Improving your sleep has never been this easy
                  </FeaturesHeroText>
                  <p>
                    See what four weeks of personalized sleep coaching can do
                    for your well-being and productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <FeaturesHeroText>Data-driven coaching</FeaturesHeroText>
                  <p>
                    Nyxo uses your sleep data to personalize the coaching to fit
                    your needs.
                  </p>
                </div>
              </div>

              <div className="col-6 first">
                <div className={"thumbnail"}>
                  <Image
                    alt="Nyxo data sources"
                    path={lessons.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className="col-6 first">
                <div className={"thumbnail"}>
                  <Image
                    alt="Nyxo data sources"
                    path={datasources.childImageSharp.fluid}
                  />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <FeaturesHeroText>
                    Supercharge your organization
                  </FeaturesHeroText>
                  <p>
                    With Nyxo for teams (coming soon), you can enroll your team
                    or even your whole organization into the coaching program.
                    We will help your employees to sleep better and improve both
                    their well-being and work performance.
                  </p>

                  <Demo
                    rel="noopener"
                    href="https://calendly.com/nyxo"
                    target="_blank">
                    Book a Free Demo
                  </Demo>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  query IndexPageQuery {
    indexMeta: file(name: { regex: "/Index/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    dataJson {
      index {
        title
        description
      }
    }
    cover: file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    datasources: file(relativePath: { eq: "datasources.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    lessons: file(relativePath: { eq: "lessons.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    data: file(relativePath: { eq: "data.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

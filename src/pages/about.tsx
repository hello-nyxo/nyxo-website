import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { GatsbyImage } from "../../@types/childImageSharp"
import { Meta } from "~content/data/meta"
import devices from "../devices"
import PersonCard from "../components/About/PersonCard"
// import InstagramFeaturette from "../components/Footer/InstagramFeaturette"
import { H1, H2 } from "../components/Html/HtmlContent"
import Layout from "~theme/components/Layout/Layout"
import { Container, P } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { useTranslation } from "gatsby-plugin-react-i18next"

type Props = {
  dataJson: Meta
  perttu: GatsbyImage
  eeva: GatsbyImage
  kayla: GatsbyImage
  pietari: GatsbyImage
  miska: GatsbyImage
  chinh: GatsbyImage
  anu: GatsbyImage
  liisa: GatsbyImage
  contactMeta: GatsbyImage
}

const AboutPage: FC<PageProps<Props>> = ({
  location: { pathname },
  data: {
    dataJson: {
      about: { perks, title, description },
    },
    perttu,
    eeva,
    kayla,
    pietari,
    miska,
    chinh,
    anu,
    liisa,
    contactMeta,
  },
}) => {
  const { t } = useTranslation()
  const team = [
    {
      name: "Perttu Lähteenlahti",
      position: "CEO",
      image: perttu.childImageSharp.fluid,
      slug: "perttu-lahteenlahti",
    },
    {
      name: "Eeva Siika-aho",
      position: "COO",
      image: eeva.childImageSharp.fluid,
      slug: "eeva-siika-aho",
    },
    {
      name: "Pietari Nurmi",
      position: "Head of Coaching",
      image: pietari.childImageSharp.fluid,
      slug: "pietari-nurmi",
    },
    {
      name: "Kayla Gordon",
      position: "Software Engineer",
      image: kayla.childImageSharp.fluid,
      slug: "kayla-gordon",
    },
    {
      name: "Miska Nurmi",
      position: "Data Analyst",
      image: miska.childImageSharp.fluid,
      slug: "miska-nurmi",
    },
    {
      name: "Duong Minh Chinh",
      position: "Software Engineer",
      image: chinh.childImageSharp.fluid,
      slug: "chinh-duong",
    },
  ]

  const scientists = [
    {
      name: "Anu-Katriina Pesonen",
      position: "Professor of clinical and developmental psychology",
      image: anu.childImageSharp.fluid,
      slug: "anu-katriina-pesonen",
    },
    {
      name: "Liisa Kuula",
      position: "Postdoctoral Researcher",
      image: liisa.childImageSharp.fluid,
      slug: "liisa-kuula",
    },
  ]

  return (
    <Layout>
      <SEO
        title={t("ABOUT.NYXO")}
        description={t("ABOUT.INTRODUCTION_1")}
        pathName={pathname}
        image={contactMeta.childImageSharp.fixed.src}
      />

      <Container>
        <H1>{t("ABOUT.TITLE")}</H1>

        <Row>
          <Column>
            <H2>{t("ABOUT.NYXO")}</H2>
            <P>{t("ABOUT.INTRODUCTION_1")}</P>

            <P>{t("ABOUT.INTRODUCTION_2")}</P>

            <P>{t("ABOUT.INTRODUCTION_3")}</P>
          </Column>
        </Row>
        <Row>
          <Team>
            {team.map((person) => (
              <PersonCard
                key={person.slug}
                name={person.name}
                image={person.image}
                slug={person.slug}
                position={person.position}
              />
            ))}
          </Team>
        </Row>

        <Row>
          <Column>
            <H2>{t("ABOUT.SCIENTISTS")}</H2>
            <P>{t("ABOUT.SCIENTISTS_TEXT")}</P>
          </Column>
        </Row>
        <Row>
          <Team>
            {scientists.map((person) => (
              <PersonCard
                key={person.slug}
                name={person.name}
                image={person.image}
                position={person.position}
                slug={person.slug}
              />
            ))}
          </Team>
        </Row>

        <JoinUs>
          <H2>{t("ABOUT.WORK_FOR_US")}</H2>
          <P>{t("ABOUT.WORK_FOR_US_TEXT")}</P>
        </JoinUs>

        {/* <InstagramFeaturette /> */}
      </Container>
    </Layout>
  )
}

export default AboutPage

const Team = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
  width: 100%;
`

const JoinUs = styled.div`
  @media only screen and (max-width: 719px) {
  }
`

const Perks = styled.div`
  display: flex;
  @media ${devices.mobileS} {
    flex-direction: column;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const Perk = styled.div`
  box-sizing: border-box;
  @media ${devices.mobileS} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 40%;
  }
`

const Row = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  margin: 3rem 0rem;
  @media ${devices.mobileS} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Column = styled.div`
  flex: 1;
  box-sizing: border-box;
  @media ${devices.mobileS} {
    max-width: 100%;
  }
  @media ${devices.tablet} {
    max-width: 45%;
  }
`

export const pageQuery = graphql`
  query AboutPageQuery {
    dataJson {
      about {
        title
        description
        perks {
          title
          text
        }
      }
    }

    contactMeta: file(name: { regex: "/Contact/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    team_illustration: file(relativePath: { eq: "team_illustration.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    eeva: file(relativePath: { eq: "team/eeva.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    perttu: file(relativePath: { eq: "team/perttu.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pietari: file(relativePath: { eq: "team/pietari.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    anu: file(relativePath: { eq: "team/anu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    kayla: file(relativePath: { eq: "team/kayla.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    liisa: file(relativePath: { eq: "team/liisa.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    miska: file(relativePath: { eq: "team/miska.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    chinh: file(relativePath: { eq: "team/chinh.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

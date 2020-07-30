import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { GatsbyImage } from "../../@types/childImageSharp"
import { Meta } from "../../@types/content/meta"
import devices from "../devices"
import PersonCard from "../components/About/PersonCard"
import InstagramFeaturette from "../components/Footer/InstagramFeaturette"
import { H1, H2 } from "../components/Html/HtmlContent"
import Layout from "../components/layout"
import { Container, P } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

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
        title={title}
        description={description}
        pathName={pathname}
        image={contactMeta.childImageSharp.fixed.src}
      />

      <Container>
        <H1>About</H1>
        <Row>
          <Column>
            <H2>About Nyxo</H2>
            <P>
              Nyxo was founded in early 2019 with a mission to help people to
              improve their sleep and day rhythm. Our first product is Nyxo, a
              personalized sleep coaching program that operates from your phone,
              evaluates your sleeping habits and helps you tackle the issues you
              might have in your sleep and daily routines.
            </P>

            <P>
              The roots of Nyxo are deeply rooted in scientific research, in a
              research commercialization project conducted at University of
              Helsinki. You can read{" "}
              <a href="https://www.helsinki.fi/en/news/health-news/sleepcircle-a-research-based-solution-for-controlling-the-sleep-rhythm">
                more about the research project here.
              </a>
            </P>

            <P>
              Before founding Nyxo, the founders did pioneering work on
              startup-corporate collaboration. With these methods, the company
              has had the opportunity to kick-start their business and work with
              the leading companies in Finland in insurance and health care
              business.
            </P>
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
            <H2>Scientific Advisory</H2>
            <P>
              Nyxo is deeply rooted in science and we constantly collaborate
              with the leading sleep researchers, in order to build the best
              possible products for improving sleep and well-being.
            </P>
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
          <H2>Join Us!</H2>

          <P>
            We’re a small team but growing quickly. As an early team member,
            you’ll have an outsized impact on what we build and how we build it.
            If you’re interested, we’d love to hear from you.
          </P>
          <Perks>
            {perks.map((perk) => (
              <Perk key={perk.title}>
                <h3>{perk.title}</h3>
                <P>{perk.text}</P>
              </Perk>
            ))}
          </Perks>
        </JoinUs>

        <InstagramFeaturette />
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

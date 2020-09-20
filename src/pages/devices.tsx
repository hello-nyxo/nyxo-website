import React, { FC } from "react"
import { graphql, PageProps, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/SEO/SEO"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Container } from "../components/Primitives"
import { kebabCase } from "lodash"
import { Icon } from "../components/Icons"
import { GatsbyImage } from "../../@types/childImageSharp"
import PageHeader from "../components/page/Header"
import DownloadLinks from "../components/Devices/DownloadLinks"

type Props = {
  deviceCover: GatsbyImage
  deviceList: Devices
}

type Devices = {
  name: string
  description: string
  icon: string
  viewbox: string
  fill: string
  stroke: string
  frontmatter: any
  nodes: any
}

const Devices: FC<PageProps<Props>> = ({
  location: { pathname },
  data: { deviceCover, deviceList },
}) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("DEVICES.TITLE")}
        description={t("COACHING.DESCRIPTION")}
        pathName={pathname}
        image=""
        staticImage={true}
      />

      <Container>
        <PageHeader
          title={t("DEVICES.TITLE")}
          subtitle={t("DEVICES.DESCRIPTION")}
          coverPhoto={deviceCover.childImageSharp.fluid}
        />

        <ConnectionInstructions>
          <H2>Connecting Your Device To The Nyxo App</H2>
          <P>
            To connect any of the devices listed below, simply open your Nyxo
            app and perform the following steps:
          </P>
          <ol>
            <Li>
              1. Go to the <Bold>Settings</Bold> tab.
            </Li>
            <Li>
              2. Click <Bold>Select tracking source</Bold>.
            </Li>
            <Li>3. Choose and enable your device. (ie. Oura, Garmin, etc)</Li>
            <Li>
              4. Follow the steps according to your device provider to allow
              Nyxo to access to your device.
            </Li>
            <Li>5. Nyxo will then collect your sleep data.</Li>
            <Li>6. Enjoy using the Nyxo app!</Li>
          </ol>

          <DownloadLinks />
        </ConnectionInstructions>

        <DeviceCardContainer>
          {deviceList.nodes.map(({ frontmatter }: Devices) => {
            return (
              // <DeviceCard
              //   key={frontmatter.title}
              //   to={`/devices/${kebabCase(frontmatter.title)}`}>
              <DeviceCard key={frontmatter.title}>
                <Icon
                  height="100px"
                  width="100px"
                  name={frontmatter?.icon}
                  stroke={frontmatter.stroke}
                  viewBox={frontmatter.viewbox}
                  fill={frontmatter.fill}
                />
                <h3>{frontmatter.title}</h3>
                <DeviceDescription>{frontmatter.description}</DeviceDescription>
              </DeviceCard>
            )
          })}
        </DeviceCardContainer>
      </Container>
    </Layout>
  )
}

export default Devices

export const pageQuery = graphql`
  query DevicePageQuery {
    site {
      siteMetadata {
        title
      }
    }

    deviceList: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/devices/" } }
    ) {
      nodes {
        frontmatter {
          slug
          icon
          title
          fill
          stroke
          viewbox
          description
        }
      }
    }

    deviceCover: file(name: { regex: "/device-cover/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

const DeviceCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 50px;
  justify-content: space-between;
`
// const DeviceCard = styled(Link)` //switch to link when content has been added to the device pages
const DeviceCard = styled.div`
  border-radius: 10px;
  flex-basis: 27%;
  padding: 30px;
  margin-bottom: 30px;
  color: var(--textPrimary);
  box-shadow: var(--shadow);
  text-align: center;

  &:hover {
    color: var(--textPrimary);
  }

  @media (max-width: 600px) {
    flex-basis: 90%;
  }
`

const ConnectionInstructions = styled.div`
  margin: auto;
  width: 60%;
  background-color: var(--morning);
  border-radius: 15px;
  padding: 20px;

  @media (max-width: 600px) {
    width: 90%;
  }
`
const H2 = styled.h2`
  text-align: center;
  color: var(--morningAccent);
`
const P = styled.p`
  margin-bottom: 30px;
`
const Li = styled.li`
  margin-bottom: 10px;
`
const Bold = styled.b`
  font-weight: 700;
`
const DeviceDescription = styled.p`
  line-height: 26px;
`

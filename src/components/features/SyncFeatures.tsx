import React, { FC } from "react"
import styled, { keyframes, css } from "styled-components"
import { H3 } from "../Html/HtmlContent"
import { P } from "../Primitives"
import Image from "gatsby-image"
import { Icon } from "../Icons"
import colors from "../../colors"
import { useStaticQuery, graphql } from "gatsby"
import { useTrail, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

const config = { mass: 5, tension: 2000, friction: 200 }

export const SyncFeatures: FC = () => {
  const {
    googleFit: {
      childImageSharp: { fluid: googleFitFluid },
    },
    withings: {
      childImageSharp: { fluid: withingsFluid },
    },
    garmin: {
      childImageSharp: { fluid: garminFluid },
    },
    polar: {
      childImageSharp: { fluid: polarFluid },
    },
    oura: {
      childImageSharp: { fluid: ouraFluid },
    },
  } = useStaticQuery(graphql`
    {
      googleFit: file(name: { regex: "/google-fit-icon/" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      withings: file(name: { regex: "/withings-icon/" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      garmin: file(name: { regex: "/garmin-icon/" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      polar: file(name: { regex: "/polar-icon/" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      oura: file(name: { regex: "/oura-icon/" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  `)
  const sources = [
    { name: "Oura", icon: ouraFluid },
    { name: "Google Fit", icon: googleFitFluid },
    { name: "Withings", icon: withingsFluid },
    { name: "Garmin", icon: garminFluid },
    { name: "Polar", icon: polarFluid },
  ]

  const [ref, inView] = useInView({
    threshold: 0,
  })
  const trail = useTrail(sources.length, {
    config,
    transform: `scale(${inView ? 1.2 : 1})`,
  })
  console.log(sources)
  return (
    <Container ref={ref}>
      <Column>
        <SourceList>
          {trail.map(({ opacity }, index) => (
            <SourceCard key={sources[index].name} style={{ opacity }}>
              <TitleRow>
                <AppIcon fluid={sources[index].icon} />
                <SourceName>{sources[index].name}</SourceName>
              </TitleRow>
              <Row>
                <Tag>
                  <DeviceIcon name="ios" />
                  IOS
                </Tag>
                <Tag>
                  <DeviceIcon name="android" />
                  Android
                </Tag>
              </Row>
            </SourceCard>
          ))}
        </SourceList>
      </Column>
      <Column>
        <Title>No need to buy a new sleep tracker</Title>
        <P>
          Import your data from your existing sleep tracker. If you do not own a
          sleep tracker, you can also use Nyxo’s built in sleep diary feature to
          track your sleep.
        </P>
        <List>
          <ListItem>
            <CheckIcon name="check" height="18" width="18" />
            Connect with Apple Health, Google Fit, Fitbit, Oura and many more
          </ListItem>
          <ListItem>
            <CheckIcon name="check" height="18" width="18" />
            Easily switch between sources
          </ListItem>
          <ListItem>
            <CheckIcon name="check" height="18" width="18" />
            Backup your data from different sources to Nyxo Cloud
          </ListItem>
        </List>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5rem 0rem;
`

const Title = styled(H3)`
  margin: 0 0 2rem 0;
`

const Column = styled.div`
  flex: 1;
`

const List = styled.ul``

const ListItem = styled.li`
  font-size: 1.15rem;
  line-height: 3rem;
`

const CheckIcon = styled(Icon).attrs(() => ({
  fill: colors.afternoonAccent,
  stroke: "none",
  viewBox: `0 0 ${25} ${25}`,
}))`
  margin: 0 1rem 0 0;
  background-color: ${colors.afternoon};
  padding: 0.5rem;
  border-radius: 0.4rem;
`

const move = keyframes`
 0% {transform: translateY(0)}
 100% {transform: translateY(-20000%)}
`

const SourceCard = styled(animated.div)`
  box-shadow: var(--shadow);
  background-color: var(--secondaryBg);
  padding: 1rem;
  z-index: 10;
  position: relative;
  margin: 1rem 0rem;
  border-radius: 0.5rem;
  animation: ${move} 30s linear infinite;
`

const AppIcon = styled(Image)`
  height: 2rem;
  width: 2rem;
  border-radius: 0.4rem;
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SourceName = styled.h6`
  margin: 0 0 0 1rem;
  font-size: 1rem;
  text-transform: capitalize;
`

const SourceList = styled.div`
  transition: 0.5s filter ease-in-out, 0.5s transform ease-in-out;
  max-width: 300px;
  transform: rotate(-5deg);
  padding: 1rem;
  position: relative;
  overflow: ;

  &:after {
    content: "";
    position: absolute;
    background-color: ${colors.afternoon};
    height: 30rem;
    border-radius: 30rem;
    width: 30rem;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
  }

  &:hover {
    ${SourceCard} {
      filter: blur(3px);
      transition: 0.5s filter ease-in-out, 0.5s transform ease-in-out;
      &:hover {
        filter: blur(0);
        transform: scale(1.1);
      }
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.4rem;
`

const Tag = styled.span`
  font-size: 0.7rem;
  margin-right: 0.5rem;
  font-weight: 600;
  border-radius: 0.3rem;
  background-color: ${colors.morning};
  color: ${colors.morningAccent};
  padding: 0.4rem;
  text-transform: uppercase;
`

const DeviceIcon = styled(Icon).attrs(() => ({
  height: 20,
  width: 20,
  stroke: "none",
  fill: "currentColor",
}))``

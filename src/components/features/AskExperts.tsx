import React, { FC } from "react"
import styled, { keyframes, css } from "styled-components"
import { P, H2 } from "../Html/HtmlContent"
import Image from "gatsby-image"
import { Icon } from "../Icons"
import colors from "../../colors"
import { useStaticQuery, graphql } from "gatsby"
import { useTrail, animated } from "react-spring"
import { useInView } from "react-intersection-observer"
import devices from "../../devices"

export const AskExperts: FC = () => {
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
  ]

  const [ref, inView] = useInView({
    threshold: 0.6,
  })
  const trail = useTrail(sources.length, {
    transform: `scale(${inView ? 1 : 0.8})`,
  })

  return (
    <Container ref={ref}>
      <LeftColumn>
        <Sources>
          <SourceList>
            {trail.map(({ transform }, index) => (
              <SourceCard key={sources[index].name} style={{ transform }}>
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
        </Sources>
      </LeftColumn>
      <Column>
        <Title>Works With Every Sleep Tracker</Title>
        <P>
          There&apos;s no need to buy a new sleep tracker to use Nyxo, as we
          support importing data from practically every sleep tracker on the
          market. You can also use Nyxo without a tracker at all!
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
  align-items: center;
  margin: 5rem 0rem;

  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`

const Title = styled(H2)`
  margin: 0 0 2rem 0;
`

const Column = styled.div`
  flex: 1;
`

const LeftColumn = styled(Column)`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const SourceCard = styled(animated.div)`
  box-shadow: var(--shadow);
  background-color: var(--secondaryBg);
  padding: 1rem;
  z-index: 10;
  position: relative;
  margin: 1rem 0rem;
  border-radius: 0.5rem;
  min-width: 15rem;
`

const AppIcon = styled(Image)`
  height: 1.5em;
  width: 1.5rem;
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

const Sources = styled.div`
  position: relative;
  z-index: 1;
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
`

const SourceList = styled.div`
  transition: 0.5s filter ease-in-out, 0.5s transform ease-in-out;
  max-width: 300px;
  transform: rotate(-5deg);
  padding: 1rem;
  position: relative;

  height: 30rem;
  z-index: 4;

  &:hover {
    ${SourceCard} {
      filter: blur(3px);
      transition: 0.5s filter ease-in-out, 0.5s transform ease-in-out;
      &:hover {
        filter: blur(0);
        transform: scale(1.2) !important;
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
  font-size: 0.6rem;
  margin-right: 0.5rem;
  font-weight: 600;
  border-radius: 0.3rem;
  background-color: ${colors.morning};
  color: ${colors.morningAccent};
  padding: 0.2rem 0.6rem;
  text-transform: uppercase;
`

const DeviceIcon = styled(Icon).attrs(() => ({
  height: 20,
  width: 20,
  stroke: "none",
  fill: "currentColor",
}))``

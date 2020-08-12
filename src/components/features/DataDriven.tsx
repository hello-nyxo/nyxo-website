import React, { FC, useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { P, H2 } from "../Html/HtmlContent"
import Image from "gatsby-image"
import { Icon } from "../Icons"
import colors from "../../colors"
import { useStaticQuery, graphql } from "gatsby"
import {
  useTrail,
  animated,
  useTransition,
  useSpring,
  useSprings,
} from "react-spring"
import { useInView } from "react-intersection-observer"
import devices from "../../devices"
import { shuffle } from "lodash"

const exampleWeights = {
  duration: 75,
  jetlag: 59,
  consistency: 60,
  efficiency: 75,
}

export const calculateMatchScore = (
  userWeights: Weights,
  lessonWeights: Weights
): number => {
  let sum = 0,
    totalParams = 0

  Object.keys(userWeights).forEach((key) => {
    sum += ((1 - Object(userWeights)[key]) * Object(lessonWeights)[key]) / 100
    totalParams += 1
  })

  return sum / totalParams
}

export const DataDrivenDemo: FC = () => {
  const {
    allContentfulLessonEN: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulLessonEN: allContentfulLesson(
        filter: { node_locale: { eq: "en-US" } }
        limit: 5
      ) {
        nodes {
          ...LessonFragment
          weights {
            efficiency
            duration
            consistency
            jetlag
          }
        }
      }
    }
  `)

  const sorted = nodes.sort((lessonA, lessonB) => {
    return (
      calculateMatchScore(lessonA.weights, exampleWeights) -
      calculateMatchScore(lessonB.weights, exampleWeights)
    )
  })

  const [efficiency, setEfficiency] = useState(0)

  const [rows, set] = useState(sorted)
  let height = 0

  const handleChange = (event) => {
    const weights = {
      ...exampleWeights,
      efficiency: Math.floor(Math.random() * (100 - 0 + 1) + 0),
      duration: Math.floor(Math.random() * (100 - 0 + 1) + 0),
      consistency: parseInt(event.target.value),
    }
    setEfficiency(event.target.value)
    const array = nodes.sort((lessonA, lessonB) => {
      return (
        calculateMatchScore(lessonA.weights, weights) -
        calculateMatchScore(lessonB.weights, weights)
      )
    })
    console.log(array)
    set(array)
    console.log(weights)
  }

  console.log(nodes)

  const transitions = useTransition(
    rows.map((node) => ({
      ...node,
      y: (height += 100) - 100,
    })),
    (d) => d.lessonName,
    {
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  )

  useEffect(() => void setInterval(() => set(shuffle), 2000), [])

  const values = useSprings(4, (index) => ({
    loop: true,
    from: { value: 50 },
    to: { value: Math.floor(Math.random() * (100 - 0 + 1) + 0) },
  }))

  return (
    <Container>
      <Column>
        <Title>Data-Driven Sleep Coaching</Title>
        <P>
          Nyxo uses your sleep data to personalize the coaching to fit your
          needs. Using your sleep data we calculate the metrics such as the ones
          below, and use that to determine the right coaching materials for you!
        </P>
        <List>
          <ListItem>
            <CheckIcon name="efficiency" height="18" width="18" />
            <Type>Efficiency</Type>
            <Range type="range" value={values[1]} />
          </ListItem>
          <ListItem>
            <CheckIcon name="socialJetLag" height="18" width="18" />
            <Type>Social Jet Lag</Type>
            <Range type="range" value={values[1]} />
          </ListItem>
          <ListItem>
            <CheckIcon name="clockBold" height="18" width="18" />
            <Type>Duration</Type>
            <Range type="range" value={values[2]} />
          </ListItem>
          <ListItem>
            <CheckIcon name="consistency" height="18" width="18" />
            <Type>Consistency</Type>
            <Range type="range" value={values[3]} />
          </ListItem>
        </List>
      </Column>
      <Column>
        <Sources>
          <SourceList>
            {transitions.map(
              ({ item: lesson, props: { y, ...rest }, key }, index) => (
                <Lesson
                  key={key}
                  style={{
                    zIndex: nodes.length - index,
                    transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
                    ...rest,
                  }}>
                  <Cover fluid={lesson.cover.fluid} />
                  <Column>
                    <div>{lesson.lessonName}</div>
                    <Author>Pietari Nurmi</Author>
                  </Column>
                </Lesson>
              )
            )}
          </SourceList>
        </Sources>
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
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
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

const Sources = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 300px;
  padding: 1rem;
  position: relative;
  width: 100%;

  height: 30rem;
  z-index: 4;
`

const Range = styled(animated.input)`
  justify-self: flex-end;
  appearance: none;
  margin-left: 1rem;
  width: 20rem;
  height: 1rem;
  border-radius: 1rem;
  background: var(--bg);
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1rem;
    width: 1rem;
    background: var(--radiantBlue);
    border-radius: 1rem;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 1rem;
    width: 1rem;
    background: var(--radiantBlue);
    border-radius: 1rem;
    cursor: pointer;
  }
`

export type Weights = {
  consistency: number
  duration: number
  efficiency: number
  jetlag: number
}

const Lesson = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: row;
  will-change: transform, height, opacity;
  width: 100%;
  height: 60px;
  box-shadow: var(--shadow);
  padding: 1rem;
  background-color: var(--secondaryBg);
  border-radius: 0.5rem;
`

const Author = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--textSecondary);
`

const Cover = styled(Image)`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`

const Type = styled.div`
  width: 10rem;
`

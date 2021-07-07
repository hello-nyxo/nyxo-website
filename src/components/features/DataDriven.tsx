import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { ChangeEvent, FC, useState } from "react"
import { animated, interpolate, useSprings, useTransition } from "react-spring"
import styled from "styled-components"
import {
  ContentfulLesson,
  ContentfulLessonWeightsJsonNode,
} from "../../../graphql-types"
import colors from "../../colors"
import devices from "../../devices"
import { H2, H3, P } from "../Html/HtmlContent"
import { Icon } from "../Icons"

const exampleWeights = {
  duration: 75,
  jetlag: 59,
  consistency: 60,
  efficiency: 75,
}

const sort = (lessons: Array<ContentfulLesson>, weights: Weights) => {
  return lessons.sort(
    (lessonA: ContentfulLesson, lessonB: ContentfulLesson) => {
      return (
        calculateMatchScore(weights, lessonA.weights) -
        calculateMatchScore(weights, lessonB.weights)
      )
    }
  )
}

export const calculateMatchScore = (
  userWeights: Weights | null = {
    ...exampleWeights,
  },
  lessonWeights?: ContentfulLessonWeightsJsonNode | null
): number => {
  let sum = 0,
    totalParameters = 0

  Object.keys(userWeights as Weights).forEach((key) => {
    sum += ((1 - Object(userWeights)[key]) * Object(lessonWeights)[key]) / 100
    totalParameters += 1
  })

  return sum / totalParameters
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
          lessonWeights: weights {
            efficiency
            duration
            consistency
            jetlag
          }
        }
      }
    }
  `)
  const [weights, setWeights] = useState(exampleWeights)
  const [rows, set] = useState(sort(nodes, weights))
  let height = 0

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event
    setWeights({
      ...weights,
      [name]: parseInt(value),
    })
    set(sort(nodes, weights))
  }

  const transitions = useTransition(
    rows.map((node: ContentfulLesson) => ({
      ...node,
      y: (height += 100) - 100,
    })),
    (d) => d.lessonName as string,
    {
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  )

  // useEffect(() => void setInterval(() => set(shuffle), 2000), [])

  const [springs] = useSprings(4, () => ({
    loop: true,
    from: { value: Math.floor(Math.random() * (100 - 0 + 1) + 0) },
    to: { value: Math.floor(Math.random() * (100 - 0 + 1) + 0) },
  }))

  // console.log(springs)

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
            <Range
              type="range"
              name="efficiency"
              onChange={handleChange}
              value={weights["efficiency"]}
            />
          </ListItem>
          <ListItem>
            <CheckIcon name="socialJetLag" height="18" width="18" />
            <Type>Social Jet Lag</Type>
            <Range
              name="jetlag"
              onChange={handleChange}
              type="range"
              value={weights["jetlag"]}
            />
          </ListItem>
          <ListItem>
            <CheckIcon name="clockBold" height="18" width="18" />
            <Type>Duration</Type>
            <Range
              type="range"
              name="duration"
              onChange={handleChange}
              value={weights["duration"]}
            />
          </ListItem>
          <ListItem>
            <CheckIcon name="consistency" height="18" width="18" />
            <Type>Consistency</Type>
            <Range
              type="range"
              name="consistency"
              onChange={handleChange}
              value={weights["consistency"]}
            />
          </ListItem>
          <ListItem>
            <Footnote>
              Nyxo app uses additional metrics calculated from your sleep data
              as well as tag and catergory based grouping. Learn more about the
              content suggestion from the Coaching page.
            </Footnote>
          </ListItem>
        </List>
      </Column>
      <Column>
        <Sources>
          <SourceList>
            {transitions.map(
              (
                { item: { cover, lessonName }, props: { y, ...rest }, key },
                index
              ) => (
                <Lesson
                  key={key}
                  style={{
                    zIndex: nodes.length - index,
                    transform: interpolate(
                      [y],
                      (y) => `translate3d(0,${y}px,0)`
                    ),
                    ...rest,
                  }}>
                  <Cover fluid={cover?.fluid as FluidObject} />
                  <CardInfo>
                    <LessonName>{lessonName}</LessonName>
                    <div>
                      <Tag>Lesson</Tag>
                      <Author>Pietari Nurmi</Author>
                    </div>
                  </CardInfo>
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
  margin: 10rem 0rem;

  @media ${devices.mobileL} {
    flex-direction: column;
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
  @media ${devices.mobileL} {
    flex: 1 100%;
    width: 100%;
  }
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
    background: white;
    border-radius: 2rem;
    box-sizing: content-box;
    border: 0.2rem solid var(--radiantBlue);
    cursor: pointer;
    box-shadow: var(--shadow);
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

const Author = styled.span`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--textSecondary);
`

const Cover = styled(Image)`
  height: 3rem;
  width: 3rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`

const Type = styled.div`
  width: 10rem;
`

const Weight = styled.span`
  font-size: 0.7rem;
  background-color: ${colors.afternoon};
  color: ${colors.afternoonAccent};
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  display: inline-block;
  margin: 0.5rem 0.2rem 0rem;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Tag = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
  background-color: ${colors.afternoon};
  color: ${colors.afternoonAccent};
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  display: inline;
  text-transform: uppercase;
  margin: 0 1rem 0.5rem 0rem;
`

const LessonName = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1rem;
  margin-bottom: 0.8rem;
`

const Footnote = styled(P)`
  margin-top: 1rem;
  font-size: 0.8rem;
  line-height: 1.2rem;
`

import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulWeek } from "../../../graphql-types"
import colors from "../../colors"
import { Icon } from "../Icons"
import { device } from "../Primitives"

type Props = {
  path: string
  week: ContentfulWeek
}

const WeekCard: FC<Props> = ({ week, path }) => {
  const countHabits: number = week.lessons.reduce(
    (accumulator: numbet, currentValue: number) =>
      accumulator +
      parseInt(currentValue.habit ? currentValue.habit?.length : 0),
    0
  )

  return (
    <Card to={path}>
      <Cover>
        <CoverPhoto fluid={week.coverPhoto?.fluid as FluidObject} />
      </Cover>
      <Bottom>
        <Name>{week.weekName}</Name>
        <Description>{week.intro}</Description>

        <InformationRow>
          <Lessons>
            <Icon height="20px" width="20px" name="presentation" />
            {week?.lessons?.length} Lessons
          </Lessons>
          {!!countHabits && (
            <Habits>
              <Icon height="20px" width="20px" name="task" />
              {countHabits > 1 ? `${countHabits} Habits` : ""}
            </Habits>
          )}
        </InformationRow>
      </Bottom>
    </Card>
  )
}

export default WeekCard

const Card = styled(Link)`
  box-sizing: border-box;
  display: flex;
  margin: 1rem 0.5rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 0.5rem;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
  @media ${device.desktopL} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: calc(100% - 2 * 0.5rem);
    flex: 1 1 calc(100% - 2 * 0.5rem);
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`

const Cover = styled.div`
  width: 100%;
  min-height: 8rem;
  max-height: 10rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;
`

const CoverPhoto = styled(Image)`
  height: 100%;
  width: 100%;
  object-position: center center;
  object-fit: cover;
`

const Bottom = styled.div`
  padding: 1rem;
  flex: 1;
  font-family: inherit;
`

const Name = styled.h3`
  margin: 0rem 0rem 0.5rem 0rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--radiantBlue);
`

const Description = styled.span`
  font-size: 1rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: ${colors.textDark};
`

const InformationRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;
  box-sizing: content-box;
`
const Lessons = styled.span`
  background-color: #f6f8ff;
  margin: 0rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`
const Habits = styled.span`
  background-color: var(--lightGreen);
  color: var(--green);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`

import { Link } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { device } from "../Primitives"
import { Icon } from "../Icons"
import Image, { FluidObject } from "gatsby-image"
import colors from "../../colors"
import { ContentfulLesson } from "../../../graphql-types"
import LikeButton from "../LikeButton/likeButton"

type Props = {
  key: string
  name: string
  path: string
  duration: number
  intro: string
  lessons: ContentfulLesson[]
  coverPhoto: FluidObject
  slug: string
  excerpt: string
  bookmarked?: any | null
}

const WeekCard: FC<Props> = ({
  lessons,
  name,
  coverPhoto,
  path,
  intro,
  slug,
  bookmarked,
}) => {
  const countHabits: number = lessons.reduce(
    (accumulator: number, currentValue: number) =>
      accumulator +
      parseInt(currentValue.habit ? currentValue.habit?.length : 0),
    0
  )

  return (
    <Card to={path}>
      <Cover>
        <CoverPhoto fluid={coverPhoto} />
        <LikeButton
          name={name}
          type="week"
          slug={slug}
          bookmarked={bookmarked}
        />
        <InformationRow>
          <Lessons>
            <Icon
              height="20px"
              width="20px"
              name="presentation"
              stroke="currentColor"
            />
            {lessons.length} Lessons
          </Lessons>
          {!!countHabits && (
            <Habits>
              <Icon
                height="20px"
                width="20px"
                name="task"
                stroke="currentColor"
              />
              {countHabits > 1 && `${countHabits} Habits`}
            </Habits>
          )}
        </InformationRow>
      </Cover>
      <Bottom>
        <Name>{name}</Name>
        <Description>{intro}</Description>
      </Bottom>
    </Card>
  )
}

export default WeekCard

const Card = styled(Link)`
  box-sizing: border-box;
  display: flex;
  margin: 1rem 1rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 1rem;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }

  @media ${device.desktopL} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
  }

  @media ${device.desktop} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 1rem);
    flex: 1 1 calc(50% - 2 * 1rem);
  }

  @media ${device.tabletL} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
  }

  @media ${device.tablet} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
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
  position: relative;
  width: 100%;
  min-height: 10rem;
  max-height: 12rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  overflow: hidden;
`

const CoverPhoto = styled(Image)`
  height: 100%;
  width: 100%;
`

const Bottom = styled.div`
  padding: 1rem;
  flex: 1;
  font-family: inherit;
`

const Name = styled.h3`
  margin: 0rem 0rem 1rem 0rem;
  font-weight: 500;
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.5rem;
  box-sizing: border-box;
  background: linear-gradient(
    rgba(23, 22, 22, 0),
    rgba(29, 28, 28, 0.5607843137254902)
  );
`
const Lessons = styled.span`
  font-size: 0.9rem;
  margin-right: 1rem;
  color: white;
`
const Habits = styled.span`
  font-size: 0.9rem;
  color: white;
`

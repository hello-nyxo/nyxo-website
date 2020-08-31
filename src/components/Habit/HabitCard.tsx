import React, { FC } from "react"
import styled from "styled-components"
import { getIcon } from "../../Helpers/IconHelper"
import { truncate } from "../../Helpers/string-truncater"
import { Icon } from "../Icons"
import { device } from "../Primitives"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

type Props = {
  period?: string | null
  title?: string | null
  slug?: string | null
  link?: boolean
  excerpt?: string | null
}

const HabitCard: FC<Props> = ({
  slug,
  title,
  period = "morning",
  excerpt = "",
  link,
}) => {
  const icon = getIcon(period)
  const { t } = useTranslation()
  const content = (
    <Container>
      <Stripe $color={icon.secondaryColor} $accentColor={icon.color} />
      <Column>
        <Period style={{ color: `${icon.color}` }}>
          <Icon
            name={icon.name}
            height="25px"
            width="25px"
            stroke={icon.color}
          />
          {t(period)}
        </Period>
        <Title data-testid="habit-title">{title}</Title>
        <Excerpt>{truncate(excerpt, 100, true)}</Excerpt>
      </Column>
    </Container>
  )
  return (
    <Card $accentColor={icon.color}>
      {link ? <Link to={`${slug}`}>{content}</Link> : content}
    </Card>
  )
}

export default HabitCard

type IconProps = {
  $color?: string
  $accentColor: string
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Stripe = styled.div<IconProps>`
  margin-right: 1rem;
  padding: 0.5rem;
  background-color: ${({ $color }) => $color};
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
`

const Card = styled.div<IconProps>`
  padding: 1rem;
  margin: 1rem 0.5rem;
  display: flex;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;
  flex-direction: row;
  background-color: var(--secondaryBg);
  border-radius: 0.5rem;
  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-2px);

    ${Stripe} {
      background-color: ${({ $accentColor }) => $accentColor};
    }
  }

  @media ${device.desktopL} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
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

const Period = styled.span`
  font-size: 0.8rem;
  font-family: var(--medium);
  font-style: normal;
`

const Title = styled.h4`
  margin: 0;
  font-family: var(--semibold);
  font-weight: bold;
  font-style: normal;
`
const Column = styled.div``

const Excerpt = styled.p`
  font-size: 0.9rem;
  color: var(--textSecondary);
  line-height: 22px;
`

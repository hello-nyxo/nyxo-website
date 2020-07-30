import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulHabit } from "../../graphql-types"
import HabitCard from "../components/Habit/HabitCard"
import HtmlContent, { H1, H3, H4 } from "../components/Html/HtmlContent"
import { Icon } from "../components/Icons"
import Layout from "../components/layout"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { getLocalizedPath } from "../Helpers/i18n-helpers"
import { getIcon } from "../Helpers/IconHelper"

type Props = {
  contentfulHabit: ContentfulHabit
  nextHabit: ContentfulHabit
  previousHabit: ContentfulHabit
}

const Habit: FC<PageProps<Props>> = ({ data, location: { pathname } }) => {
  const { contentfulHabit: habit, nextHabit, previousHabit } = data
  const icon = getIcon(habit.period)

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={habit.title}
        description={habit.description?.fields?.excerpt as string}
      />

      <Container>
        <Type>Habit</Type>
        <Title>{habit.title}</Title>
        <Period style={{ color: `${icon.color}` }}>
          <Icon
            name={icon.name}
            height="25px"
            width="25px"
            stroke={icon.color}
          />
          {habit.period}
        </Period>

        <LessonContainer>
          <H3>Description</H3>
          <HtmlContent document={habit.description?.json} />

          {habit.lesson?.habit?.map((habit: ContentfulHabit) => (
            <HabitCard
              key={habit.slug}
              link
              period={habit.period}
              title={habit.title}
              slug={habit.slug}
              excerpt={habit.description?.fields?.excerpt}
            />
          ))}
        </LessonContainer>

        <H4>More Habits to Explore</H4>
        <MoreHabitsContainer>
          {nextHabit && (
            <HabitCard
              link
              title={nextHabit.title}
              period={nextHabit.period}
              slug={getLocalizedPath(`/habit/${nextHabit.slug}`, "en-US")}
              excerpt={nextHabit.description?.fields?.excerpt}
            />
          )}

          {previousHabit && (
            <HabitCard
              link
              title={previousHabit.title}
              period={previousHabit.period}
              slug={getLocalizedPath(`/habit/${previousHabit.slug}`, "en-US")}
              excerpt={previousHabit.description?.fields?.excerpt}
            />
          )}
        </MoreHabitsContainer>
      </Container>
    </Layout>
  )
}

export default Habit

export const pageQuery = graphql`
  query HabitById(
    $slug: String!
    $locale: String!
    $next: String
    $previous: String
  ) {
    contentfulHabit(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...HabitFragment
    }
    nextHabit: contentfulHabit(slug: { eq: $next }) {
      ...HabitFragment
    }
    previousHabit: contentfulHabit(slug: { eq: $previous }) {
      ...HabitFragment
    }
  }
`

const LessonContainer = styled.div``

const Type = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  font-family: var(--medium);
  margin-top: 3rem;
  color: var(--textPrimary);
  display: inline-block;
  padding: 0.3rem;
  background-color: #f3f3f3;
  border-radius: 0.2rem;
  text-transform: uppercase;
`

const Period = styled.div``

const MoreHabitsContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -0.5rem 1rem;
`

const Title = styled(H1)`
  margin: 0;
`

import React, { FC } from "react"
import styled from "styled-components"
import HabitCard from "../Habit/HabitCard"
import { useQuery } from "react-query"
import { listHabits } from "../../graphql/queries"
import { graphqlOperation, API } from "aws-amplify"
import { GetHabitQuery, ListHabitsQuery } from "../../API"
import { H3 } from "../Html/HtmlContent"

type Habit = Omit<Exclude<GetHabitQuery["getHabit"], null>, "__typename">

const getHabits = async (): Promise<Array<Habit | null> | null | undefined> => {
  try {
    const response = (await API.graphql(graphqlOperation(listHabits, {}))) as {
      data: ListHabitsQuery
    }
    return response.data.listHabits?.items
  } catch (error) {
    console.warn(error)
    return undefined
  }
}

const UserHabits: FC = () => {
  const { isLoading, data, error } = useQuery("habits", () => getHabits())

  return (
    <>
      <H3>Habits</H3>
      <Habits>
        {data?.map((habit) => (
          <HabitCard
            key={habit?.id}
            title={habit?.title}
            period={habit?.period}
            excerpt={habit?.description}
          />
        ))}
      </Habits>
    </>
  )
}

export default UserHabits

const Habits = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`

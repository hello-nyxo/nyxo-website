import React, { FC, useMemo, useRef, useLayoutEffect } from "react"
import {
  addHours,
  subDays,
  differenceInMilliseconds,
  addMilliseconds,
  addMinutes,
  eachDayOfInterval,
  startOfDay,
  isWithinInterval,
  subHours,
} from "date-fns"
import { extent, min, max, scaleTime, ScaleTime } from "d3"
import styled from "styled-components"
import colors from "../../colors"
import XTicks from "./SleepChart/XTicks"
import YTicks from "./SleepChart/YTicks"

const { height, width } = { width: 600, height: 1500 }
export const barWidth = width / 12
export const paddingLeft = 100
export const paddingRight = 100
export const chartHeight = height / 3

type ChartProps = {
  data: []
}

const SleepChart: FC<ChartProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    ref.current?.scrollBy({ left: ref.current.offsetWidth })
  }, [])

  const { normalizedData } = useMemo(
    () => ({
      normalizedData: getNightAsDays(data),
    }),
    [data]
  )

  const daysToShow = normalizedData.length
  const chartWidth = (barWidth + 10) * daysToShow + paddingLeft + paddingRight

  const xDomain: Date[] = extent(
    normalizedData,
    (date) => new Date(date.date)
  ) as Date[]

  const yDomain: number[] = [
    min(normalizedData, (date) =>
      min(date.night, (night) =>
        subHours(new Date(night.startDate), 1).valueOf()
      )
    ) as number,
    max(normalizedData, (date) =>
      max(date.night, (night) => addHours(new Date(night.endDate), 1).valueOf())
    ) as number,
  ]

  const scaleX = scaleTime()
    .domain(xDomain)
    .range([paddingLeft, chartWidth - paddingRight])

  const scaleY = scaleTime()
    .domain(yDomain)
    .nice()
    .range([10, chartHeight - 80])

  const yTicks = scaleY.ticks(10)
  const xTicks = scaleX.ticks(daysToShow)

  return (
    <Container ref={ref}>
      <svg width={chartWidth} height={chartHeight}>
        <XTicks
          chartHeight={chartHeight}
          scaleX={scaleX}
          barWidth={barWidth}
          ticks={xTicks}
        />
        <SleepBars
          barWidth={barWidth}
          scaleX={scaleX}
          scaleY={scaleY}
          data={normalizedData}
        />

        <YTicks scaleY={scaleY} chartWidth={chartWidth} ticks={yTicks} />
      </svg>
    </Container>
  )
}

export default SleepChart

const Container = styled.div`
  overflow-x: scroll;
`

type Props = {
  data: {
    date: string
    night: Night[] & { startDate: number; endDate: number }
  }[]
  scaleX: ScaleTime<number, number>
  scaleY: ScaleTime<number, number>
  barWidth: number
}

const SleepBars: FC<Props> = ({ data, scaleX, scaleY, barWidth }) => {
  const { bars } = useMemo(
    () => ({
      bars: data.map((date) => {
        return date.night.map((night: Night) => {
          const y = scaleY(new Date(night.startDate).valueOf())
          const x = scaleX(new Date(date.date))
          const height =
            scaleY(new Date(night.endDate).valueOf()) -
            scaleY(new Date(night.startDate).valueOf())

          return (
            <g key={night.id}>
              <StyledRect
                x={x}
                width={barWidth}
                fillOpacity={0.7}
                rx={5}
                y={y}
                value={night.value}
                height={height}
              />
            </g>
          )
        })
      }),
    }),
    [data]
  )

  return <g>{bars}</g>
}

const StyledRect = styled.rect.attrs<{ value: Value }>(({ value }) => ({
  fill: value === Value.Asleep ? colors.radiantBlue : colors.inBedColor,
}))``

export enum Value {
  InBed = "INBED",
  Asleep = "ASLEEP",
  Awake = "AWAKE",
}

export type Night = {
  id: string
  source?: string
  sourceId: string
  sourceName: string

  value: Value
  startDate: string
  endDate: string
  totalDuration: number
}

const getNightAsDays = (nights: Night[]) => {
  const firstDate = min([...nights.map((night) => new Date(night.startDate))])
  const lastDate = max([...nights.map((night) => new Date(night.endDate))])

  const days = eachDayOfInterval({
    start: subDays(new Date(), 30),
    end: new Date(), // lastDate
  })

  return days.map((day) => ({
    date: day.toISOString(),
    night: nights
      .filter((night) => matchDayAndNight(night.startDate, day.toISOString()))
      .map((night) => {
        const startDifference = differenceInMilliseconds(
          new Date(night.startDate),
          startOfDay(new Date(day))
        )

        const newStartDate = addMilliseconds(
          startOfDay(new Date()),
          startDifference
        )

        const newEndDate = addMinutes(newStartDate, night.totalDuration)

        return {
          ...night,
          startDate: newStartDate.valueOf(),
          endDate: newEndDate.valueOf(),
        }
      }),
  }))
}

export function matchDayAndNight(night: string, day: string): boolean {
  const nightTime = new Date(night)
  const nightStart = subHours(startOfDay(new Date(day)), 12)
  const nightEnd = addHours(startOfDay(new Date(day)), 12)

  return isWithinInterval(nightTime, { start: nightStart, end: nightEnd })
}

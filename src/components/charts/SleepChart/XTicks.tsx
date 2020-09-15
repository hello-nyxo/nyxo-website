import { ScaleTime } from "d3"
import React, { memo, FC } from "react"
import styled from "styled-components"
import { format } from "date-fns/esm"
import { isWeekend } from "date-fns"

type Props = {
  scaleX: ScaleTime<number, number>
  chartHeight: number
  barWidth: number
  ticks: Date[]
}

const XTicks: FC<Props> = ({ scaleX, chartHeight, barWidth, ticks }) => {
  const tickElements = ticks.map((tick) => {
    const x = scaleX(tick) + barWidth / 2

    isWeekend(new Date(tick))
    return (
      <g key={`tick_${new Date(tick).toISOString()}`}>
        {/* {isWeekend(new Date(tick)) && (
          <rect
            fill="black"
            x={scaleX(tick)}
            y={0}
            height={chartHeight}
            width={barWidth}
          />
        )} */}
        <Day
          // fontFamily={fonts.medium}
          textAnchor="middle"
          x={x}
          y={chartHeight - 5}>
          {format(new Date(tick), "EEE")}
        </Day>
        <LongDate
          // fontFamily=""
          fontWeight="bold"
          textAnchor="middle"
          x={x}
          y={chartHeight - 20}>
          {format(new Date(tick), "dd")}
        </LongDate>
      </g>
    )
  })

  return <g>{tickElements}</g>
}

const Day = styled.text.attrs(({ theme }) => ({
  fill: "black",
}))``

const LongDate = styled.text.attrs(({ theme }) => ({
  fill: "black",
}))``

export default memo(XTicks)

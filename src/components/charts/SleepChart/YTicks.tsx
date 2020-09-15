import { ScaleTime } from "d3"
import { format } from "date-fns"
import React, { FC, memo } from "react"
import styled from "styled-components"

type Props = {
  chartWidth: number
  scaleY: ScaleTime<any, any>
  ticks: Date[]
}

const YTicks: FC<Props> = ({ ticks, chartWidth, scaleY }) => {
  return ticks.map((tick, index) => {
    return (
      <g key={index}>
        <line
          stroke="black"
          strokeWidth={0.25}
          x1={40}
          x2={chartWidth}
          y1={scaleY(tick)}
          y2={scaleY(tick)}
        />
        <StyledText
          alignmentBaseline="middle"
          key={index}
          x={5}
          y={scaleY(tick)}>
          {format(new Date(tick), "HH:mm")}
        </StyledText>
      </g>
    )
  })
}

export default memo(YTicks)

const StyledText = styled.text.attrs(() => ({
  fill: "black",
}))``

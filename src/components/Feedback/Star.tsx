import React from "react"
import { Icon } from "../Icons"
import colors from "../../colors"
import styled from "styled-components"

const Star = ({ selected = false, onClick = ({ f }: any) => f }) => (
  <StarContainer onClick={onClick}>
    <Icon
      width="40px"
      height="40px"
      viewBox="0 0 140 140"
      name="star"
      stroke={colors.radiantBlue}
      fill={selected ? colors.radiantBlue : "none"}
    />
  </StarContainer>
)

export default Star

const StarContainer = styled.div`
  display: inline-block;
  margin-top: 30px;
`

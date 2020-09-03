import React from "react"
import styled from "styled-components"
import { useGetAllFeedback } from "../../hooks/feedbackHooks"

interface Props {
  slug: string
  totalStars: number
}

const ProgressBar = (props: Props) => {
  const { slug, totalStars } = props

  const { data: allFeedbackData, isLoading } = useGetAllFeedback(slug)

  allFeedbackData?.map((item: any) => item.rating)

  const ratings: any = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  }

  const ratingsLength = allFeedbackData?.length

  allFeedbackData?.forEach((item: any) => {
    ratings[item.rating] = ratings[item.rating] + 1
  })

  return [...Array(totalStars)]
    .map((n, i) => (
      <Wrap key={i + 1}>
        <StarLabel>
          {i + 1} star {ratings[i + 1] > 0 && `(${ratings[i + 1]})`}
        </StarLabel>
        <ProgressBarContainer>
          <FeedbackProgressBar
            // style={{ width: (ratings[i + 1] / ratingsLength) * 100 + `%` }}
            style={{
              width:
                ratings[i + 1] > 0
                  ? (ratings[i + 1] / ratingsLength) * 100 + `%`
                  : 0 + `%`,
            }}
          />
        </ProgressBarContainer>
      </Wrap>
    ))
    .reverse()
}

export default ProgressBar

const ProgressBarContainer = styled.div`
  background-color: #d6d6d6;
  width: 60%;
  margin: 10px 0;
  display: inline-block;
`

const FeedbackProgressBar = styled.div`
  background-color: hsl(255deg, 85%, 30%);
  /* width: 40%; */
  height: 20px;
`
const StarLabel = styled.p`
  display: inline-block;
  margin-right: 10px;
`
const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

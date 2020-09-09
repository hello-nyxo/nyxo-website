import React from "react"
import styled from "styled-components"
import StarRating from "./StarRating"
import ProgressBar from "./ProgressBar"
import { device } from "../Primitives"

interface Props {
  slug: string
  type: string
}

const Feedback = (props: Props) => {
  const { slug, type } = props

  return (
    <FeedbackContainer>
      <FeedbackContent>
        <h2>Enjoying this {type} so far?</h2>
        <p>
          Rating this {type} helps the author to know which type of content you
          like. Giving 5 stars also makes them really happy.{" "}
        </p>

        <StarRating totalStars={5} slug={slug} />
      </FeedbackContent>
      <FeedbackRating>
        <ProgressBar totalStars={5} slug={slug} />
      </FeedbackRating>
    </FeedbackContainer>
  )
}

export default Feedback

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #f5f5f5;
  padding: 20px 10px;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
  }
`

const FeedbackContent = styled.div`
  flex-basis: 60%;
  margin-left: 20px;
`

const FeedbackRating = styled.div`
  flex-basis: 40%;
  padding: 0px 30px;

  @media ${device.mobileL} {
    width: 80%;
    padding: 0px;
    margin-top: 15px;
  }
`

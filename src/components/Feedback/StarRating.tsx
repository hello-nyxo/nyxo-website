import React, { useState, useEffect } from "react"
import Star from "./Star"
import styled from "styled-components"
import {
  useGetFeedback,
  useAddFeedback,
  useUpdateFeedback,
} from "../../hooks/feedbackHooks"

interface Props {
  slug: string
  totalStars: number
}

const StarRating = (props: Props) => {
  const { slug, totalStars } = props

  const [addFeedback, { isLoading: addFeedbackLoading }] = useAddFeedback()

  const [
    updateFeedback,
    { isLoading: updateFeedbackLoading },
  ] = useUpdateFeedback()

  const {
    data: { feedback, id: feedbackId, rating: articleRating },
    status: feedbackStatus,
  } = useGetFeedback(slug as string, "lesson")

  const [starsSelected, selectStar] = useState(0)

  useEffect(() => {
    if (articleRating !== null || articleRating !== "undefined") {
      selectStar(articleRating)
    }
  }, [articleRating])

  const handleFeedback = (i: number, feedback: boolean) => async () => {
    if (feedback === true) {
      await updateFeedback({
        id: feedbackId,
        rating: i + 1,
      })
    } else {
      await addFeedback({
        slug: slug,
        type: "lesson",
        rating: i + 1,
      })
    }
    selectStar(i + 1)
  }

  return (
    <>
      <StarRatingContainer>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={handleFeedback(i, feedback)}
          />
        ))}
      </StarRatingContainer>
      <FeedbackSuccess>
        {feedback && "Success! Thank you for your rating!"}
      </FeedbackSuccess>
    </>
  )
}

export default StarRating

const StarRatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`

const FeedbackSuccess = styled.p`
  color: var(--radiantBlue);
  margin-top: 10px;
`

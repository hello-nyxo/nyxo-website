import React, { useState } from "react"
import styled from "styled-components"
import { useAddComment, useGetAllComments } from "../../hooks/commentsHooks"
import Moment from "moment"

interface Props {
  slug: string
  type: string
}

const Comments = (props: Props) => {
  const { slug, type } = props

  const [add, isLoading] = useAddComment()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [guest, setGuest] = useState(false)
  const [comment, setComment] = useState("")
  const [checked, setChecked] = useState(false)

  const {
    data: allCommentData,
    status: allCommentStatus,
  }: any = useGetAllComments(slug)

  const handleGuest = () => {
    checked ? setGuest(false) : setGuest(true)
    setFirstName("")
    setLastName("")

    // then disable the first/last name inputs
  }

  const handleComments = async () => {
    await add({
      slug: slug,
      type: type,
      firstName: firstName,
      lastName: lastName,
      comment: comment,
      guest: guest,
    })
  }

  return (
    <>
      <H2>Share Your Thoughts</H2>
      <P>
        Your comments matter to us. Feel free to share any thoughts, opinions,
        or simply engage in conversation.
      </P>
      <Container>
        <Input
          name="firstName"
          placeholder="First name"
          onChange={(e: any) => {
            setFirstName(e.target.value)
          }}
        />
        <Input
          name="lastName"
          placeholder="Last name"
          onChange={(e: any) => {
            setLastName(e.target.value)
          }}
        />
        <input
          name="guest"
          type="checkbox"
          onChange={(e) => {
            setChecked(e.target.checked)
            handleGuest()
          }}
          checked={checked}
        />
        <label htmlFor="guest">I wish to be anonymous.</label>

        {/* add email? */}
        <Comment
          name="comments"
          placeholder="Write your comment..."
          onChange={(e: any) => {
            setComment(e.target.value)
          }}
        />
        {isLoading.status === "loading" ? (
          <Button disabled onClick={handleComments}>
            Add Comment
          </Button>
        ) : (
          <Button onClick={handleComments}>Add Comment</Button>
        )}

        <CommentContainer>
          <h3>Comments For This {type}</h3>
          <ul>
            {allCommentData?.map((item: any) => {
              return (
                <Li key={item.id}>
                  <Name>
                    {item.firstName} {item.lastName}
                  </Name>
                  <Date>
                    &nbsp; - &nbsp;{Moment(item.createdAt).format("d/MM/YYYY")}
                  </Date>

                  <Text>{item.comment}</Text>
                </Li>
              )
            })}
          </ul>
        </CommentContainer>
      </Container>
    </>
  )
}

export default Comments

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
`

const H2 = styled.h2`
  text-align: center !important;
  color: hsl(255deg, 85%, 30%);
`

const P = styled.p`
  text-align: center;
`

const Input = styled.input`
  display: inline-block;
  flex-basis: 35%;
  margin: 30px auto;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;

  &:focus {
    outline-color: var(--radiantBlue);
  }
`

const Comment = styled.textarea`
  flex-basis: 100%;
  margin: 30px auto;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  height: 200px;
  font-family: "Montserrat", sans-serif;

  &:focus {
    outline-color: var(--radiantBlue);
  }
`
const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: var(--radiantBlue);
  color: white;
  margin: auto;

  &:hover {
    cursor: pointer;
  }
`
const CommentContainer = styled.div`
  margin-top: 100px;
  padding: 20px 50px;
  box-shadow: rgb(213, 210, 208) 5px 5px 15px, rgb(255, 255, 255) -5px -5px 15px;
  border-radius: 5px;
  width: 100%;
`
const Li = styled.li`
  border-bottom: 1px solid #e9e9e9;
  padding: 20px 0px;
`
const Text = styled.p`
  margin: 10px 0px;
  line-height: 24px;
`
const Date = styled.p`
  color: var(--textSecondary);
  display: inline-block;
`
const Name = styled.p`
  font-weight: 500;
  display: inline-block;
`

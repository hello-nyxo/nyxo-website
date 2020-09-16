import React, { useState } from "react"
import styled from "styled-components"
import { useAddComment, useGetAllComments } from "../../hooks/commentsHooks"
import Moment from "moment"
import { first } from "lodash"
import RichTextEditor from "./RichTextEditor"
import { Editor, EditorState, convertToRaw } from "draft-js"

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

  const [commentError, setCommentError] = useState("")
  const [nameError, setNameError] = useState("")
  const [success, setSuccess] = useState("")

  const regex = /(<[^>]*>)/gi
  const firstNameClean = firstName?.replace(regex, "")
  const lastNameClean = lastName?.replace(regex, "")
  const commentClean = comment?.replace(regex, "")

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // )

  const [editorState, setEditorState] = useState("")

  // const content = editorState.getCurrentContent()
  // const dataToSaveBackend = convertToRaw(content)

  console.log("Comments: ", editorState)

  const {
    data: allCommentData,
    status: allCommentStatus,
  }: any = useGetAllComments(slug)

  const handleGuest = () => {
    checked ? setGuest(false) : setGuest(true)
    setFirstName("")
    setLastName("")
  }

  const handleComments = async () => {
    setSuccess("")

    const isValid = validate(event)
    if (isValid) {
      // clear inputs so user can't submit the post multiple times
      setChecked(false)
      setNameError("")
      setCommentError("")
      setFirstName("")
      setLastName("")
      setComment("")
      setSuccess("Thank you! Your comment has been received.")

      await add({
        slug: slug,
        type: type,
        firstName: firstNameClean,
        lastName: lastNameClean,
        comment: commentClean,
        guest: guest,
      })
    }
  }

  const validate = (event: any) => {
    event.preventDefault()

    if (comment === "") {
      setCommentError("Please provide a comment.")
      return false
    } else {
      setCommentError("")
    }

    // for some reason this didn't work for the checked condition
    // if ((firstName === "" && lastName === "") || checked === false) {
    if (firstName === "" && lastName === "") {
      if (checked === false) {
        setNameError(
          "Please provide your name or choose to be an anonymous user."
        )
        return false
      } else {
        return true
      }
    } else if (firstName !== "" && lastName !== "" && checked === true) {
      setNameError(
        "Please choose to add your name or to be an anonymous user, but not both."
      )
      return false
    } else {
      setNameError("")
    }

    return true
  }

  return (
    <>
      <H2>Share Your Thoughts</H2>
      <P>
        Your comments matter to us. Feel free to share any thoughts, opinions,
        or simply engage in conversation.
      </P>
      <Container>
        <Form onSubmit={handleComments}>
          <Input
            name="firstName"
            value={firstName}
            placeholder="First name"
            onChange={(e: any) => {
              setFirstName(e.target.value)
            }}
          />

          <Input
            name="lastName"
            value={lastName}
            placeholder="Last name"
            onChange={(e: any) => {
              setLastName(e.target.value)
            }}
          />

          <CheckboxContainer>
            <input
              name="guest"
              type="checkbox"
              onChange={(e) => {
                setChecked(e.target.checked)
                handleGuest()
              }}
              checked={checked}
            />

            <label>I wish to be anonymous.</label>
          </CheckboxContainer>

          {/* add email? */}
          <Comment
            name="comments"
            value={comment}
            placeholder="Write your comment..."
            onChange={(e: any) => {
              setComment(e.target.value)
            }}
          />

          {/* <RichTextEditor
            editorState={editorState}
            onChange={(e) => setEditorState(e)}
          /> */}

          {commentError ? <Span>{commentError}</Span> : null}
          {nameError ? <Span>{nameError}</Span> : null}
          {success ? <Span>{success}</Span> : null}

          <Button type="submit" onClick={handleComments}>
            Add Comment
          </Button>
        </Form>

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
const Span = styled.span`
  color: var(--morningAccent);
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`
const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const CheckboxContainer = styled.div`
  flex-basis: 35%;
`

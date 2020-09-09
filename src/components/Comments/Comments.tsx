import React from "react"
import styled from "styled-components"

const Comments = () => {
  return (
    <>
      <H2>Share Your Thoughts</H2>
      <P>
        Your comments matter to us. Feel free to share any thoughts, opinions,
        or simply engage in conversation.
      </P>
      <Container>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />

        <Comment placeholder="Write your comment..." />
        <Button>Add Comment</Button>

        <CommentContainer>
          <h3>Comments</h3>
          <ul>
            <Li>
              <Date>2 May, 2021</Date>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Li>
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
  padding: 20px;
  box-shadow: rgb(213, 210, 208) 5px 5px 15px, rgb(255, 255, 255) -5px -5px 15px;
  border-radius: 5px;
`
const Li = styled.li`
  border-bottom: 1px solid var(--textSecondary);
  padding: 20px 0px;
`
const Text = styled.p`
  margin: 10px 0px;
`
const Date = styled.small`
  color: var(--textSecondary);
`

import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image"
import { Container } from "./Primitives"

// eslint-disable-next-line no-use-before-define
const IS_PRODUCTION = !/127\.0\.0\.1/.test(window.location.href)
const SUBMISSION_URL = IS_PRODUCTION
  ? "/"
  : "http://127.0.0.1:9000/submission-created"

const GetAppBig = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "nyxo_phones.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [disabled, setDisabled] = useState(false)
  const [error, setErrored] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendSMS = async (event: any) => {
    event.preventDefault()

    // disable button to prevent multiple submissions
    setDisabled(true)

    // make the request to submit the form
    try {
      const response = await fetch("/", {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        // parse and submit all included form data
        body: "",
      })

      // if it was successful show success message
      if (response.status === 200) {
        setSuccess(true)
      } else {
        setErrored(true)
      }
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <Banner>
      <ImageBG>
        <Image
          alt={"Phones with Nyxo app"}
          path={data?.cover.childImageSharp.fluid}
        />
      </ImageBG>
      <Container>
        <Center>
          <H2>Start sleeping better today</H2>
          <form name="contact" onSubmit={sendSMS} data-netlify="true">
            <button disabled={disabled} className="btn" type="submit">
              Send messages!
            </button>
            <p className="successMsg" role="alert" hidden>
              Messages sent...
            </p>
            <p className="errorMsg" role="alert" hidden>
              Something went wrong...
            </p>
          </form>
        </Center>
      </Container>
    </Banner>
  )
}

export default GetAppBig

const H2 = styled.h2`
  font-weight: 400;
  font-size: 2.875rem;
`

const Banner = styled.div`
  margin: 10rem 0rem;
  position: relative;
  overflow: hidden;
  height: 50vh;
  max-height: 750px;
  display: flex;
  justify-content: center;
`

const ImageBG = styled.div`
  position: absolute;
  left: 50%;
  right: 0;
  bottom: 0;
  top: 0;
`

const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

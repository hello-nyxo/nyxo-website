import React, { useState, FC } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { H2, P } from "./Primitives"
import { Icon } from "./Icons"
import devices from "../devices"

const NewsLetterForm: FC = () => {
  const data = useStaticQuery(graphql`
    query NewsLetterQuery {
      newsletter: file(name: { regex: "/newsletter/" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [email, setEmail] = useState(null)
  const [allow, setAllow] = useState(true)

  const _handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    addToMailchimp(email)
      .then(({ msg, result }: any) => {
        if (result !== "success") {
          throw msg
        }
        setAllow(false)
        alert(msg)
      })
      .catch((err: string) => {
        console.log("err", err)

        alert(err)
      })
  }

  return (
    <NewsletterContainer>
      <EmailContainer />
      <ImageContainer>
        <Image
          style={{ height: "100%" }}
          fluid={data.newsletter.childImageSharp.fluid}
        />
      </ImageContainer>
      <Overlay>
        <Container>
          <NoOverFlow>
            <H2>Stay tuned</H2>
            <P>
              Subscribe to our newsletter and never miss out on free sleep
              coaching materials, product updates and more.
            </P>
          </NoOverFlow>
          {allow ? (
            <EmailForm action-xhr="" method="POST" onSubmit={handleSubmit}>
              <FloatingContainer>
                <Label htmlFor="email">email</Label>
                <FieldContainer>
                  <EmailField
                    type="email"
                    onChange={_handleChange}
                    placeholder="your@email.com"
                    name="email"
                    className="newsletterInput"
                  />
                  <Submit
                    title="Subscribe to our email"
                    name="Subscribe"
                    type="submit">
                    <Icon
                      name="emailSend"
                      height="30px"
                      width="30px"
                      stroke="currentColor"
                      viewBox="0 0 25 25"
                    />
                  </Submit>
                </FieldContainer>
              </FloatingContainer>
              <Disclaimer to="/privacy" title={"Privacy Policy"}>
                Read on how we handle your data
              </Disclaimer>
            </EmailForm>
          ) : (
            <ThanksForSubscribing>Thanks for subscribing!</ThanksForSubscribing>
          )}
        </Container>
      </Overlay>
    </NewsletterContainer>
  )
}

export default NewsLetterForm

const NewsletterContainer = styled.div`
  background-color: var(--bg);
  display: flex;
  flex-direction: row;
  min-height: 40rem;
  max-height: 50vh;
  position: relative;
`
const ImageContainer = styled.div`
  overflow: hidden;
  flex: 1;
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`
const EmailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
`

const Label = styled.label`
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: var(--semibold);
`

const Disclaimer = styled(Link)`
  margin-top: 5rem;
  color: var(--primary);
  font-size: 0.9rem;
  text-decoration: underline;
`

const ThanksForSubscribing = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-weight: 700;
`

const Submit = styled.button`
  padding: 1rem;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out background-color, 0.2s ease-in-out color;
  color: var(--radiantBlue);

  &:hover {
    background-color: var(--radiantBlue);
    color: white;
  }

  svg: {
    stroke: red;
  }
`

const FieldContainer = styled.div`
  display: flex;
  box-shadow: var(--shadow);
  max-width: 100%;

  @media ${devices.tablet} {
    max-width: 50%;
  }
`

const EmailField = styled.input`
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--radiantBlue);
  }
`

const FloatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Container = styled.div`
  padding: 2rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
`

const NoOverFlow = styled.div`
  max-width: 100%;

  @media ${devices.tablet} {
    max-width: 50%;
  }
`

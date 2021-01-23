import { graphql, PageProps } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { H1, P } from "../components/Html/HtmlContent"
import Layout from "~theme/components/Layout/Layout"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

type Props = {
  contactMeta: any
}

const ContactPage: FC<PageProps<Props>> = (props) => {
  const {
    location: { pathname },
    data: { contactMeta },
  } = props
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO
        title={t("CONTACT.TITLE")}
        description={t("CONTACT.TEXT")}
        pathName={pathname}
        staticImage={true}
        image={contactMeta.childImageSharp.fixed.src}
      />
      <Container>
        <div className={"content"}>
          <div className={"row"}>
            <div className={"col-7"}>
              <H1>{t("CONTACT.TITLE")}</H1>
              <P>{t("CONTACT.TEXT")}</P>
            </div>

            <div className={"col-5"}>
              <div className={"contact-items"}>
                <Form
                  name="contact"
                  action-xhr=""
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <TextBox
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("CONTACT.NAME")}
                  />

                  <TextBox
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("CONTACT.EMAIL")}
                  />

                  <TextBox
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder={t("CONTACT.SUBJECT")}
                  />

                  <TextArea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder={t("CONTACT.MESSAGE")}
                  />

                  <ContactButton type="submit">
                    {t("CONTACT.SEND")}
                  </ContactButton>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage

const TextBox = styled.input`
  padding: 0 0.8rem;
  margin: 0 0 1rem 0;
  width: 100%;
  border-radius: 0;
  border-color: #ebe6e9;
  box-shadow: 0 0 0 2px transparent, 0 1px 0 rgba(0, 0, 0, 0.08) inset;
  transition: all 0.3s;
  line-height: 2.8rem;
  height: 2.8rem;
  color: #474747;
  background: #f5f5f5;
  vertical-align: top;
  text-transform: none;
  color: inherit;
  font: inherit;
  border: none;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px #5368e0;
  }
`

const TextArea = styled.textarea`
  padding: 0 0.8rem;
  margin: 0 0 1rem 0;
  width: 100%;
  border-radius: 0;
  border-color: #ebe6e9;
  box-shadow: 0 0 0 2px transparent, 0 1px 0 rgba(0, 0, 0, 0.08) inset;
  transition: all 0.3s;
  line-height: 2.8rem;
  height: 2.8rem;
  color: #474747;
  background: #f5f5f5;
  vertical-align: top;
  text-transform: none;
  color: inherit;
  border: none;
  height: 200px;
  resize: none;
  width: 100%;
  font: inherit;

  &:focus {
    box-shadow: 0 0 0 2px #5368e0;
  }
`

const ContactButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: 2.5em;
  padding: 0.5em 1.4em;
  background: #5368e0;
  color: #ffffff;
  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.2);
  outline: none;
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  font: inherit;
  border: none;
  width: 100%;
  margin: auto auto auto 10px;
`

const Form = styled.form`
  margin-right: 25px;
`

export const pageQuery = graphql`
  query ContactPageQuery {
    contactMeta: file(name: { regex: "/Contact/" }) {
      childImageSharp {
        fixed(width: 800, quality: 75) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

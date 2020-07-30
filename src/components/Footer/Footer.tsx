import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Icon } from "../Icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo" }) {
        publicURL
      }
    }
  `)

  const links = [
    {
      href: "/for-you",
      title: "For You",
    },
    {
      href: "/for-organizations",
      title: "For Organizations",
    },
    {
      href: "/coaching",
      title: "Coaching",
    },
    {
      href: "/about",
      title: "About Us",
    },
    {
      href: "/blog",
      title: "Blog",
    },
  ]

  return (
    <FooterContainer>
      <div className={"row"}>
        <div className={"col-5"}>
          <div className={"widget__item"}>
            <div className={"logo"}>
              <Link to="/" title={"Nyxo"}>
                <img width="100px" alt={"Logo"} src={data?.logo.publicURL} />
              </Link>
            </div>

            <About>
              <p>Personalized sleep coaching that works!</p>
            </About>
          </div>
        </div>

        <div className={"col-2 footer-links"}>
          <div className={"widget__item"}>
            <div className={"links"}>
              <h4>Nyxo</h4>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} title={link.title}>
                      {link.title}
                    </Link>
                  </li>
                ))}

                <li>
                  <OutboundLink
                    href="http://tiny.cc/NyxoPR"
                    target="_new"
                    rel="noopener noreferrer"
                    title="Nyxo press kit.">
                    Press Kit
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={"col-2 footer-links"}>
          <div className={"widget__item"}>
            <div className={"links"}>
              <h4>Support</h4>
              <ul>
                <li>
                  <OutboundLink
                    className={"links__special"}
                    href={"https://help.nyxo.app"}
                    target="_new"
                    rel="noopener noreferrer"
                    title={"If you need any help, you can find it here"}>
                    Support
                  </OutboundLink>
                </li>
                <li>
                  <Link to="/contact" title={"Contact Us"}>
                    Contact
                  </Link>
                </li>

                <li>
                  <Link to="/privacy" title={"Privacy Policy"}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" title={"Terms Of Use"}>
                    Terms Of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={"col-3"}>
          <div className={"widget__item"}>
            <div className={"social"}>
              <OutboundLink
                href="https://twitter.com/hellonyxo"
                target="_new"
                rel="noopener noreferrer"
                title={"Twitter"}>
                <Icon height="30px" width="30px" name="twitter" />
              </OutboundLink>
              <OutboundLink
                href="https://www.linkedin.com/company/nyxo/"
                target="_new"
                rel="noopener noreferrer"
                title={"LinkedIn"}>
                <Icon height="30px" width="30px" name="linkedIn" />
              </OutboundLink>
              <OutboundLink
                href="https://github.com/hello-nyxo"
                target="_new"
                rel="noopener noreferrer"
                title={"GitHub"}>
                <Icon height="30px" width="30px" name="github" />
              </OutboundLink>
              <OutboundLink
                href="https://www.instagram.com/hellonyxo/"
                target="_new"
                rel="noopener noreferrer"
                title={"Instagram"}>
                <Icon height="30px" width="30px" name="instagram" />
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>

      <CopyRight>
        <p>
          Copyright {new Date().getFullYear()}, {` `}{" "}
          <a href="https://nyxo.app" title={"Nyxo"}>
            Nyxo
          </a>
          . All rights reserved.
        </p>
      </CopyRight>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding: 0 2rem;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    text-align: center;
    margin: auto;
  }
`

const About = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  line-height: 1rem;
`

const CopyRight = styled.div`
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: $break-small) {
    margin-top: 31px;
  }

  p {
    font-size: 13px;
  }
`

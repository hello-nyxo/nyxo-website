import React, { FC } from "react"
import styled from "styled-components"
import { H3 } from "../Html/HtmlContent"
import { useStaticQuery, graphql } from "gatsby"
import { device } from "../Primitives"
import { useTranslation } from "gatsby-plugin-react-i18next"

const InstagramFeaturette: FC = () => {
  // const {
  //   allInstaNode: { nodes: posts },
  // } = useStaticQuery(graphql`
  //   query InstagramQuery {
  //     allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 10) {
  //       nodes {
  //         id
  //         username
  //         timestamp
  //         preview
  //       }
  //     }
  //   }
  // `) as {
  //   allInstaNode: {
  //     nodes: [
  //       {
  //         likes: number
  //         comments: number
  //         caption: string
  //         username: string
  //         timestamp: number
  //         preview: string
  //         id: string
  //       }
  //     ]
  //   }
  // }
  // const { t } = useTranslation()
  // return (
  //   <Container>
  //     <H3>{t("ABOUT.INSTAGRAM")}</H3>
  //     <Posts>
  //       {posts.map((post) => (
  //         <Post href={`https://instagram.com/${post.username}`} key={post.id}>
  //           <Image src={post.preview} />
  //           <BottomRow>@{post.username}</BottomRow>
  //           {/* <Caption>{post.caption}</Caption> */}
  //         </Post>
  //       ))}
  //     </Posts>
  //   </Container>
  // )
}

export default InstagramFeaturette

const Container = styled.div``

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0rem -1rem;
  transition: 0.3s all ease-in-out;
`

const Post = styled.a`
  margin: 1rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  @media ${device.desktopL} {
    max-width: calc(20% - 2 * 1rem);
    flex: 1 1 calc(20% - 2 * 1rem);
  }

  @media ${device.desktop} {
    max-width: calc(20% - 2 * 1rem);
    flex: 1 1 calc(20% - 2 * 1rem);
  }

  @media ${device.laptopL} {
    max-width: calc(20% - 2 * 1rem);
    flex: 1 1 calc(20% - 2 * 1rem);
  }

  @media ${device.laptop} {
    max-width: calc(25% - 2 * 1rem);
    flex: 1 1 calc(25% - 2 * 1rem);
  }

  @media ${device.tabletL} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
  }

  @media ${device.tablet} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
  }

  @media ${device.mobileL} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
  }

  @media ${device.mobileM} {
    max-width: calc(50% - 2 * 1rem);
    flex: 1 1 calc(50% - 2 * 1rem);
  }

  @media ${device.mobileS} {
    max-width: calc(50% - 2 * 1rem);
    flex: 1 1 calc(50% - 2 * 1rem);
  }
`

const Caption = styled.p``

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  overflow: hidden;
`

const BottomRow = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  font-size: 0.8rem;
  background: linear-gradient(#42404000, #1b1a1a53);
  padding: 0.5rem;
  color: white;
`

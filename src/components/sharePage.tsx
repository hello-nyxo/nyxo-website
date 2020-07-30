import React from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"

import styled from "styled-components"
import { Icon } from "./Icons"

interface Props {
  subject: string
  url: string
  excerpt: string
}

const SharePage = (props: Props) => {
  const { subject, url } = props
  return (
    <Share>
      <ShareArea />
      <ShareText>Share this lesson:</ShareText>
      <EmailShareBtn
        url={url}
        subject={subject}
        body={`
        "Hey! \n\n I've found this great article from Nyxo. Check it out! \n\n ${url}"
        `}>
        <Icon name="" height="30px" width="30px" />
      </EmailShareBtn>
      <LinkedinShareBtn url={url}>
        <Icon name="" height="30px" width="30px" />
      </LinkedinShareBtn>
      <FacebookShareBtn url={url} quote={"TODO"} hashtag="#nyxo">
        <Icon name="" height="30px" width="30px" />
      </FacebookShareBtn>
      <TwitterShareBtn url={url}>
        <Icon name="" height="30px" width="30px" />
      </TwitterShareBtn>
    </Share>
  )
}

export default SharePage

const Share = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  border-top: 1px solid var(--textSecondary);
`

const ShareArea = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  border-top: 1px solid var(--textSecondary);
`

const ShareText = styled.p`
  color: var(--textSecondary);
  font-size: 16px;
  margin-bottom: 30px;
`

const EmailShareBtn = styled(EmailShareButton)`
  width: max-content;
  display: inline-block;
  margin-right: 5px;
  vertical-align: sub;
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transform: translateY(-1px);
  }
`

const LinkedinShareBtn = styled(LinkedinShareButton)`
  width: max-content;
  display: inline-block;
  margin-right: 5px;
  vertical-align: sub;
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transform: translateY(-1px);
  }
`

const FacebookShareBtn = styled(FacebookShareButton)`
  width: max-content;
  display: inline-block;
  margin-right: 5px;
  vertical-align: sub;
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transform: translateY(-1px);
  }
`

const TwitterShareBtn = styled(TwitterShareButton)`
  width: max-content;
  display: inline-block;
  vertical-align: sub;
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transform: translateY(-1px);
  }
`

const HabitTitle = styled.li`
  font-size: 18px;
  font-weight: 900;
  color: gray;
  line-height: 26px;
`

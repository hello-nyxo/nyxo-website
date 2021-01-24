import React, { FC } from "react"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { H1, P } from "~components/Html/HtmlContent"
import { SleepUI } from "./SleepUI"
import { LessonUI } from "./LessonUI"

export const Hero: FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <LeftColumn>
        <Title>{t("INDEX.TITLE")}</Title>
        <P>{t("INDEX.INTRODUCTION")}</P>
      </LeftColumn>
      <RightColumn>
        <UI>
          <WebUI />
          <LessonUI />
          <CoachUI />
          <SleepUI />
        </UI>
      </RightColumn>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem auto 15rem;
  padding: 0rem 2rem;
  max-width: 1440px;
`

const Title = styled(H1)``

const LeftColumn = styled.div`
  flex: 1;
  max-width: 30%;
  position: relative;
  display: grid;
  gap: 30px;
`

const WebUI = styled.div`
  will-change: transform;
  background: rgba(255, 255, 255, 0.9);
  width: 701px;
  height: 428px;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px,
    rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  transform: rotateY(-20deg) rotateX(20deg);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`

const CoachUI = styled.div`
  will-change: transform;
  background: rgba(23, 12, 61, 0.2);
  width: 400px;
  height: 273px;
  border-radius: 10px;
  position: absolute;
  top: 470px;
  right: 40px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  transform: rotateY(-20deg) rotateX(20deg);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`

const RightColumn = styled.div`
  position: relative;
  top: -100px;
  width: 70%;
  perspective: 5000px;
  perspective-origin: left bottom;
  transform-style: flat;

  &:hover {
    .sleep-ui {
      transform: translate(-30px, -30px);
    }
    ${LessonUI} {
      transform: translate(-30px, -30px);
    }
    ${WebUI} {
      transform: translate(0px, 0px);
    }
    ${CoachUI} {
      transform: translate(-120px, 60px);
      z-index: 4;
    }
  }
`

const UI = styled.div`
  position: relative;
`

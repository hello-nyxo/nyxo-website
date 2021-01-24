import React, { FC } from "react"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { H1, P } from "~components/Html/HtmlContent"

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
          <SleepUI>
            <Today>Torstai</Today>
          </SleepUI>
          <LessonUI>
            <LessonTitle>Lessons</LessonTitle>
          </LessonUI>

          <WebUI></WebUI>

          <CoachUI></CoachUI>
        </UI>
      </RightColumn>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15rem 0rem;
  padding: 0rem 2rem;
  /* background: linear-gradient(
    189.16deg,
    rgb(67, 22, 219) 13.57%,
    rgb(144, 118, 231) 98.38%
  ); */
`

const Title = styled(H1)``

const LeftColumn = styled.div`
  flex: 1;
  max-width: 30%;
  position: relative;
  display: grid;
  gap: 30px;
`

const SleepUI = styled.div`
  will-change: transform;
  /* background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  ); */
  width: 183px;
  height: 120px;
  position: absolute;
  top: 150px;
  left: -37px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px,
    rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;

  transform: rotateY(-20deg) rotateX(20deg);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`

const LessonUI = styled.div`
  will-change: transform;
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  );
  width: 183px;
  height: 120px;
  position: absolute;
  top: 150px;
  left: 180px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px,
    rgba(65, 19, 19, 0.2) 0px 0px 0px 0.5px inset;

  transform: rotateY(-20deg) rotateX(20deg);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`

const LessonTitle = styled.span``

const WebUI = styled.div`
  will-change: transform;
  background: rgba(255, 255, 255, 0.9);
  width: 701px;
  height: 428px;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  left: 0px;
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
  top: 370px;
  left: 40px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  transform: rotateY(-20deg) rotateX(20deg);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`

const RightColumn = styled.div`
  position: relative;
  top: -100px;
  right: -30px;
  perspective: 5000px;
  perspective-origin: left bottom;
  transform-style: flat;

  &:hover {
    ${SleepUI} {
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

const Today = styled.span``
const UI = styled.div`
  position: relative;
`

import React, { FC } from "react"
import styled from "styled-components"

const MobilePhone: FC = ({ children }) => (
  <IphoneX>
    <Notch>
      <Camera />
      <Speaker />
    </Notch>
    <div className="top-bar"></div>
    <div className="sleep"></div>
    <div className="bottom-bar"></div>
    <div className="volume"></div>
    <div className="overflow">
      <div className="shadow shadow--tr"></div>
      <div className="shadow shadow--tl"></div>
      <div className="shadow shadow--br"></div>
      <div className="shadow shadow--bl"></div>
    </div>
    <div className="inner-shadow"></div>
    <div className="screen">{children}</div>
  </IphoneX>
)

export default MobilePhone

const Camera = styled.div`
  width: 6px;
  height: 6px;
  top: 9px;
  border-radius: 100%;
  position: absolute;
  left: 154px;
  background: #0d4d71;
`

const Speaker = styled.div`
  height: 6px;
  width: 60px;
  left: 50%;
  position: absolute;
  top: 9px;
  margin-left: -30px;
  background: #171818;
  border-radius: 6px;
`

const Notch = styled.div`
position: absolute;
width: 210px;
height: 30px;
top: 26px;
left: 108px;
z-index: 4;
background: black;
border-bottom-left-radius: 24px;
border-bottom-right-radius: 24px;
&:before, &:after {
content: '';
height: 8px;
position: absolute;
top: 0;
width: 8px;
`

const IphoneX = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: content-box !important;
  width: 375px;
  height: 812px;
  padding: 26px;
  background: #fdfdfd;
  box-shadow:inset 0 0 11px 0 black;
  border-radius: 66px;
  .overflow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 66px;
    overflow: hidden;
  }
  .shadow {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%,rgba(255,255,255,0) 60%);
  }
  .shadow--tl {
    top: -20px;
    left: -20px;
  }
  .shadow--tr {
    top: -20px;
    right: -20px;
  }

.shadow--bl {
bottom: -20px;
left: -20px;
}

.shadow--br {
bottom: -20px;
right: -20px;
}

&:before{
width: calc(100% - 10px);
height: calc(100% - 10px);
position: absolute;
top: 5px;
content: '';
left: 5px;
border-radius: 61px;
background: black;
z-index: 1;
}

.inner-shadow {
width: calc(100% - 20px);
height: calc(100% - 20px);
position: absolute;
top: 10px;
overflow: hidden;
left: 10px;
border-radius: 56px;
box-shadow: inset 0 0 15px 0 rgba(white, 0.66);
z-index: 1;

&:before{
box-shadow:inset 0 0 20px 0 #FFFFFF;
width: 100%;
height: 116%;
position: absolute;
top: -8%;
content: '';
left: 0;
border-radius: 200px / 112px;
z-index: 2;
}
}

.screen {
border-radius: 40px;
box-shadow: none;
}

.top-bar,.bottom-bar {
width: 100%;
position: absolute;
height: 8px;
background: rgba(black, 0.1);
left: 0;
}

.top-bar {
top: 80px;
}

.bottom-bar {
bottom: 80px;
}

.volume, .volume:before, .volume:after, .sleep {
width: 3px;
background: #b5b5b5;
position: absolute;
}

.volume {
left: -3px;
top: 116px;
height: 32px;

&:before {
height: 62px;
top: 62px;
content: '';
left: 0;
}

&:after {
height: 62px;
top: 140px;
content: '';
left: 0;
}
}

.sleep {
height: 96px;
top: 200px;
right: -3px;
}





&:after {
background: radial-gradient(circle at bottom left, transparent 0, transparent 70%, black 70%, black 100%);
left: -8px;
}

&:before {
background: radial-gradient(circle at bottom right, transparent 0, transparent 70%, black 70%, black 100%);
right: -8px;
}
}

&.landscape {
height: 375px;
width: 812px;

.top-bar, .bottom-bar {
width: 8px;
height: 100%;
top: 0;
}

.top-bar {
left: 80px;
}

.bottom-bar {
right: 80px;
bottom: auto;
left: auto;
}

.volume, .volume:before, .volume:after, .sleep {
height: 3px;
}

.inner-shadow:before {
height: 100%;
width: 116%;
left: -8%;
top: 0;
border-radius: 112px / 200px;
}

.volume {
bottom: -3px;
top: auto;
left: 116px;
width: 32px;

&:before {
width: 62px;
left: 62px;
top: 0;
}

&:after {
width: 62px;
left: 140px;
top: 0;
}
}

.sleep {
width: 96px;
left: 200px;
top: -3px;
right: auto;
}

.camera {
left: 9px;
bottom: 154px;
top: auto;
}

.speaker {
width: 6px;
height: 60px;
left: 9px;
top: 50%;
margin-top: -30px;
margin-left: 0;
}

.notch {
height: 210px;
width: 30px;
left: 26px;
bottom: 108px;
top: auto;
border-top-right-radius: 24px;
border-bottom-right-radius: 24px;
border-bottom-left-radius: 0;

&:before, &:after {
left: 0;
}

&:after {
background: radial-gradient(circle at bottom right, transparent 0, transparent 70%, black 70%, black 100%);
bottom: -8px;
top: auto;
}

&:before {
background: radial-gradient(circle at top right, transparent 0, transparent 70%, black 70%, black 100%);
top: -8px;
}
}	



.screen {
width: 100%;
position: relative;
height: 100%;
z-index: 3;
background: white;
overflow: hidden;
display: block;
border-radius: 1px;
box-shadow: 0 0 0 3px #111;
}

.top-bar,
.bottom-bar {
height: 3px;
background: black;
width: 100%;
display: block;
}

.middle-bar {
width: 3px;
height: 4px;
top: 0px;
left: 90px;
background: black;
position: absolute;
}
}


`

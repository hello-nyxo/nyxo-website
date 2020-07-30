import styled from "styled-components"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "525px",
  tablet: "768px",
  tabletL: "850px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  desktopL: "2560px",
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
}

export const minDevice = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
}

export const P = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 30px;
`
export const H1 = styled.h1`
  line-height: 40px;
`

export const TextContainer = styled.div`
  position: relative;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 2rem;
  box-sizing: border-box;
`

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 2rem;
  box-sizing: border-box;

  @media ${device.mobileS} {
    padding: 0rem 1rem;
  }

  @media ${device.mobileM} {
    padding: 0rem 1rem;
  }

  @media ${device.mobileL} {
    padding: 0rem 2rem;
  }

  @media ${device.tablet} {
    padding: 0rem 1rem;
  }

  @media ${device.laptop} {
    padding: 0rem 2rem;
  }

  @media ${device.laptopL} {
    padding: 0rem 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

export const ContentContainer = styled.div`
  max-width: 50rem;
  line-height: 1.5rem;
`

export const H2 = styled.h2`
  font-size: 2.5rem;
`

export const Demo = styled.a`
  padding: 1rem;
  background-color: var(--radiantBlue);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out background-color, 0.2s ease-in-out color;
  color: #fff;
  font-size: 16px;
  margin: 15px 0;
  border-radius: 24px;
  font-weight: bold;
  width: max-content;
  box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.1);

  &:hover {
    color: #fff;
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transform: scale(1.01);
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

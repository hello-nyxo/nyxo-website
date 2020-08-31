import React, { FC } from "react"
import styled from "styled-components"
import { Icon } from "../Icons"
import devices from "../../devices"
import { useTranslation } from "gatsby-plugin-react-i18next"

interface Props {
  name: string
  price: string
  perks: string[]
}

const PricingCard: FC<Props> = ({ name, price, perks }) => {
  const { t } = useTranslation()

  return (
    <PriceCard>
      <Top>
        <h3>{t(`FOR_YOU.${name}`)}</h3>
        <h2>{price}</h2>
        <small>{t(`FOR_YOU.MONTH`)}</small>
      </Top>
      <Bottom>
        <ul>
          {perks.map((perk, index) => (
            <li key={index}>
              <Icon
                stroke="var(--radiantBlue)"
                height="20px"
                width="20px"
                viewBox="0 0 30 30"
                name="checkMark"
              />
              {t(`FOR_YOU.${perk}`)}
            </li>
          ))}
        </ul>
      </Bottom>
    </PriceCard>
  )
}

export default PricingCard

const PriceCard = styled.div`
  margin: 1rem;
  box-sizing: border-box;
  border-radius: 24px;
  height: 600px;
  border: 0.5px solid rgba(255, 255, 255, 0.52);
  box-shadow: 9px 9px 22px -2px rgb(163, 177, 198, 0.5),
    -9px -9px 18px rgba(255, 255, 255, 0.52);
  flex: 1;
  max-width: 30rem;

  @media ${devices.mobileM} {
    width: 100%;
  }

  @media ${devices.mobileL} {
    width: 100%;
  }

  @media ${devices.tablet} {
    width: 50%;
  }
`
const Top = styled.div`
  background-color: var(--bg);
  text-align: center;
  padding: 15px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

const Bottom = styled.div`
  background-color: white;
  padding: 15px;
  text-align: left;
  margin: auto;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  li {
    padding: 10px;
  }
`

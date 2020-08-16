import React, { FC } from "react"
import { Icon } from "../../components/Icons"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"

const rows = [
  {
    title: "TRACKING",
    regular: true,
    exclusive: true,
  },
  {
    title: "ACCESS",
    regular: true,
    exclusive: true,
  },
  {
    title: "CLOUD",
    regular: true,
    exclusive: true,
  },
  {
    title: "ANALYTICS",
    regular: true,
    exclusive: true,
  },
  {
    title: "SUPPORT",
    regular: true,
    exclusive: true,
  },
  {
    title: "CONSULTING",
    regular: false,
    exclusive: true,
  },
]

const PricingTable: FC = () => {
  const { t } = useTranslation()
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>{t("FOR_ORGANIZATIONS.REGULAR")}</th>
          <th>{t("FOR_ORGANIZATIONS.EXCLUSIVE")}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.title}>
            <td>{t(`FOR_ORGANIZATIONS.${row.title}`)}</td>
            <td>
              {row.regular && (
                <Icon
                  stroke="var(--radiantBlue)"
                  height="20px"
                  width="20px"
                  viewBox="0 0 30 30"
                  name="checkMark"
                />
              )}
            </td>
            <td>
              {row.exclusive && (
                <Icon
                  stroke="var(--radiantBlue)"
                  height="20px"
                  width="20px"
                  viewBox="0 0 30 30"
                  name="checkMark"
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PricingTable

const Table = styled.table`
  margin: auto;

  td,
  th {
    padding: 20px;
    border: 1px solid var(--radiantBlue);
  }
`

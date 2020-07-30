import React, { FC } from "react"
import { Icon } from "../../components/Icons"
import styled from "styled-components"

const rows = [
  {
    title: "Individual sleep tracking & metrics",
    regular: true,
    exclusive: true,
  },
  {
    title: "Full access to the coaching program & materials",
    regular: true,
    exclusive: true,
  },
  {
    title: "Nyxo Cloud service",
    regular: true,
    exclusive: true,
  },
  {
    title: "Group-level sleep analytics (coming soon)",
    regular: true,
    exclusive: true,
  },
  {
    title: "Quick and responsive tech support",
    regular: true,
    exclusive: true,
  },
  {
    title: "Private consulting & intervention plans	",
    regular: false,
    exclusive: true,
  },
]

const PricingTable: FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Regular</th>
          <th>Exclusive</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.title}>
            <td>{row.title}</td>
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

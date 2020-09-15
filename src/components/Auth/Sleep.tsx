import { Container } from "../Primitives"
import React, { FC, useMemo } from "react"
import { H3 } from "../Html/HtmlContent"
import { useGetSleep } from "../../hooks/useSleep"
import { useTable } from "react-table"
import { format, isDate } from "date-fns"
import styled from "styled-components"
import SleepChart, { Night, Value } from "../charts/SleepChart"

const dateFormat = "dd.MM.yyyy"

const Sleep: FC = () => {
  const { data } = useGetSleep()

  const items = data?.items ? data?.items : []
  const columns = useMemo(
    () => [
      {
        Header: "Night",
        columns: [
          {
            Header: "Start",
            accessor: ({ startDate: date }: { startDate: string }) =>
              format(
                isDate(new Date(date)) ? new Date(date) : new Date(),
                dateFormat
              ),
            id: "startDate",
          },
          {
            Header: "End",
            accessor: ({ endDate: date }: { endDate: string }) =>
              format(
                isDate(new Date(date)) ? new Date(date) : new Date(),
                dateFormat
              ),
            id: "endDate",
          },
          {
            Header: "Type",
            accessor: "value",
            id: "value",
          },
        ],
      },
      {
        Header: "Meta",
        columns: [
          {
            Header: "createdAt",
            accessor: ({ createdAt: date }: { createdAt: string }) =>
              format(
                isDate(new Date(date)) ? new Date(date) : new Date(),
                dateFormat
              ),
            id: "createdAt",
          },
          {
            Header: "sourceId",
            accessor: "sourceId",
          },
          {
            Header: "sourceName",
            accessor: "sourceName",
          },
          {
            Header: "userId",
            accessor: "userId",
          },
        ],
      },
    ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: items,
  })

  console.log(items)

  return (
    <Container>
      <H3>SLEEP</H3>

      <SleepChart data={items} />

      <Cards>
        <Card>
          <div>Unessa (keskiarvo)</div>
          <div>{averageInBed(items)}</div>
        </Card>
      </Cards>

      <div>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </Thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export default Sleep

const Table = styled.table`
  width: 100%;
`

const Thead = styled.thead`
  padding: 1rem 0rem;
`

const Cards = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.div``

const averageInBed = (night: Night[]) =>
  night
    .filter((night) => night.value === "InBed")
    .reduce(
      (average, value, _, { length }) => average + value.totalDuration / length,
      0
    )

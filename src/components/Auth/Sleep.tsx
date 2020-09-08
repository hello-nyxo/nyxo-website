import { Container } from "../Primitives"
import React, { FC, useMemo } from "react"
import { H3 } from "../Html/HtmlContent"
import { useGetSleep } from "../../hooks/useSleep"
import { useTable } from "react-table"
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
            accessor: "startDate",
          },
          {
            Header: "End",
            accessor: "endDate",
          },
          {
            Header: "Type",
            accessor: "value",
          },
        ],
      },
      {
        Header: "Meta",
        columns: [
          {
            Header: "createdAt",
            accessor: "createdAt",
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
      <div>
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default Sleep

import React from "react"
import styled from "styled-components"
import { Icon } from "../Icons"

const ConsumerFeatures = () => {
  return (
    <Container>
      <Table>
        <thead>
          <Tr>
            <Th></Th>
            <Th>Nyxo</Th>
            <Th>Nyxo Cloud</Th>
            <Th>Nyxo Couching</Th>
          </Tr>
          <Tr>
            <Th>Pricing</Th>
            <Th>Free</Th>
            <Th>(Creating account is free)</Th>
            <Th>Starting from 7.99</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Sleep Diary</Td>
            <Td>
              <Icon
                height="30px"
                width="30px"
                name="checkMark"
                stroke="green"
              />
            </Td>
            <Td>
              <Icon
                height="30px"
                width="30px"
                name="checkMark"
                stroke="green"
              />
            </Td>
            <Td>
              <Icon
                height="30px"
                width="30px"
                name="checkMark"
                stroke="green"
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Data export</Td>
          </Tr>
          <Tr>
            <Td>Sleep Coaching</Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default ConsumerFeatures

const Table = styled.table`
  text-align: left;
`

const Tr = styled.tr`
  background-color: var(--bg);
  margin: 0.5rem 0rem;
  border-spacing: 0.5rem;
`

const Td = styled.td`
  padding: 1rem;
`

const Th = styled.th`
  padding: 1rem;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

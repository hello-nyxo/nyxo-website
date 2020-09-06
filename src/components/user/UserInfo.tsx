import React, { FC } from "react"
import styled from "styled-components"
import { H3, H5 } from "../Html/HtmlContent"
import { Icon } from "../Icons"
import { Auth } from "aws-amplify"
import { navigate } from "gatsby"
import { useGetUser } from "../../hooks/useUser"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { format } from "date-fns"

const UserInfo: FC = () => {
  const { data } = useGetUser()
  const { t } = useTranslation()
  console.log("user", data)
  const signOut = () => {
    Auth.signOut()
      .then(function () {
        navigate("/me/login")
      })
      ["catch"](function (err) {
        console.error(err)
      })
  }

  return (
    <Container>
      <Row>
        <H3>{data?.nickname ?? "You"}</H3>
        <Button onClick={signOut}>
          <Icon name="logout" height="30px" width="30px" />
          <ButtonText>Logout</ButtonText>
        </Button>
      </Row>

      <H5>Information</H5>
      <Detail>{`${t("USER.EMAIL")}: 	${data?.email}`}</Detail>
      <Detail>{data?.id}</Detail>
      <Detail>{data?.intercomId}</Detail>
      <Detail>{data?.connectionId}</Detail>

      <Detail>
        {`${t("USER.CREATED")}: ${
          data?.createdAt &&
          format(new Date(data?.createdAt as string), "dd.MM.yyyy")
        }`}
      </Detail>
      <Detail>{`${t("USER.UPDATED")}: ${
        data?.updatedAt && format(new Date(data?.updatedAt), "dd.MM.yyyy")
      }`}</Detail>
    </Container>
  )
}

export default UserInfo

const Container = styled.div``

const Detail = styled.div`
  font-size: 1rem;
  height: 1.5rem;
  font-family: var(--medium);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--textSecondary);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ButtonText = styled.span`
  color: white;
  font-size: 1rem;
  font-family: var(--medium);
`

const Button = styled.button`
  position: relative;
  background-color: var(--radiantBlue);
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  transition: 0.2s ease-in-out;
  color: var(--radiantBlue);
  outline: var(--radiantBlue);
  box-shadow: var(--shadow);

  svg {
    stroke: white;
  }

  &:hover {
    background-color: white;
    transition: 0.2s;
    color: var(--radiantBlue);

    ${ButtonText} {
      color: var(--radiantBlue);
    }

    svg {
      stroke: var(--radiantBlue);
    }
  }

  &:active {
    box-shadow: inset 1px 1px 3px 3px #6d676712;
  }
`

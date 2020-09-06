import React, { FC } from "react"
import styled from "styled-components"
import { H3, H5 } from "../Html/HtmlContent"
import { Icon } from "../Icons"
import { Auth } from "aws-amplify"
import { navigate } from "gatsby"
import { useGetUser } from "../../hooks/useUser"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { format } from "date-fns"

const dateFormat = "dd.MM.yyyy"

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
      <DetailRow>
        <Title>{`${t("USER.EMAIL")}:`}</Title>
        <Detail>{`${data?.email}`}</Detail>
      </DetailRow>
      <DetailRow>
        <Title>{`${t("USER.ID")}:`}</Title>
        <Detail>{`${data?.id}`}</Detail>
      </DetailRow>
      <DetailRow>
        <Title>{`${t("USER.INTERCOM")}:`}</Title>
        <Detail>{`${data?.intercomId}`}</Detail>
      </DetailRow>
      <DetailRow>
        <Title>{`${t("USER.LINK")}:`}</Title>
        <Detail>{`${data?.connectionId}`}</Detail>
      </DetailRow>
      <DetailRow>
        <Title>{`${t("USER.ACTIVE_COACHING")}:`}</Title>
        <Detail>{`${
          data?.activeCoaching?.started &&
          format(new Date(data?.activeCoaching.started as string), dateFormat)
        }`}</Detail>
      </DetailRow>
      <DetailRow>
        <Title>{`${t("USER.CREATED")}:`}</Title>
        <Detail>{`${
          data?.createdAt &&
          format(new Date(data?.createdAt as string), dateFormat)
        }`}</Detail>
      </DetailRow>
      <DetailRow>
        <Title>{`${t("USER.UPDATED")}:`}</Title>
        <Detail>{`${
          data?.updatedAt &&
          format(new Date(data?.updatedAt as string), dateFormat)
        }`}</Detail>
      </DetailRow>
    </Container>
  )
}

export default UserInfo

const Container = styled.div``

const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--textSecondary);
  min-height: 1.5rem;
`

const Title = styled.div`
  color: var(--textSecondary);
  font-size: 1rem;
`

const Detail = styled.div`
  font-size: 1rem;
  color: var(--textPrimary);
  font-family: var(--medium);
  text-align: right;
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

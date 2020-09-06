import React, { FC } from "react"
import { H3, H5 } from "../Html/HtmlContent"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import { useListCoaching, useUpdateCoaching } from "../../hooks/useCoaching"
import { format } from "date-fns"
import { useUpdateUser } from "../../hooks/useUser"

const Coaching: FC = () => {
  const { t } = useTranslation()
  const { data: coaching } = useListCoaching()

  const [mutate, { data, error }] = useUpdateUser()

  // console.log(status, data, error)
  console.log("listCoaching", coaching)
  const setActive = (id: string, active: boolean) => {
    mutate({
      user: {
        userActiveCoachingId: id,
      },
    })
  }

  return (
    <Container>
      <H3>{t("USER.COACHING")}</H3>

      {coaching?.items?.map((item) => (
        <div
          key={`${item?.id}`}
          onClick={() => setActive(item?.id, item?.active)}>
          <H5>{`${
            item?.started && format(new Date(item?.started), "dd.MM.yyyy")
          }`}</H5>
          <div>{item?.active ? "ACTIVE" : ""}</div>
          <div>{item?.createdAt}</div>
          <div>{item?.updatedAt}</div>
          <div>{item?.stage}</div>
          <div>{item?.activeWeek}</div>
          <div>{item?.lessons}</div>
        </div>
      ))}
    </Container>
  )
}

export default Coaching

const Container = styled.div``

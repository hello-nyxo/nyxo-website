import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { useListCoaching } from "../../hooks/useCoaching"
import { useGetActiveCoaching, useUpdateUser } from "../../hooks/useUser"
import CoachingCard from "../coaching/CoachingCard"
import { H3, H4, H5 } from "../Html/HtmlContent"

const Coaching: FC = () => {
  const { t } = useTranslation()
  const { data: coaching } = useListCoaching()
  const { data: active } = useGetActiveCoaching()
  const [mutate] = useUpdateUser()

  // console.log(status, data, error)
  console.log("listCoaching", coaching)

  const setActive = (id: string) => {
    mutate({
      user: {
        userActiveCoachingId: id,
      },
    })
  }

  return (
    <Container>
      <H3>{t("USER.COACHING")}</H3>

      {active?.activeCoaching && (
        <>
          <H4>{t("USER.CURRENTLY_ACTIVE")}</H4>
          <CoachingCard coaching={active.activeCoaching} />
        </>
      )}

      <H4>{t("USER.ALL_COACHING_DATA")}</H4>
      {coaching?.items?.map((item) => (
        <CoachingCard
          key={`${item?.id}`}
          coaching={item}
          onClick={() => setActive(item?.id)}
        />
      ))}
    </Container>
  )
}

export default Coaching

const Container = styled.div`
  padding: 1rem;
`

const ID = styled.div`
  color: var(--textSecondary);
  font-size: 0.8rem;
  font-family: var(--medium);
`

const Card = styled.div`
  padding: 1rem;
  background-color: var(--secondaryBg);
  box-shadow: var(--shadow);
  margin: 1rem 0rem;

  ${H5} {
    margin: 0 0 0.5rem 0;
  }
`

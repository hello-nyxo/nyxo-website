import { format } from "date-fns"
import React, { FC } from "react"
import { Icon } from "../Icons"
import styled from "styled-components"
import { GetCoachingDataQuery } from "../../API"
import { H5 } from "../Html/HtmlContent"
import { useTranslation } from "gatsby-plugin-react-i18next"

export type CoachingData = Omit<
  Exclude<GetCoachingDataQuery["getCoachingData"], null>,
  "__typename" | "user"
> | null

type Props = {
  coaching: CoachingData
}

const CoachingCard: FC<Props> = ({ coaching }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <H5>
        {`${
          coaching?.started && format(new Date(coaching?.started), "dd.MM.yyyy")
        }`}
      </H5>
      <ID>{coaching?.id}</ID>

      <Info></Info>

      <InformationRow>
        <Lessons>
          <Icon
            height="20px"
            width="20px"
            name="presentation"
            stroke="currentColor"
          />
          {coaching?.lessons?.length} {t("LESSONS")}
        </Lessons>
      </InformationRow>
    </Card>
  )
}

export default CoachingCard

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

const Info = styled.div``

const Lessons = styled.span`
  background-color: #f6f8ff;
  margin: 0rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`

const InformationRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;
  box-sizing: content-box;
`

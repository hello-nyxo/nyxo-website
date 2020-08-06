export const contentfulData = `
  {
    allContentfulLesson: allContentfulLesson {
      nodes {
        slug
        node_locale
      }
    }

    allContentfulHabit: allContentfulHabit {
      nodes {
        slug
        node_locale
      }
    }

    allContentfulWeek: allContentfulWeek(
      filter: { internal: { type: { eq: "ContentfulWeek" } } }
    ) {
      nodes {
        slug
        node_locale
      }
    }

    allContentfulAuthor: allContentfulAuthor {
      nodes {
        slug
        node_locale
      }
    }

    contentfulTagsQuery: allContentfulLesson(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      group(field: keywords) {
        fieldValue
        totalCount
      }
    }

    allContentfulQuestionnaire: allContentfulQuestionnaire(
      sort: { fields: questions___id }
    ) {
      nodes {
        slug
        node_locale
      }
    }
  }
`
export const lessonsQuery = `
  {
    allContentfulLesson: allContentfulLesson {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`

export const habitsQuery = `
  {
    allContentfulHabit: allContentfulHabit {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`

export const weeksQuery = `
  {
    allContentfulWeek: allContentfulWeek(
      filter: { internal: { type: { eq: "ContentfulWeek" } } }
    ) {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`

export const questionnairesQuery = `
  {
    allContentfulQuestionnaire: allContentfulQuestionnaire(
      sort: { fields: questions___id }
    ) {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`

export const authorsQuery = `
  {
    allContentfulAuthor: allContentfulAuthor {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`

export const contentfulTagsQuery = `
  {
    contentfulTagsQuery: allContentfulLesson(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      group(field: keywords) {
        fieldValue
        totalCount
      }
    }
  }
`

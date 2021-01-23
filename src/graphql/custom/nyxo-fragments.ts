import { graphql } from "gatsby"

export const lessonFragmentNyxo = graphql`
  fragment LessonFragmentNyxo on ContentfulLesson {
    lessonName
    slug
    updatedAt(formatString: "")
    createdAt(formatString: "")
    habit {
      ...HabitFragment
    }
    authorCard {
      credentials
      name
      slug
      avatar {
        fluid(maxWidth: 150) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    cover {
      resize(width: 900, height: 471, cropFocus: CENTER) {
        src
      }
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 800, quality: 75) {
        src
      }
    }
    keywords
    fields {
      excerpt
      readingTime
    }
    weights: childContentfulLessonWeightsJsonNode {
      jetlag
      duration
      efficiency
      consistency
    }
    lessonContent {
      raw
      references {
        ... on ContentfulAsset {
          description
          __typename
          title
          contentful_id
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    additionalInformation {
      raw
    }
    week {
      weekName
      slug
    }
  }
`

export const weekFragment = graphql`
  fragment WeekFragmentNyxo on ContentfulWeek {
    slug
    updatedAt(formatString: "")
    createdAt(formatString: "")
    taskCount
    weekName
    intro
    weekDescription {
      raw
    }
    coverPhoto {
      description
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 800, quality: 75) {
        src
      }
    }
    lessons {
      cover {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      id
      lessonName
      slug
      section {
        id
        title
        order
        description {
          raw
        }
      }
      habit {
        ...HabitFragment
      }
      fields {
        excerpt
        readingTime
      }
      lessonContent {
        raw
      }
      authorCard {
        ...AuthorFragment
      }
    }
  }
`

export const habitFragmentNyxo = graphql`
  fragment HabitFragmentNyxo on ContentfulHabit {
    slug
    period
    title
    fields {
      excerpt
    }
    description {
      raw
      references {
        ... on ContentfulHabit {
          __typename
          title
          contentful_id
          period
          slug
          fields {
            excerpt
          }
        }
      }
    }
    updatedAt(formatString: "DD/MM/YYYY")
    createdAt(formatString: "DD/MM/YYYY")
    lesson {
      lessonName
      slug
      habit {
        title
        slug
        period
        fields {
          excerpt
        }
        description {
          raw
        }
      }
      week {
        slug
        weekName
      }
    }
  }
`

export const authorFragmentNyxo = graphql`
  fragment AuthorFragmentNyxo on ContentfulAuthor {
    id
    name
    slug
    avatar {
      fluid(maxWidth: 300) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 10) {
        src
      }
    }
    fields {
      excerpt
    }
    credentials
    lesson {
      id
    }
  }
`

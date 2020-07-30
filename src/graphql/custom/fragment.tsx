import { graphql } from "gatsby"

export const lessonFragment = graphql`
  fragment LessonFragment on ContentfulLesson {
    lessonName
    slug
    updatedAt(formatString: "")
    createdAt(formatString: "")
    habit {
      title
      period
      slug
      description {
        fields {
          excerpt
        }
      }
    }
    authorCard {
      credentials
      name
      slug
      avatar {
        fluid(maxWidth: 50) {
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
    lessonContent {
      json
      fields {
        excerpt
        readingTime {
          minutes
        }
      }
    }
    additionalInformation {
      json
    }
    week {
      slug
    }
  }
`

export const weekFragment = graphql`
  fragment WeekFragment on ContentfulWeek {
    slug
    updatedAt(formatString: "")
    createdAt(formatString: "")
    taskCount
    weekName
    intro
    weekDescription {
      json
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
          json
        }
      }
      habit {
        title
      }
      lessonContent {
        fields {
          excerpt
          readingTime {
            text
            minutes
          }
        }
      }
      habit {
        slug
        title
      }
      authorCard {
        ...AuthorFragment
      }
    }
  }
`

export const habitFragment = graphql`
  fragment HabitFragment on ContentfulHabit {
    slug
    period
    title
    description {
      json
      fields {
        excerpt
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
        description {
          json
          fields {
            excerpt
          }
        }
      }
      week {
        slug
        weekName
      }
    }
  }
`

export const authorFragment = graphql`
  fragment AuthorFragment on ContentfulAuthor {
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
    credentials
    lesson {
      id
    }
  }
`

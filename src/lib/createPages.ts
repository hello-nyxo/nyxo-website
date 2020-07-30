import { kebabCase } from "lodash"
import path from "path"
import {
  ContentfulLesson,
  ContentfulWeek,
  ContentfulHabit,
  ContentfulQuestionnaire,
  ContentfulAuthor,
} from "../../graphql-types"
import { GatsbyCreatePages } from "../types"
import markdownQuery from "./query-blog-posts"
import {
  authorsQuery,
  contentfulTagsQuery,
  habitsQuery,
  lessonsQuery,
  questionnairesQuery,
  weeksQuery,
} from "./query-contentful"
import { getLocalizedPath } from "../Helpers/i18n-helpers"
interface Post {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      tags: string
    }
  }
}

interface Week {
  node: ContentfulWeek
}

interface Lesson {
  node: ContentfulLesson
}

interface Habit {
  node: ContentfulHabit
}

interface Questionaire {
  node: ContentfulQuestionnaire
}

interface Author {
  node: ContentfulAuthor
}

interface Questionnaire {
  node: ContentfulQuestionnaire
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(markdownQuery)

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  const allWeeks = await graphql(weeksQuery)
  const allLessons = await graphql(lessonsQuery)
  const allHabits = await graphql(habitsQuery)
  const allAuthors = await graphql(authorsQuery)
  const allContentfulTags = await graphql(contentfulTagsQuery)
  const allQuestionnaires = await graphql(questionnairesQuery)

  if (allWeeks.errors) {
    throw allWeeks.errors
  }

  if (allLessons.errors) {
    throw allLessons.errors
  }

  if (allHabits.errors) {
    throw allHabits.errors
  }

  const posts = allMarkdown.data.allBlogPosts.edges

  /* WEEKS */
  const weeks = allWeeks.data.allContentfulWeek.edges

  /* LESSONS */
  const lessons = allLessons.data.allContentfulLesson.edges

  /* HABITS */
  const habits = allHabits.data.allContentfulHabit.edges

  /* AUTHORS */
  const authors = allAuthors.data.allContentfulAuthor.edges
  const questionnaires = allQuestionnaires.data.allContentfulQuestionnaire.edges
  /* TAGS */
  const tags = allMarkdown.data.tagsGroup.group
  const contentfulTags = allContentfulTags.data.contentfulTagsQuery.group

  /* QUESTIONNAIRE */

  posts.forEach((post: any, index: number) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1].node.slug
    const next = index === 0 ? null : posts[index - 1].node.slug
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        author: post.node.frontmatter.authorSlug,
        slug: post.node.fields.slug,
      },
    })
  })

  tags.forEach((tag: any) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // eslint-disable-next-line sonarjs/no-identical-functions
  contentfulTags.forEach((tag: any) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  weeks.forEach((week: Week, index: number) => {
    const previousWeek =
      index === weeks.length - 1 ? null : weeks[index + 1].node.slug
    const nextWeek = index === 0 ? null : weeks[index - 1].node.slug

    createPage({
      path: getLocalizedPath(`/week/${week.node.slug}`, week.node.node_locale),
      component: path.resolve(`./src/templates/week.tsx`),
      context: {
        slug: week.node.slug,
        locale: week.node.node_locale,
        next: nextWeek,
        previous: previousWeek,
      },
    })
  })

  lessons.forEach((lesson: Lesson, index: number) => {
    const previousLesson =
      index === lessons.length - 1 ? null : lessons[index + 1].node.slug
    const nextLesson = index === 0 ? null : lessons[index - 1].node.slug

    createPage({
      path: getLocalizedPath(
        `/lesson/${lesson.node.slug}`,
        lesson.node.node_locale
      ),
      component: path.resolve(`./src/templates/lesson.tsx`),
      context: {
        slug: lesson.node.slug,
        locale: lesson.node.node_locale,
        previous: previousLesson,
        next: nextLesson,
      },
    })
  })

  habits.forEach((habit: Habit, index: number) => {
    const previousHabit =
      index === habits.length - 1 ? null : habits[index + 1].node.slug
    const nextHabit = index === 0 ? null : habits[index - 1].node.slug

    createPage({
      path: getLocalizedPath(
        `/habit/${habit.node.slug}`,
        habit.node.node_locale
      ),
      component: path.resolve(`./src/templates/habit.tsx`),
      context: {
        locale: habit.node.node_locale,
        slug: habit.node.slug,
        next: nextHabit,
        previous: previousHabit,
      },
    })
  })

  questionnaires.forEach((questionnaire: Questionnaire, index: number) => {
    const previousQuestionnaire =
      index === lessons.length - 1 ? null : lessons[index + 1].node.slug
    const nextQuestionnaire = index === 0 ? null : lessons[index - 1].node.slug

    createPage({
      path: getLocalizedPath(
        `/questionnaire/${questionnaire.node.slug}`,
        questionnaire.node.node_locale
      ),
      component: path.resolve(`./src/templates/questionnaire.tsx`),
      context: {
        locale: questionnaire.node.node_locale,
        slug: questionnaire.node.slug,
        next: nextQuestionnaire,
        previous: previousQuestionnaire,
      },
    })
  })

  authors.forEach((author: Author) => {
    const scholar = author.node.slug
      ? author.node.slug.replace(/-/g, " ")
      : "no"

    createPage({
      path: getLocalizedPath(
        `author/${author.node.slug}`,
        author.node.node_locale
      ),
      component: path.resolve(`./src/templates/author.tsx`),
      context: {
        slug: author.node.slug,
        locale: author.node.node_locale,
        scholar: scholar,
      },
    })
  })

  return null
}

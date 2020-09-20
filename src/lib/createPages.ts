import { kebabCase } from "lodash"
import path from "path"
import {
  ContentfulAuthor,
  ContentfulHabit,
  ContentfulLesson,
  ContentfulQuestionnaire,
  ContentfulWeek,
} from "../../graphql-types"
import { getLocalizedPath } from "../Helpers/i18n-helpers"
import { GatsbyCreatePages } from "../types"
import markdownQuery from "./query-blog-posts"
import { contentfulData } from "./query-contentful"
import { Devices } from "../types"
import allDevices from "./query-devices"
// import { BlogPostNode } from "../typings/blog-types"

type ContentfulTag = {
  fieldValue: string
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(markdownQuery)
  const {
    data: {
      allContentfulWeek: { nodes: weeks },
      allContentfulLesson: { nodes: lessons },
      allContentfulHabit: { nodes: habits },
      allContentfulAuthor: { nodes: authors },
      allContentfulQuestionnaire: { nodes: questionnaires },
      contentfulTagsQuery: { group: contentfulTags },
    },
  } = await graphql(contentfulData)

  const deviceQuery = await graphql(allDevices)
  const devices = deviceQuery.data.devices.nodes

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  const posts = allMarkdown.data.allBlogPosts.nodes
  /* TAGS */
  const tags = allMarkdown.data.tagsGroup.group

  posts.forEach((post: any, index: number) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].slug
    const next = index === 0 ? null : posts[index - 1].slug
    createPage({
      path: post.fields.slug as string,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        author: post.frontmatter.authorSlug,
        slug: post.fields.slug,
      },
    })
  })

  // Merge different types of tags

  const allTags = [
    ...new Set([
      ...tags.map((tag: ContentfulTag) => tag.fieldValue),
      ...contentfulTags.map((tag: ContentfulTag) => tag.fieldValue),
    ]),
  ]

  allTags.forEach((tag: string) => {
    if (typeof tag !== undefined) {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: path.resolve(`./src/templates/tag.tsx`),
        context: {
          locale: "en-US",
          tag: tag,
        },
      })
    }
  })

  weeks.forEach((week: ContentfulWeek, index: number) => {
    const previousWeek =
      index === weeks.length - 1 ? null : weeks[index + 1].slug
    const nextWeek = index === 0 ? null : weeks[index - 1].slug

    createPage({
      path: getLocalizedPath(`/week/${week.slug}`, week.node_locale),
      component: path.resolve(`./src/templates/week.tsx`),
      context: {
        slug: week.slug,
        locale: week.node_locale,
        next: nextWeek,
        previous: previousWeek,
      },
    })
  })

  lessons.forEach((lesson: ContentfulLesson, index: number) => {
    const previousLesson =
      index === lessons.length - 1 ? null : lessons[index + 1].slug
    const nextLesson = index === 0 ? null : lessons[index - 1].slug

    createPage({
      path: getLocalizedPath(`/lesson/${lesson.slug}`, lesson.node_locale),
      component: path.resolve(`./src/templates/lesson.tsx`),
      context: {
        slug: lesson.slug,
        locale: lesson.node_locale,
        previous: previousLesson,
        next: nextLesson,
      },
    })
  })

  habits.forEach((habit: ContentfulHabit, index: number) => {
    const previousHabit =
      index === habits.length - 1 ? null : habits[index + 1].slug
    const nextHabit = index === 0 ? null : habits[index - 1].slug

    createPage({
      path: getLocalizedPath(`/habit/${habit.slug}`, habit.node_locale),
      component: path.resolve(`./src/templates/habit.tsx`),
      context: {
        locale: habit.node_locale,
        slug: habit.slug,
        next: nextHabit,
        previous: previousHabit,
      },
    })
  })

  questionnaires.forEach(
    (questionnaire: ContentfulQuestionnaire, index: number) => {
      const previousQuestionnaire =
        index === lessons.length - 1 ? null : lessons[index + 1].slug
      const nextQuestionnaire = index === 0 ? null : lessons[index - 1].slug

      createPage({
        path: getLocalizedPath(
          `/questionnaire/${questionnaire.slug}`,
          questionnaire.node_locale
        ),
        component: path.resolve(`./src/templates/questionnaire.tsx`),
        context: {
          locale: questionnaire.node_locale,
          slug: questionnaire.slug,
          next: nextQuestionnaire,
          previous: previousQuestionnaire,
        },
      })
    }
  )

  authors.forEach((author: ContentfulAuthor) => {
    const scholar = author.slug ? author.slug.replace(/-/g, " ") : "no"

    createPage({
      path: getLocalizedPath(`/author/${author.slug}`, author.node_locale),
      component: path.resolve(`./src/templates/author.tsx`),
      context: {
        slug: author.slug,
        locale: author.node_locale,
        scholar: scholar,
      },
    })
  })

  devices.forEach(({ frontmatter }: any) => {
    createPage({
      path: `/devices/${frontmatter.slug}/`,
      component: path.resolve(`./src/templates/device.tsx`),
      context: {
        locale: "en-US",
        slug: frontmatter.slug,
      },
    })
  })

  return null
}

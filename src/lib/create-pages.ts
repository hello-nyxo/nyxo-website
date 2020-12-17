import { GatsbyNode } from "gatsby"
import path from "path"
import markdownQuery from "./query-blog-posts"
// import { BlogPostNode } from "../typings/blog-types"

type Post = {
  slug: string
  fields: {
    slug: string
  }
  frontmatter: {
    authorSlug: string
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  const allMarkdown: {
    errors?: string
    data?: {
      allBlogPosts?: {
        nodes?: Post[]
      }
    }
  } = await graphql(markdownQuery)
  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  const posts = allMarkdown?.data?.allBlogPosts?.nodes

  posts?.forEach((post: Post, index: number) => {
    const previous = index === posts?.length - 1 ? null : posts[index + 1].slug
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
}

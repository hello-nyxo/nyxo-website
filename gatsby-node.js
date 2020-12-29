require("source-map-support").install()
require("ts-node").register({ files: true })

const path = require("path")

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allBlogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            authorSlug
            author
          }
        }
      }

      tagsGroup: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        limit: 2000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  const posts = allMarkdown.data.allBlogPosts.nodes

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].slug
    const next = index === 0 ? null : posts[index - 1].slug
    createPage({
      path: post.fields.slug,
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

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~auth": path.resolve(__dirname, "src/auth/"),
        "~components": path.resolve(__dirname, "src/components/"),
        "~content": path.resolve(__dirname, "content/"),
        "~theme": path.resolve(
          __dirname,
          "src/@hello-nyxo/gatsby-theme-nyxo-coaching/"
        ),
        "~hooks": path.resolve(__dirname, "src/hooks/"),
        "~styles": path.resolve(__dirname, "src/styles/"),
        "~graphql": path.resolve(__dirname, "src/graphql/"),
        "~helpers": path.resolve(__dirname, "src/Helpers/"),
        "~gatsby": path.resolve(__dirname, "src/gatsby/"),
      },
    },
  })
}

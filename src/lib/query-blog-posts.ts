const allMarkdown = `
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
`

export default allMarkdown

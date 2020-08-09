require("source-map-support").install()
require("ts-node").register()

exports.onCreateNode = async (options) => {
  return Promise.all([
    require("./src/lib/gatsby-onCreateNode-readingTime").onCreateNode(options),
    require("./src/lib/gatsby-onCreateNode-excerpt").onCreateNode(options),

    // add your other onCreateNode functions here
  ])
}

exports.createPages = require("./src/lib/createPages").createPages

exports.onCreatePage = async ({ page, actions }) => {
  console.log(page)
  const { createPage } = actions

  if (page.path.match(/^\/me/)) {
    page.matchPath = `/me/*`

    // Update the page.
    createPage(page)
  }
}

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}

require("source-map-support").install()
require("ts-node").register()
const path = require("path")

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~auth": path.resolve(__dirname, "src/auth/"),
        "~components": path.resolve(__dirname, "src/components/"),
        "~hooks": path.resolve(__dirname, "src/hooks/"),
        "~styles": path.resolve(__dirname, "src/styles/"),
        "~graphql": path.resolve(__dirname, "src/graphql/"),
        "~@helpers": path.resolve(__dirname, "src/Helpers/"),
        "~gatsby": path.resolve(__dirname, "src/gatsby/"),
      },
    },
  })
}

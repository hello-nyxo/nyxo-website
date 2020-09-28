require("source-map-support").install()
require("ts-node").register()

exports.onCreateNode = async (options) => {
  return Promise.all([
    require("./src/lib/reading-time").onCreateNode(options),
    require("./src/lib/excerpt").onCreateNode(options),
  ])
}

exports.createPages = require("./src/lib/create-pages").createPages

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}

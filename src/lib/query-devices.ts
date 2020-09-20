const allDevices = `
  {
    devices: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/devices/"}}) {    
        nodes {
            frontmatter {
                icon
                title
                slug
            }
        }        
      }
  }
`

export default allDevices

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MardownRemark`) {
    console.log(node.internal.type)
  }
}
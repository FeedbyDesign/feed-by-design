import * as PropTypes from "prop-types"
import React from "react"

class ProjectTemplate extends React.Component {
  // static propTypes = {
  //   data: PropTypes.shape({
  //     markdownRemark: PropTypes.object.isRequired,
  //   }),
  // }
  render() {
    const projectDetails = this.props.data.markdownRemark.frontmatter
    const logoColor = projectDetails.logoColor.childImageSharp.responsiveSizes
    return (
      <div>

        <h2>{projectDetails.name}</h2>
        <ul>
          {
            projectDetails.colors.map((color)=>{
              return (
                <li key={color} css={{color: `${color}`}}>{color}</li>
              )
            })
          }
        </ul>
        <img
          src={logoColor.src}
          srcSet={logoColor.srcSet}
          sizes={`200px`}
        />
      </div>
    )
  }
}

export default ProjectTemplate

// The post template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        slug
        metaDescription
        url
        packName
        colors
        logoColor {
          childImageSharp {
            responsiveSizes (maxWidth: 300) {
              base64
              aspectRatio
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

// import * as PropTypes from "prop-types"
// import React from "react"
// import PostDetail from "../components/post-detail"
//
// class PostTemplate extends React.Component {
//   static propTypes = {
//     data: PropTypes.shape({
//       postsJson: PropTypes.object.isRequired,
//     }),
//   }
//   render() {
//     return (
//       // PostDetail is used for this detail page and
//       // also in the modal.
//       <PostDetail post={this.props.data.postsJson} />
//     )
//   }
// }
//
// export default PostTemplate
//
// // The post template's GraphQL query. Notice the “id”
// // variable which is passed in. We set this on the page
// // context in gatsby-node.js.
// //
// // All GraphQL queries in Gatsby are run at build-time and
// // loaded as plain JSON files so have minimal client cost.
// export const pageQuery = graphql`
//   query PostPage($id: String!) {
//     # Select the post which equals this id.
//     postsJson(id: { eq: $id }) {
//       ...PostDetail_details
//     }
//   }
// `

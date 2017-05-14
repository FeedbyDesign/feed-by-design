import React from 'react'

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


class Services extends React.Component {
  render() {

    return (
      <div>

        <ul>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.strategyMd.html,
              }}
            />
          </li>
          <li>Graphic Design</li>
          <li>Website</li>
          <img src={this.props.data.strategyMd.frontmatter.image.childImageSharp.responsiveResolution.src} />
          {console.log(this.props.data.strategyMd.frontmatter.image.childImageSharp)}
        </ul>

      </div>
    )
  }
}

export default Services

export const pageQuery = graphql`
query Services {
  strategyMd: markdownRemark (frontmatter: {reference: {eq: "services/strategy"}}) {
    id
    html
    children {
      id
    }
    parent {
      id
    }
    content
    frontmatter {
    	image {
        childImageSharp {
          responsiveResolution(width: 75, height: 75) {
            src
            srcSet
          }
        }
      }
    }
  }
}
`

import React from 'react'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../../utils/colors"


class Portfolio extends React.Component {
  render() {

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Portfolio</title>
          <meta property="og:title" content="Portfolio | Feed by Design" />
          <meta name="description" content="Come check our work! Logos, websites, business cards, flyers, ..." />
          <meta property="og:description" content="Come check our work! Logos, websites, business cards, flyers, ..." />
          <link rel="canonical" href="https://www.feedbydesign.com/portfolio/" />
          <meta property="og:url" content="https://www.feedbydesign.com/portfolio/" />
        </Helmet>

        <h2>Portfolio</h2>

      </div>
    )
  }
}

export default Portfolio

// export const pageQuery = `
// query {
//
// }
// `

// sortBy: { order: DESC, fields: [frontmatter___date] },
//     frontmatter: { draft: { ne: true } },
//     fileAbsolutePath: { regex: "/blog/" },

// query Image($name: fileNameQueryString!){
//   file (name: $name) {
//     id
//     ext
//     name
// 		 base
//     relativePath
//     type
//     mediaType
//
//   }
// }

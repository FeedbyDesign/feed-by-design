import React from 'react'
import _ from 'lodash'
import { Helmet } from "react-helmet"

import Intro from '../components/Intro'
import CTA1 from '../components/CTA1'
import Argument from '../components/Argument'
import AlphaText from '../components/AlphaText'
import Footer from '../components/Footer'

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// Import for Open Graph image
import '../../static/images/wanna-play.jpg'

const contact = {
  phone: typeof window !== 'undefined' ? "+2304004040": "Phone Number",
  email: typeof window !== 'undefined' ? "my@email.com": "Email"
}

class Index extends React.Component {
  render() {

    // Outputs array of images with 'sizes' key {big: ..., tiny: ...}
    const images = {}
    const queryImages = this.props.data.allFile.edges
    _.forEach(queryImages, function({ node }) {
      images[node.base] = node
      images[node.base].sizes = node.children[0]
    })


    const cta1 = (
      <h2
        css={{
          fontFamily: `"Permanent Marker",cursive`,
          fontWeight: `400`,
          marginBottom: -5,
          transform: `rotate(-5deg)`,
          zIndex: -1,
        }}
      >
        Oh cool,
        <span
          css={{
            ...scale(0.2),
            display: `block`,
            lineHeight: 1,
            color: COLOR2,
          }}
        >
          inscris-moi!
          <img
            src={images["asterisque2.png"].sizes.micro.base64}
            css={{
              width: 13,
              float: `right`,
              marginLeft: 5,
            }}
          />
        </span>
      </h2>
    )
    const cta2 = (
      <h2
        css={{
          fontFamily: `"Permanent Marker",cursive`,
          fontWeight: `400`,
          marginBottom: -7,
          transform: `rotate(-5deg)`,
          color: COLOR2,
          whiteSpace: `nowrap`,
          textAlign: `center`,
          zIndex: -1,
        }}
      >
        <span
          css={{
            ...scale(0.2),
            display: `block`,
            lineHeight: 1,
            color: COLOR1,
          }}
        >
          Bonne idée.
          <img
            src={images["asterisque2.png"].sizes.micro.base64}
            css={{
              width: 13,
              float: `right`,
            }}
          />
        </span>
        J'arrive!
      </h2>
    )

    return (
      <div>
        <Helmet>
            <title>La plateforme pour organiser tes soirées jeux</title>
            <meta property="og:title" content="La plateforme pour organiser tes soirées jeux | Wanna-Play.be" />
            <meta name="description" content="Wanna Play rassemble la communauté du jeu de société à Bruxelles. Rejoins-nous pour construire avec nous une communauté qui te ressemble." />
            <meta property="og:description" content="Wanna Play rassemble la communauté du jeu de société à Bruxelles. Rejoins-nous pour construire avec nous une communauté qui te ressemble." />
            <link rel="canonical" href="https://www.wanna-play.be" />
            <meta property="og:url" content="https://www.wanna-play.be" />
        </Helmet>
        <Intro image={images["LOGO-1024px.png"].sizes.w350} />
        <CTA1
          bgColor={COLOR3}
          txtColor={COLOR4}
          ctaText={cta1}
          images={{
            up: images["BOUTON1.png"].sizes.w110,
            hovered: images["BOUTON2.png"].sizes.w110,
            down: images["BOUTON3.png"].sizes.w110,
            asteriskBlue: images["asterisque1.png"].sizes.micro,
            asteriskRed: images["asterisque2.png"].sizes.micro
          }}
        />
        <Argument
          images={{
            questionMark: images["PointdInterrogation.png"].sizes.w410,
            asteriskRed: images["asterisque2.png"].sizes.micro,
            arrow: images["fleche2.png"].sizes.micro
          }}
        />
        <CTA1
          bgColor={COLOR4}
          txtColor={COLOR3}
          ctaText={cta2}
          images={{
            up: images["BOUTON1.png"].sizes.w110,
            hovered: images["BOUTON2.png"].sizes.w110,
            down: images["BOUTON3.png"].sizes.w110,
            asteriskBlue: images["asterisque1.png"].sizes.micro,
            asteriskRed: images["asterisque2.png"].sizes.micro
          }}
        />
        <AlphaText />
        <Footer />
      </div>
    )
  }
}

export default Index

export const pageQuery = `
query {
  allFile (
    mediaType: {regex: "/image/i"}
  ) {
    edges {
      node {
        id
        ext
        name
        base
        relativePath
        type
        mediaType
        children {
          ... on ImageSharp {
            micro: responsiveSizes(maxWidth: 20) {
              src
              base64
              aspectRatio
            },
            w110: responsiveSizes(maxWidth: 110) {
              src
              srcSet
              aspectRatio
            },
            w350: responsiveSizes(maxWidth: 350) {
              src
              srcSet
              aspectRatio
            },
            w410: responsiveSizes(maxWidth: 410) {
              src
              srcSet
              aspectRatio
            },
          }
        }
      }
    }
  }
}
`
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

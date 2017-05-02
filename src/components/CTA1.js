import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// import buttonUp from '../../static/images/BOUTON1.png'
// import buttonHovered from '../../static/images/BOUTON2.png'
// import buttonDown from '../../static/images/BOUTON3.png'
// import asteriskBlue from '../../static/images/asterisque1.png'
// import asteriskRed from '../../static/images/asterisque2.png'

export default (props) => {
  return (
    <section
      css={{
        position: `relative`,
        background: props.bgColor,
        marginTop: rhythm(4),
        paddingBottom: rhythm(2),
        zIndex: 0,
        ':before': {
          background: `inherit`,
          content: "''",
          display: `block`,
          height: `80%`,
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          transform: `skewY(-0.5deg)`,
          transformOrigin: `0% 0`,
          zIndex: -1,
        },
        ':after': {
          background: `inherit`,
          content: "''",
          display: `block`,
          height: `90%`,
          position: `absolute`,
          bottom: 0,
          left: 0,
          right: 0,
          transform: `skewY(3deg)`,
          transformOrigin: `0%`,
          zIndex: -1,
        }
      }}
    >

      {
        <div css={{visibility: `hidden`}}>
          <div css={{ background: `url(${props.images.hovered.src}) no-repeat -9999px -9999px` }}></div>
          <div css={{ background: `url(${props.images.down.src}) no-repeat -9999px -9999px` }}></div>
        </div>
      }

      <div
        css={{
          display: `flex`,
          flexFlow: `column`,
          alignItems: `center`,
          marginTop: rhythm(-5),
        }}
      >
        {props.ctaText}

        <a href='http://eepurl.com/cM3shf' target='_blank' css={{border: `none`}}>
          <button
            css={{
              background: `url(${props.images.up.src})`,
              backgroundSize: `cover`,
              height: 110,
              width: 110,
              ':hover': {
                background: `url(${props.images.hovered.src})`,
                backgroundSize: `cover`,
                cursor: `pointer`
              },
              ':active': {
                background: `url(${props.images.down.src})`,
                backgroundSize: `cover`,
              },
              ':focus': {
                background: `url(${props.images.down.src})`,
                backgroundSize: `cover`,
                outline: `none`
              },
            }}
          />
      </a>
      </div>

      <div
        css={{
          maxWidth: `80.9%`,
          marginTop: rhythm(1)
        }}
      >
        <img
          alt={props.images.asteriskBlue.name}
          src={props.images.asteriskBlue.base64}
          css={{
            width: 20,
            float: `left`,
            marginLeft: -15
          }}
        />
        <p
          css={{
            color: props.txtColor,
            paddingLeft: 15
          }}
        >
          En m’inscrivant, je suis conscient que je pourrais recevoir <strong>LE cadeau-d’inscription-dont-tout-le-monde-parle</strong>
          <br />
          <span
            css={{
              color: COLOR1,
              fontWeight: `bold`,
              ':before': {
                content: '"> "'
              }
            }}
          >
          Les 100 premiers inscrits recoivent un cadeau et ensuite 1 personne sur 10 jusqu’au 1000ème inscrit !!!
          </span>
          <br />
            Wanna Play sera <strong>toujours gratuit pour les particuliers</strong> et ton email reste en sécurité dans notre base de données
        </p>
      </div>

    </section>
  )
}

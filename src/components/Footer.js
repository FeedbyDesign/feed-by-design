import React from 'react'

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

export default () => {
  return (
    <footer
      css={{
        background: COLOR1,
        color: COLOR4,
        position: `relative`,
        zIndex: 0,
        // paddingTop: rhythm(2),
        marginTop: rhythm(1),
        display: `flex`,
        flexFlow: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        ':before': {
          background: `inherit`,
          content: "''",
          display: `block`,
          height: `100%`,
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          transform: `skewY(-2deg)`,
          transformOrigin: `0% 0`,
          zIndex: -1,
        },
      }}
    >

      <div
        css={{
          marginBottom: rhythm(1),

        }}
      >
        <a href='https://www.facebook.com/WannaPlayBE/' target='_blank'>Facebook
        </a> - <a href='http://eepurl.com/cM3shf' target='_blank'>
        Inscription</a>
      </div>
      <p css={{textAlign: `center`, fontSize: rhythm(.6), lineHeight: rhythm(.8),}}>
        © Wanna Play - Idée originale d'Eric Coët<br />
        Identité graphique et site web par <a
          href='http://www.feedbydesign.com/'
          css={{
            border: `none`,
            fontWeight: `bold`,
            ':hover': {
              color: `rgb(43, 201, 175)`,
            }

          }}
        >Feed by Design</a>
      </p>

    </footer>
  )
}

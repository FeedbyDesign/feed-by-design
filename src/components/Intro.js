import React from 'react'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

export default (props) => {
  return (
    <section
      css={{
        ':after': {
          content: '""',
          height: rhythm(4.236)
        }
      }}
    >
      <img
        alt='Wanna Play'
        src={props.image.src}
        srcSet={props.image.srcSet}
        sizes={`${presets.phablet} 350px, 61.8vw`}
        css={{
          margin: `${rhythm(2.618)} ${rhythm(.618)}`,
          maxWidth: `90%`,
        }}
      />
      <h1
        css={{
          width: `85.4%`,
          maxWidth: 725
        }}
      >
        La plateforme communautaire pour organiser tes soirées jeux
      </h1>
    </section>
  )
}

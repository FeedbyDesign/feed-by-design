import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

export default () => {
  return (
    <section
      css={{
        ':before': {
          content: '""',
          height: rhythm(2)
        },
        ':after': {
          content: '""',
          height: rhythm(2)
        }
      }}
    >
      <div
        css={{
          maxWidth: `90%`,
          borderRadius: 50,
          background: COLOR3,
          padding: `${rhythm(1.618)} ${rhythm(.618)}`,
          color: COLOR4,
          zIndex: 0,
          [presets.Tablet]: {
            width: `85.4%`,
            maxWidth: 980,
            padding: rhythm(1.618),
          }
        }}
      >
        <p>
          Wanna Play est en version Pré-Sub-Alpha ! ^^
        </p>
        <p>
          Les <strong>premières soirées jeux Wanna Play</strong> sont prévues pour le <strong>mois de mai</strong>.<br />
        </p>
        <p>
          Si le projet (aussi mystérieux soit-il) t'emballe, <strong>on voudrait te rencontrer</strong>.<br />
          On est à la recherche d'<strong>ambassadeurs motivés</strong> pour organiser des soirées jeux chez eux ou dans un lieu public à <strong>Bruxelles</strong>. Plein de <strong>cadeaux</strong> en perspective là aussi ;)
        </p>
        <p><Link to={'/contact/'}>Contact</Link></p>
      </div>
    </section>
  )
}

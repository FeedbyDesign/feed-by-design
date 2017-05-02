import React from 'react'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// import arrow from '../../static/images/fleche.png'
// import questionMark from '../../static/images/PointdInterrogation.png'
// import asteriskBlue from '../../static/images/asterisque1.png'
// import asteriskRed from '../../static/images/asterisque2.png'

export default (props) => {
  const asteriskRed = props.images.asteriskRed.base64

  return (
    <div>

      <section
        css={{
          position: `relative`,
          maxWidth: `90%`,
          borderRadius: 20,
          background: COLOR4,
          margin: `${rhythm(-1)} auto`,
          padding: `${rhythm(1.618)} ${rhythm(.5)}`,
          boxShadow: `3px 3px 2px rgba(0, 0, 0, 0.2)`,
          textAlign: `center`,
          zIndex: 1,
          [presets.Tablet]: {
            maxWidth: `61.8%`,
            padding: rhythm(1.618),
          }
        }}
      >
        <h3>
          Si tu es là,<br />
          c’est que tu apprécies une bonne petite partie
          de JdS
          <img
            src={asteriskRed}
            css={{
              width: 10,
              margin: 2,
              paddingBottom: rhythm(.3),
              [presets.Tablet]: {
                paddingBottom: rhythm(.5),
              }
            }}
          />
          <img
            src={asteriskRed}
            css={{
              width: 10,
              margin: 2,
              paddingBottom: rhythm(.3),
              [presets.Tablet]: {
                paddingBottom: rhythm(.5),
              }
            }}
          />
          de temps en temps...
        </h3>
        <h3>
          Nous aussi !<br />
          Nous pensons que l’accès au jeu est un droit
          humain au même titre que le droit de vote,
          l’accès au travail ou le droit de rater un épisode
          de Game of Thrones sans être spoilé.
        </h3>
        <h4
          css={{
            marginBottom: 0,
            position: `absolute`,
              right: rhythm(1),
              bottom: rhythm(0.618)
          }}
        >
          <img
            src={asteriskRed}
            css={{
              width: 10,
              float: `left`,
              margin: 2
            }}
          />
          <img
            src={asteriskRed}
            css={{
              width: 10,
              float: `left`,
              margin: 2
            }}
          />
        JdS = Jeux de Société
        </h4>
      </section>

      <section
        css={{
          background: COLOR2,
          position: `relative`,
          zIndex: 0,
          paddingTop: rhythm(2),
          ':before': {
            background: `inherit`,
            content: "''",
            display: `block`,
            height: `90%`,
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            transform: `skewY(-2deg)`,
            transformOrigin: `0% 0`,
            zIndex: -1,
          },
          ':after': {
            content: '""',
            height: rhythm(2)
          }
        }}
      >
        <h2
          css={{
            maxWidth: `85.4%`,
            textAlign: `center`,
            marginBottom: 0,
          }}
        >
          Tout le monde devrait pouvoir jouer à son jeu préféré près de chez lui et quand ça l’arrange
        </h2>
      </section>

      <section
        css={{
          position: `relative`,
          width: `100%`,
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
        <img
          alt=' '
          src={props.images.questionMark.src}
          srcSet={props.images.questionMark.srcSet}
          sizes={`23vw`}
          css={{
            display: `none`,
            position: `absolute`,
              right: 0,
              bottom: rhythm(2),
            zIndex: 2,
            maxHeight: 415,
            [presets.Tablet]: {
              display: `block`,
            }
          }}
        />

        <div
          css={{
            position: `relative`,
            width: `90%`,
            background: COLOR4,
            padding: rhythm(.618),
            boxShadow: `3px 3px 2px rgba(0, 0, 0, 0.2)`,
            fontWeight: `bold`,
            zIndex: 1,
            [presets.Tablet]: {
              width: `61.8%`,
              padding: rhythm(1.618),
              transform: `rotate(-3deg)`,
            }
          }}
        >
          <h3 css={{color: COLOR2, fontFamily: `"Permanent Marker",cursive`, fontWeight: `400`}}>Si tu as déjà...</h3>
          <ul>
            <li>trépigné pendant 2 semaines à l'idée de jouer à ton nouveau jeu préféré sans trouver personne avec qui l'ouvrir</li>
            <li>eu envie de tester les derniers jeux sortis dans les bacs</li>
            <li>voulu jouer là, maintenant, tout de suite mais trouvé la première soirée 1 mois plus tard</li>
            <li>voulu rassembler tes potes et te retrouvé à devoir négocier entre un fan de Monopoly et l'autre de Time's up!</li>
          </ul>
        </div>
      </section>

      {/*
        <div css={{position: `relative`}}>
          <img
            src={props.images.arrow.src}
            srcSet={props.images.arrow.srcSet}
            sizes={`50vw`}
            css={{
              width: `50%`,
              height: 550,
              marginLeft: 20,
              // marginTop: -100,
              position: `absolute`,
                top: -170,
            }}
          />
        </div>
      */}

      <section
        css={{
          position: `relative`,
          maxWidth: `85.4%`,
          padding: rhythm(1.618),
          textAlign: `center`,
          margin: `auto`,
          // marginBottom: rhythm(2)//12 with arrow
        }}
      >
        <h3 css={{color: COLOR2}}>
          Bref, si pour toi aussi le JdS
          <img
            src={asteriskRed}
            css={{
              width: 10,
              margin: 2,
              paddingBottom: rhythm(.3),
              [presets.Tablet]: {
                paddingBottom: rhythm(.5),
              }
            }}
          />
          <img
            src={asteriskRed}
            css={{
              width: 10,
              margin: 2,
              paddingBottom: rhythm(.3),
              [presets.Tablet]: {
                paddingBottom: rhythm(.5),
              }
            }}
          />
          est un hobby, rejoins-nous et viens donner ton avis sur la construction de TA communauté
        </h3>
        <h4
          css={{
            marginBottom: 0,
            position: `absolute`,
              right: rhythm(1),
              bottom: rhythm(0.618)
          }}
        >
          <img
            src={asteriskRed}
            css={{
              width: 10,
              float: `left`,
              margin: 2
            }}
          />
          <img
            src={asteriskRed}
            css={{
              width: 10,
              float: `left`,
              margin: 2
            }}
          />
          JdS = Jeux de Société
        </h4>
      </section>
      <div css={{
        width: `100%`,
        display: `flex`
      }}>
        <img
          src={props.images.arrow.src}
          srcSet={props.images.arrow.srcSet}
          sizes={`20px`}
          css={{
            margin: `0 auto 40px`,
          }}
        />
      </div>

    </div>
  )
}

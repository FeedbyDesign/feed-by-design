import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'

import ContactForm from '../components/ContactForm'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


const formSettings = {
  form: {
    name:"waitingList-english",
    fields: [
      {type:"text", name:"name", placeholder:"First name or gamer nickname ;)", required:"required"},
      {type:"email", name:"email", placeholder:"Email", required:"required"},
      {type:"textarea", name:"message", placeholder:"Something to tell us?", rows:"4"},
      {type:"submit", value:"submit"}
    ],
    before: [
      <p css={{marginBottom: 30}}>
        We are not quite ready to launch in English but the waiting list is open.
        Drop your email here and we will be happy to let you know as soon as we get there.
      </p>
    ],
    after: [
      <p css={{...scale(-0.168)}}>
        * if you want to help with translation, that would be awesome. Tell us in the comment box please.
      </p>
    ]
  },
  success: {
    before: [
      <p>Thanks!</p>,
      <p>If you understand a bit of french, don't hesitate to <a href='http://eepurl.com/cM3shf' target='_blank'>subscribe</a> to the list!</p>,
      <p>You can also check our <a href='https://www.facebook.com/WannaPlayBE/' target='_blank'>Facebook page</a></p>
    ]
  },
  error: {
    before: [
      <p>!</p>,
      <p>
        Oops, something went wrong...
      </p>,
      <p>
        Please contact us by <a href={`mailto:${typeof window !== 'undefined'?'info@wanna-play.be':''}`} target="_top">e-mail
        </a> or on <a href='https://www.facebook.com/messages/t/user:1309060675843842#_=_' target='_blank'>Facebook
      </a>.
      </p>
    ]
  }
}


class English extends React.Component {

  render() {
    return (
      <div
        css={{
          background: COLOR1,
          color: COLOR4,
          width: `90vw`,
          maxWidth: 600,
          minHeight: `50vh`,
          margin: `auto`,
          padding: 30,
          borderRadius: 20,
          position: `relative`,
          zIndex: 10,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`
        }}
      >
        <Helmet>
          <html lang="en" />
          <title>English waiting list form</title>
          <meta property="og:title" content="English waiting list form | Wanna-Play.be" />
          <meta name="description" content="Come and tell us if you would like to see Wanna Play in English" />
          <meta property="og:description" content="Come and tell us if you would like to see Wanna Play in English" />
          <link rel="canonical" href="https://www.wanna-play.be/english/" />
          <meta property="og:url" content="https://www.wanna-play.be/english/" />
        </Helmet>

        <ContactForm formSettings={formSettings} location={this.props.location} />

      </div>
    )
  }
}

export default English

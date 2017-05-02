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
    name:"main-contact",
    fields: [
      {type:"text", name:"name", placeholder:"Nom ... ou Pseudo de gamer ;)", required:"required"},
      {type:"email", name:"email", placeholder:"Email", required:"required"},
      {type:"textarea", name:"message", placeholder:"message", rows:"8", required:"required"},
      {type:"submit", value:"envoyer"}
    ],
    before: [
      <p css={{marginBottom: 30}}>
        ...par <a href={`mailto:${typeof window !== 'undefined'?'info@wanna-play.be':''}`} target="_top">email
        </a>, <a href='https://www.facebook.com/WannaPlayBE/' target='_blank'>Facebook
        </a> ou en remplissant ce formulaire:
      </p>
    ]
  },
  success: {
    before: [
      <p>bien joué !</p>,
      <p>Viens nous suivre sur <a href='https://www.facebook.com/WannaPlayBE/' target='_blank'>Facebook</a></p>
    ]
  },
  error: {
    before: [
      <p>!</p>,
      <p>
        Quelque chose ne va pas...
      </p>,
      <p>
        Contacte-nous par <a href={`mailto:${typeof window !== 'undefined'?'info@wanna-play.be':''}`} target="_top">e-mail
        </a> ou par <a href='https://www.facebook.com/messages/t/user:1309060675843842#_=_' target='_blank'>Facebook
        </a> stp.
      </p>
    ]
  }
}

class Contact extends React.Component {

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

        }}
      >
        <Helmet>
            <title>Contact</title>
            <meta property="og:title" content="Contact | Wanna-Play.be" />
            <meta name="description" content="Contacte-nous par email, Facebook ou directement en remplissant notre formulaire" />
            <meta property="og:description" content="Contacte-nous par email, Facebook ou directement en remplissant notre formulaire" />
            <link rel="canonical" href="https://www.wanna-play.be/contact/" />
            <meta property="og:url" content="https://www.wanna-play.be/contact/" />
        </Helmet>

        <ContactForm formSettings={formSettings} location={this.props.location} />

      </div>
    )
  }
}

export default Contact


// <form name="main-contact" onSubmit={()=>submitForm(e)} data-netlify="true" data-netlify-honeypot="bot-field">
//   <p css={{display:`${typeof window !== 'undefined' ? 'none' : 'block'}`}}>
//     <input name="bot-field" placeholder='Juste un piège à Bot. Ne remplissez rien ici !' />
//   </p>
//   <p><input name="name" placeholder='Nom ... ou Pseudo de gamer ;)' required /></p>
//   <p><input
//     name="email" type="email" placeholder='Email' required
//     css={{
//       ':valid': {
//         background: `green`
//       },
//     }}
//   /></p>
//   <p><textarea name="message" placeholder='Message' required></textarea></p>
//   <input type="submit" value="Envoyer" />
// </form>

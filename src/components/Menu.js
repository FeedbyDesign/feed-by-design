import React from 'react'
import Link from 'gatsby-link'

export default () => {
  return (
    <nav css= {{
        display: `flex`,
        flexFlow: `row`,
        justifyContent: `space-around`,
      }}>
      <Link to={'/'}>Home</Link>
      <Link to={'/portfolio/'}>Portfolio</Link>
      <Link to={'/services/'}>Services</Link>
      <Link to={'/'}>How we work</Link>
      <Link to={'/'}>Price</Link>
      <Link to={'/about/'}>Feed by Design</Link>
      <Link to={'/'}>Contact</Link>
    </nav>
  )
}

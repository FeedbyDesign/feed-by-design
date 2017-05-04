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
      <Link to={'/'}>Portfolio</Link>
      <Link to={'/'}>Services</Link>
      <Link to={'/'}>How we work</Link>
      <Link to={'/'}>Price</Link>
      <Link to={'/'}>Feed by Design</Link>
      <Link to={'/'}>Contact</Link>
    </nav>
  )
}

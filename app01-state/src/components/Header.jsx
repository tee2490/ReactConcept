import React from 'react'
import logo from '../image/logo.png'

export default function Header() {
  return (
    <nav>
        <img src={logo} className='mb-4'/>
        <a href='/'>Home page</a>
    </nav>
  )
}

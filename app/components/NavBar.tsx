import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About_Me">About Me</Link>
          </li>
          <li>
            <Link href="/Resume">Full Resume</Link>
          </li>
          <li>
            <Link href="/Education">Education</Link>
          </li>
          <li>
            <Link href="/Portfolio">Skills and Portfolio</Link>
          </li>
          <li>
            <Link href="/Experiences">Experiences</Link>
          </li>
          <li>
            <Link href="/Awards">Awards and Recognitions</Link>
          </li>
        </ul>
      </nav>  
    )
}

export default NavBar
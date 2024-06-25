import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About_Me">About Me</Link>
          </li>
          <li>
            <Link href="/Experiences">Experiences</Link>
          </li>
        </ul>
      </nav>  
    )
}

export default NavBar
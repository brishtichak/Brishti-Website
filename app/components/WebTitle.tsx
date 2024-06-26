import Link from 'next/link'
import React from 'react'

const webtitle = () => {
    return (
        <>
            <Link href="/Contact_Me" className='contact'><p>Contact Me</p></Link>
            <div className="container">
                <img className='title' src="https://wallpapers.com/images/featured/black-and-white-book-ly06jlduizjwm5qv.jpg" alt="Brishti Chakraborty"></img>
                <div className="titletext">
                    <h1>Brishti Chakraborty</h1>
            </div>
            </div>
        </>
      )
}

export default webtitle
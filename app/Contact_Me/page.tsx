import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'

const cPage = () => {
    return (
        <div>
            <WebTitle></WebTitle>
            <NavBar/>
            <h2>Contact Me!</h2>
            
            <h3 className='firsth3 text-center'>Email: </h3>
            <p className='text-center'>brishtic03@gmail.com </p>

            <h3 className='text-center'>Phone Number: </h3>
            <p className='text-center'>571-919-9875 </p>
            <br></br>
            <br></br>

        </div>
      )
}

export default cPage
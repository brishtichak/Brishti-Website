import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'
import Footer from '../components/Footer'

const RPage = () => {
  return (
    <div>
        <WebTitle></WebTitle>
        <NavBar/>
        <h2>My Full Resume</h2>
        
        <iframe src="https://drive.google.com/file/d/1Ws9HJPr_sMlpQxESks0FHYYUl0Vcaxoo/view?usp=sharinghttps://drive.google.com/file/d/1Ws9HJPr_sMlpQxESks0FHYYUl0Vcaxoo/preview" width="750" height="600" allow="autoplay"></iframe>

        <Footer></Footer>
        
    </div>
  )
}

export default RPage
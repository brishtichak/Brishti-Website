import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'
import Footer from '../components/Footer'

const PPage = () => {
  return (
    <div>
        <WebTitle></WebTitle>
        <NavBar/>
        <h2>My Skills and Portfolio</h2>

        <h3 className='firsth3 text-center'>Programming and Software: </h3>
        <ul className="ulnoindent text-center">
          <li>Java </li>
          <li>Python </li>
          <li>HTML </li>
          <li>Javascript </li>
          <li>CSS </li>
          <li>Node.js </li>
          <li>React </li>
          <li>Next.js </li>
          <li>Mathematica </li>
          <li>Microsoft Office Suite </li>
          <li>Google Workplace </li>
        </ul>

        <h3 className='text-center'>GitHub: </h3>
        <a href = "https://github.com/brishtichak" className='text-center underline'> <p>brishtichak&apos;s GitHub</p></a>

        <h3 className='text-center'>Websites: </h3>
        <a href = "https://brishti-website.vercel.app/" className='text-center underline'> <p>My Personal Website</p></a>

        <h3 className='text-center'>Research: </h3>
        <ul className="ulnoindent text-center">
          <li>data collection and analysis </li>
          <li>research methodology </li>
          <li>usage of laboratory equipment </li>
          <li>scientific writing </li>
          <li>DNA extraction and sequencing </li>
          <li>chromatography </li>
          <li>gel electrophoresis </li>
          <li>centrifugation </li>
          <li>titrations </li>
        </ul>

        <h3 className='text-center'>Soft Skills: </h3>
        <ul className="ulnoindent text-center">
          <li>collaboration </li>
          <li>mentoring </li>
          <li>teaching </li>
          <li>academic and creative writing </li>
          <li>oral communication </li>
          <li>customer service </li>
          <li>cost analytics </li>
        </ul>

        <Footer></Footer>

    </div>
  )
}

export default PPage
import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'
import Footer from '../components/Footer'

const awPage = () => {
    return (
        <div>
            <WebTitle></WebTitle>
            <NavBar/>
            <h2>My Awards and Recognitions</h2>

            <ul className={"list-disc list-inside"}>
                <li>Gold President's Volunteer Service Award, August 2018 - 
                    received recognition for more than 100 hours of volunteer service </li>
                <li>RISE (Respect, Integrity, Service, Excellence) Award, 
                    Rock Ridge High School, 2019, 2020 </li>
                <li>Outstanding Student Award, Academies of Loudoun, 2019 </li>
                <li>Magna Cum Laude (third place), National Latin Exam, March 2019 </li>
                <li>Winner, ACL Speculative Fiction Contest, 2020 </li>
                <li>Winner, Naval Horizons Essay Contest, 2021 </li>
                <li>Participant, Loudoun County Regional Science and Engineering Fair, 
                    2022 - received recognition for methodology and use of SI units </li>
                <li>Dean's List at University of Virginia </li>
            </ul>

            <Footer></Footer>

        </div>
      )
}

export default awPage
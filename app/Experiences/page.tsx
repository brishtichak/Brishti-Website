import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'
import Footer from '../components/Footer'

const EPage = () => {
  return (
    <div>
        <WebTitle></WebTitle>
        <NavBar/>
        <h2>My Experiences</h2>
        
        <p>As someone who is passionate about learning and enjoys sharing 
          this passion, I have had several experiences with research and with
          tutoring througout my high school and college years. These 
          experiences greatly influenced the way I view collaboration and 
          cooperation, helping me grow as a student and as a person while
          helping me improve my oral and written communication skills. They,
          as well as all my other experiences, shaped me into the dedicated 
          and hardworking person I am, allowing me to grow more confident 
          and to develop organizational and communcation skills that are so 
          critical in a professional environment. </p>
        
        <h3><em>Teacher,</em> Academy for Enrichment, Ashburn, VA, 
        June 2023 - August 2023 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Managed logistics for the summer camp and structured 
              day-to-day activities to best meet the needs of the students 
              and the wants of the parents </li>
          <li>Worked with elementary school students on their math, 
              reading, and writing skills and encouraged their capacity to 
              grow as students </li>
          <li>Communicated with parents regarding students&apos; progress and 
              adjusted plans based on feedback and the different strengths 
              and weaknesses of each individual student </li>
        </ul>
        
        <h3><em>Research Assistant,</em> University of Virginia&apos;s College 
        at Wise, January 2023 - May 2023 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Documented the research process and aided the professor with inventory </li>
          <li>Learned of the management and usage of various equipment </li>
          <li>Performed the steps of DNA extraction and analyzed the results 
            of sequencing using a database to assist in identification of 
            various samples </li>
        </ul>
        
        <h3><em>Intern,</em> Leading Ladies Initiative, Merritt Properties, 
        June 2021 - July 2021 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Utilized the opportunity to network with leaders from various corporations </li>
          <li>Interned at Merritt Properties and looked into the process of 
            building, decorating, and leasing buildings </li>
          <li>Communicated with members of various teams in Merritt Properties 
            to achieve a more holistic understanding of the company </li>
        </ul>
        
        <h3><em>Student/Intern,</em> Virginia Aerospace Science and 
        Technology Scholars (VASTS), Goddard Space Flight Center, 
        November 2020 - July 2021 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Researched and designed missions and pieces of technology, 
            learned how to compose a mission proposal, and created mission 
            designs as part of the virtual training program </li>
          <li>Networked and engaged with both mentors and experts in the 
            fields of aerospace science and technology, completed the summer 
            academy by collaborating with various teams to develop a mock 
            mission to Mars, and presented ideas in front of a panel </li>
        <li>Cooperated with the team in designing the habitat, 
            life support systems, power system, and methods for in-situ 
            resource utilization and managed the finances for the team, 
            analyzed the cost for the proposed ideas, and communicated 
            with other teams via meetings </li>
        </ul>

        <h3><em>Author/Editor,</em> Rock Ridge Arts and Literature Magazine, 
        Ashburn, VA, October 2020 - May 2021 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Analyzed writing and art pieces to decide which ones would be 
            published </li>
          <li>Worked with the team to develop the website that served as the 
            magazine and assisted in organizing the pieces so that they were 
            published in a way that was visually pleasing and made sense to 
            the proposed readers </li>
          <li>Wrote a piece which was picked by the others in the team and 
            published in the magazine </li>
        </ul>

        <h3><em>Volunteer,</em> Science National Honor Society, Ashburn, VA, 
        October 2020 - May 2021 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Utilized the opportunity to network with those who are 
            successful in various scientific fields </li>
          <li>Spent time in creating educational videos and supplementary 
            worksheets to assist elementary school students with their 
            science fair projects and to help garner an interest in science 
            among the youth </li>
          <li>Worked to demonstrate the four pillars of scholarship, service, 
            leadership, and character through my work in the honor society </li>
        </ul>

        <h3><em>Tutor/Assistant,</em> Kumon, Ashburn, VA, April 2019 - March 2020 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Tutored elementary school students in core subjects to ensure 
            the development of good academic and organizational habits </li>
          <li>Assisted in the day-to-day maintenance of the center by 
            performing such duties as grading, cleaning, removing trash, 
            organizing, etc. </li>
          <li>Tutored the youngest students (ages 4 - 8) to help them create reading 
            and writing skills and encouraged older students (ages 9 - 14) 
            to further develop skills and grow confident in their academic 
            abilities </li>
        </ul>

        <h3><em>Tutor/Volunteer,</em> INMED Family & Youth Opportunity Center, 
        Sterling, VA, April 2018 - August 2018 </h3>
        <ul className={"list-disc list-inside"}>
          <li>Tutored elementary school students in core subjects and 
            assisted with the organization of the facility </li>
          <li>Assisted in implementing events outside of the after school 
            program to further help families in the area </li>
          <li>Managed the logistics for the summer camp program for 
            4 - 12-year-olds </li>
        </ul>

        <Footer></Footer>

    </div>
  )
}

export default EPage
import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'
import Footer from '../components/Footer'

const edPage = () => {
    return (
        <div>
            <WebTitle></WebTitle>
            <NavBar/>
            <h2>My Education</h2>
            
            <p className='extrapadding'> I am currently a third-year student at the University of 
                Virginia. As a passionate student with a devoted interest in 
                the tools we can use to further explore our world and expand our 
                understanding, I chose to major in computer science and 
                minor in data science. </p>  

            <div className = 'edcontainer'>
                <div className ='edimage'>
                    <img src="https://news.virginia.edu/sites/default/files/article_image/spring-2021-header_ss.jpg" alt="UVA Grounds"></img>
                </div>
                <div className = 'edtext'>
                    <h3>University of Virginia, Charlottesville, VA </h3>
                    <p className='indentp'>Undergraduate Degree, August 2022 - present <br></br>
                        Graduation: May 2026 <br></br>
                        GPA: 3.7 <br></br>
                        Major: Computer Science <br></br>
                        Minor: Data Science <br></br>
                        Relevant Courses: </p>
                        <ul className='indentul'>
                            <li>Introduction to Programming <em>(Python)</em></li>
                            <li>Data Structures and Algorithms <em>(Java)</em></li>
                            <li>Introduction to Symbolic Logic </li>
                            <li>Introduction to Data Science </li>
                            <li>Writing and Critical Inquiry </li>
                            <li>Applied Linear Algebra </li>
                        </ul> 
                </div>
            </div>

            <div className = 'edcontainer'>
                <div className = 'edtext2'>
                    <h3>Rock Ridge High School, Ashburn, VA </h3>
                    <p className='indentp'>High School Diploma, August 2018 - June 2022 <br></br>
                        Graduation: June 2022 <br></br>
                        GPA: 4.49 </p>
                </div>
                <div className ='edimage2'>
                    <img src="https://imagescdn.homes.com/i2/zgYPocioMVFR_Q4ROH1pLYJouVGnPAn9dxjn8gmjKco/111/rock-ridge-high-school-ashburn-va-3-schoolphoto.jpg?p=1" alt="Rock Ridge High School"></img>
                </div>
            </div>

            <div className = 'edcontainer'>
                <div className ='edimage'>
                    <img src="https://www.stantec.com/content/dam/stantec/images/projects/0031/academies-of-loudoun-2.jpg" alt="The Academies of Loudoun"></img>
                </div>
                <div className = 'edtext'>
                    <h3>Loudoun Academy of Science Magnet Program, Leesburg, VA </h3>
                    <p className='indentp'>High School Diploma, August 2018 - June 2022 <br></br>
                        Graduation: June 2022 </p>
                </div>
            </div>

            <Footer></Footer>

        </div>
      )
}

export default edPage
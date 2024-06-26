import React from 'react'
import NavBar from '../components/NavBar'
import WebTitle from '../components/WebTitle'
import Footer from '../components/Footer'

const abPage = () => {
    return (
        <div>
            <WebTitle></WebTitle>
            <NavBar/>
            <h2>About Me</h2>
            
            <p> I love to read, write, and learn. Ever since I was little, 
                I&apos;ve enjoyed studying the world around me, and I was fascinated 
                by the many things I could find in the books and documentaries I 
                watched. Analyzing characters and stories became one of my favorite
                hobbies, and I grealy enjoyed learning about different subjects,
                cultures, and perspectives. Stories, both the ones I read and
                the ones I wrote, provided an escape, allowing me to travel to 
                different worlds and explore perspectives that could greatly 
                differ from mine. </p>
                
            <br></br>
            <p> I also became similarly passionate about teaching others 
                and learning more about different aspects of technology over 
                time, excited by how they allowed me to share what I know and 
                to experience so many different perspectives. Programming, 
                especially, captivated me with the amount of creativity and 
                diversity in the ideas that can come out of one problem. 
                There is so much you can learn from others and then create 
                on your own, and I adored it. </p>
                
            <br></br>
            <p> I have thus decided to pursue my love of programming at UVA, 
                and outside of my coursework, I have taken an interest in 
                learning the process of professional software development 
                and in AI training. There are so many things software and AI 
                models are capable of, and I truly enjoy using these tools 
                to develop different solutions and to help us make our lives 
                and research easier. </p>

            <Footer></Footer>

        </div>
      )
}

export default abPage
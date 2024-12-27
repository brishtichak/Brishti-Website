import Link from "next/link";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WebTitle from "./components/WebTitle";

export default function Home() {
  return (
    <main>
      <div>
        <WebTitle></WebTitle>
        <NavBar/>
        <h2>
          Welcome!
        </h2>
        
        <p> Welcome to my webpage. My name is Brishti Chakraborty, 
          and I am a CS major and data science minor at the University of Virginia. 
          I have a passion for learning and am known for my wide range of interests, 
          and I greatly enjoy bringing this passion with me wherever I go. 
          To learn more about me and what kinds of things I have been 
          involved with over the years, please use the navigation tools to 
          look through my virtual resume.</p>

        <br></br>
        <br></br>
        <a href="/Resume">
            <button>View My Full Resume</button>
        </a>

          <Footer></Footer>
      </div>
    </main>
  );
}

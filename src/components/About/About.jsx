import { useContext, useState, useRef } from "react";
import { MyContext } from "../../App";
import "./about.css";
import AboutCards from "./AboutCards";

export default function About() {
  
  return (
    <div className="aboutDesk">
      <div className="aboutMeDesc">
        <h1>Who am I?</h1>
        <p className="aboutMePara">
          My Name is Salma, I am from India, I have completed Bachelors in
          Technology in the area of Telecommunications. Since my college days I
          am passionate about programming. Immediately after my graduation I got
          placed in to MNC's and I worked as a Software Tester , where I learned
          and explored Java and testing framework called Selenium.Then I took a
          break in my career in order to take care of my son. But, my learning
          curve has never stopped. I learned Python, German language till B1. I
          got certified as Foundation Level Tester from ISTQB. I decided to
          change my carrer towards Development and took Weiterbildung(Further
          Education) training from a German Institue called DCI and it was
          funded by Governments Job Center based on my performance. In this
          course I excelled in HTML5,CSS,Saas,BootStrap,JavaScript, React.
        </p>
      </div>
      <div
        className="projectContainer"
       
        onScroll={(e) => console.dir(e.currentTarget.scroll)}
      >
       
        <h1>My Projects</h1>
        <p className="myProjectsPara">
          Following are the projects which I worked on right from the beginning
          of Front-End Development topics like Html5,CSS,Scss,JavaScript and
          React.You have have a look at all my projects which showcases my
          knowledge and this portfolio is a part of my project built using
          React.js.
        </p>
      

        <AboutCards />
      
      </div>
    </div>
  );
}

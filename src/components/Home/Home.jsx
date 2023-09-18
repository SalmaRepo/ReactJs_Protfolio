import HomeImg from "./HomeImages/back.png";
import { Link,Route,BrowserRouter,Routes } from "react-router-dom";
import "./Home.css";
import { useState, useRef, useEffect, useContext } from "react";

import Contact from "../Contact/Contact";

import About from "../About/About";
import Work from "../Work/workComponents/Work";
import WorkProvider from "../Work/workContexts/WorkProvider";
import { MainContext } from "../../contexts/MainContext/mainContext";

export default function Home() {
  const view = useRef();
console.log(window.scrollY) 
  const {showAbout,setShowAbout,showContact,setShowContact}=useContext(MainContext)
/*   const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log(scrollY)
    if (scrollY >= 0 && scrollY < window.innerHeight) {
      setShowAbout(true);
      setShowContact(false);
    } else if (
      scrollY > innerHeight &&
      scrollY < innerHeight
    ) {
     setShowAbout(false); 
      setShowContact(true);
    } else {
      setShowAbout(false);
      setShowContact(false);
    }
  }; */


  


 /*  useEffect(() => {
    window.addEventListener("wheel", ()=>handleScroll());
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); */

  return (
    <>
    
  
    <div className="homeDesk">
      <div>
        <img className="homeImgDesk" src={HomeImg} alt="" />
        <div className="deskDesc">
          <h2 className="hello">Hello,</h2>
          <h1 className="name">
            I'm <span className="nameDesk">Salma</span>
          </h1>
          <h2 className="webDev">Web Developer.</h2>
          <p>
            A passionate Fresher aiming to develop beautiful and highly
            functionalWeb Sites with all the knowledge I gained since past few
            years. Have alook at my Profile !!
          </p>
        </div>
      </div>

    
    </div>
  
   {/*  <section>{showAbout && <About />}</section>
      <section>{showContact && <Work/>}</section>
   */}
 
    </>
  );
}

import HomeImg from "./HomeImages/back.png";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import "./Home.css";
import { useState, useRef, useEffect, useContext, useCallback } from "react";

import Contact from "../Contact/Contact";

import About from "../About/About";
import Work from "../Work/workComponents/Work";
import WorkProvider from "../Work/workContexts/WorkProvider";
import { MainContext } from "../../contexts/MainContext/mainContext";

export default function Home() {
  const view = useRef();
  const skillsHome = [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
  ];
  const [techDisp, setTechDisp] = useState(skillsHome[0]);

  const { showAbout, setShowAbout, showContact, setShowContact } =
    useContext(MainContext);
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

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * skillsHome.length);
    setTechDisp(skillsHome[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <div id="Home">
        <div className="homeDesk">
          <img className="homeImgDesk" src={HomeImg} alt="" />
          <div className="deskDesc">
            <h2 className="hello">Hello,</h2>
            <h2 className="name">
              I'm <span className="nameDesk">Salma Sheik</span>
            </h2>
            <h3 className="webDev" 
             style={{ color: getRandomColor(), fontWeight: "bold" ,fontSize:"2rem"}}
              >{techDisp}
              <span className="cursorHome" style={{ color: getRandomColor() }}>
                |
              </span>
            </h3>
            <p className="homeDesPara">
              Passionately looking forward to contribute my
              technical skills and creativity to a dynamic web development team.
              Committed to delivering visually appealing and user-friendly web
              solutions that enhance the user experience. Seeking an opportunity
              to apply and expand my knowledge in full-stack web development while
              continuously learning and adapting to emerging technologies.
            </p>

            <a className="hireMeAnim" href="#Contact">
              <i className="fa-solid fa-earth-europe"></i> Open to Work.
            </a>
          </div>
        </div>
      </div>

      {/*  <section>{showAbout && <About />}</section>
      <section>{showContact && <Work/>}</section>
   */}
    </>
  );
}

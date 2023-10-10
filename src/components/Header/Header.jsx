import { useState, useEffect, useContext } from "react";
import "./Header.css";
import Home from "../Home/Home";
import About from "../About/About";
import Work from "../Work/workComponents/Work";
import { MainContext } from "../../contexts/MainContext/mainContext";
import { ThemeContext } from "../../contexts/ThemeContext/contextTheme";

export default function Header() {
  const {toggleTheme,theme}=useContext(ThemeContext);
  const [display, setDisplay] = useState(false);
  const [deskDisplay, setDeskDisplay] = useState(window.innerWidth >760);
  const [close, setClose] = useState(true);


  useEffect(() => {
   
const test = ()=>{

if(window.innerWidth <=760){
  setDeskDisplay(false)
} else if(window.innerWidth >760){
  setDeskDisplay(true)
}

}
window.addEventListener("resize", test)

      
  return ()=>  window.removeEventListener("resize", test) 
  }, []);

  
/* 
  function barsClass() {
    let className = "";
    if (display) {
      return (className = `barsAnim`);
    }
  } */

  function navClass() {
    let className = "";
    if (deskDisplay) {
      return (className = `navLinks`);
    } else {
      return (className = `navLinksMobil`);
    }
  }

 

  return (
    <div>
      <nav className="navbar">
        <div className="logo">{`{SS}`}</div>
        <div className="deskNav">


{deskDisplay ? (
            <ul className='navLinks'>
              <li>
                <a className="headerNav" href="#Home">Home</a>
              </li>
              <li>
              <a className="headerNav" href="#About">About</a>
              </li>
              <li>
              <a className="headerNav" href="#Work">Work</a>
              </li>
              <li>
              <a className="headerNav headerNavContact" href="#Contact">Contact</a>
              </li>
              <li>
               {/* <div>
                <a className="headerNav" href="#Contact">EN  |</a>
                <a className="headerNav" href="#Contact">  GE </a>
                </div> */}
           
              </li>
            </ul>
          ): <ul className='navLinksMobil'>
           
          <li>
            <a className="headerNavMobil" href="#Home"><i className="fa-solid fa-house"></i><p className="navName">Home</p></a>
          </li>
          <li>
          <a className="headerNavMobil" href="#About"><i className="fa-solid fa-user"></i><p className="navName">About</p></a>
          </li>
          <li>
          <a className="headerNavMobil" href="#Work"><i className="fa-solid fa-briefcase"></i><p className="navName">Work</p></a>
          </li>
          <li>
          <a className="headerNavMobil" href="#Contact"><i className="fa-solid fa-envelope"></i><p className="navName">Contact</p></a>
          </li>
        </ul> }


         {/*    {display&&<ul className={`${navClass()}`}>
           
              <li>
                <a className="headerNavMobil" href="#Home"><i className="fa-solid fa-house"></i><p className="navName">Home</p></a>
              </li>
              <li>
              <a className="headerNavMobil" href="#About"><i className="fa-solid fa-user"></i><p className="navName">About</p></a>
              </li>
              <li>
              <a className="headerNavMobil" href="#Work"><i className="fa-solid fa-briefcase"></i><p className="navName">Work</p></a>
              </li>
              <li>
              <a className="headerNavMobil" href="#Contact"><i className="fa-solid fa-envelope"></i><p className="navName">Contact</p></a>
              </li>
            </ul>} */}
          



          <button className="Theme" onClick={()=>toggleTheme()}>
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

       {/*    <i
            className={`fa-solid fa-bars ${barsClass()}`}
            onClick={() => {
              setDisplay(!display);
              setClose(!close);
              setDeskDisplay(false);
            }}
          >
          
          </i> */}
        </div>
      </nav>
    </div>
  );
}

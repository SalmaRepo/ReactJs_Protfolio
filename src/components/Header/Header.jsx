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
  const [deskDisplay, setDeskDisplay] = useState(true);
  const [close, setClose] = useState(true);

  function barsClass() {
    let className = "";
    if (display) {
      return (className = `barsAnim`);
    }
  }

  function navClass() {
    let className = "";
    if (deskDisplay) {
      return (className = `navLinks`);
    } else {
      return (className = `navLinksMobil`);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 760) {
        setDeskDisplay(false);
        setDisplay(!display);
      }
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">{`{S.S}`}</div>
        <div className="deskNav">
{/*           {deskDisplay && (
            <ul className={`${navClass()}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          )}

          {display && (
            <ul className={`${navClass()}`}>
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setDisplay(false);
                }}
              ></i>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          )} */}

{deskDisplay && (
            <ul className={`${navClass()}`}>
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
                <div>
                <a className="headerNav" href="#Contact">EN  |</a>
                <a className="headerNav" href="#Contact">  GE </a>
                </div>
           
              </li>
            </ul>
          )}

{display && (
            <ul className={`${navClass()}`}>
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setDisplay(false);
                }}
              ></i>
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
              <a className="headerNav" href="#Contact">Contact</a>
              </li>
            </ul>
          )}

          <button className="Theme" onClick={()=>toggleTheme()}>
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          <i
            className={`fa-solid fa-bars ${barsClass()}`}
            onClick={() => {
              setDisplay(!display);
              setClose(!close);
              setDeskDisplay(false);
            }}
          >
          
          </i>
        </div>
      </nav>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ theme, toggleTheme }) {
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
    <nav className="navbar">
      <div className="logo">{`{S.S}`}</div>
      <div className="deskNav">
        {deskDisplay && (
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
              class="fa-solid fa-xmark"
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
        )}

        <button className="Theme" onClick={toggleTheme}>
          {theme === "dark" ? (
            <i class="fa-solid fa-sun"></i>
          ) : (
            <i class="fa-solid fa-moon"></i>
          )}
        </button>

        <i
          class={`fa-solid fa-bars ${barsClass()}`}
          onClick={() => {
            setDisplay(!display);
            setClose(!close);
            setDeskDisplay(false);
          }}
        >
          {" "}
        </i>
      </div>
    </nav>
  );
}

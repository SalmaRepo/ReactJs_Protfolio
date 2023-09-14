import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import NotFound from "./components/NotFound";
import { createContext } from "react";

import Work from "./components/Work/Work";

export const MyContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [projectDescDisplay, setProjectDescDisplay] = useState(false);
  const [projectId, setProjectId] = useState("");


  const [like, setLike] = useState(false);

  const projects = [
    {
      id: 0,
      title: "Calculator",
      gitLink: "https://salmarepo.github.io/Calculator/",
      description: [
        { title: "Calculator" },
        { code: "link" },
        { codeStack: "Html,CSS,JavaScript" },
        {
          brief:
            "This is a simple calculator app.You can perform all the basic mathematical operations.It is completely responsive.This app also allows you to perform operations in decimals"
        },
      ],
    },
    {
      id: 1,
      title: "Age-Calculator",
      gitLink: "https://salmarepo.github.io/Age-Calculator/",
      description: [
        { title: "Age-Calculator" },
        { code: "link" },
        { codeStack: "Html,CSS,JavaScript" },
        { brief: "Age Calculator Application helps you find out your age based on the date,month and year of birth you entered on just one click.Try this Applicaton to know your age." },
      ],
    },
    {
      id: 2,
      title: "Rock-Paper-Scissor",
      gitLink: "https://salmarepo.github.io/Rock-Paper-Scissor-Game/",
      description: [
        { title: "hello" },
        { code: "link" },
        { codeStack: "Html,CSS,JavaScript" },
        { brief: "adshcbadhvcdhavcdahnmhgmhgvgmgmgmgjmc" },
      ],
    },
    {
      id: 3,
      title: "Shopping Cart",
      gitLink: "https://salmarepo.github.io/Rock-Paper-Scissor-Game/",
      description: [
        { title: "hello" },
        { code: "link" },
        { codeStack: "Html,CSS,JavaScript" },
        { brief: "adshcbadhvcdhavcdahnmhgmhgvgmgmgmgjmc" },
      ],
    },
    {
      id: 4,
      title: "Weather App",
      gitLink: "https://salmarepo.github.io/Rock-Paper-Scissor-Game/",
      description: [
        { title: "hello" },
        { code: "link" },
        { codeStack: "Html,CSS,JavaScript" },
        { brief: "adshcbadhvcdhavcdahnmhgmhgvgmgmgmgjmc" },
      ],
    },
  ];

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
        projects,
        projectDescDisplay,
        setProjectDescDisplay,
        projectId,
        setProjectId,
        like,
        setLike,
        
      }}
    >
      <BrowserRouter>
        <div style={{ width: "100vw", position: "relative" }} id={theme}>
          <Header toggleTheme={toggleTheme} theme={theme} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

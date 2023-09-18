import { MainContext } from "./mainContext";
import { useState } from "react";

export default function MainContextProvider({ children }) {

  const [projectDescDisplay, setProjectDescDisplay] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

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
            "This is a simple calculator app.You can perform all the basic mathematical operations.It is completely responsive.This app also allows you to perform operations in decimals",
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
        {
          brief:
            "Age Calculator Application helps you find out your age based on the date,month and year of birth you entered on just one click.Try this Applicaton to know your age.",
        },
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


  return (
    <MainContext.Provider
      value={{
        
        projects,
        projectDescDisplay,
        setProjectDescDisplay,
        projectId,
        setProjectId,
        like,
        setLike,
        showAbout,
        setShowAbout,
        showContact,
        setShowContact,
       
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

import { MainContext } from "./mainContext";
import { useState } from "react";

export default function MainContextProvider({ children }) {

  const [projectDescDisplay, setProjectDescDisplay] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [like, setLike] = useState(false);
  const [likeId,setLikeId]=useState("");
  const projects = [
    {
      id: 0,
      title: "Calculator",
      gitLink: "https://salmarepo.github.io/Calculator/",
      description: [
        { title: "Calculator" },
        { code: "https://github.com/SalmaRepo/Calculator" },
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
        { code: "https://github.com/SalmaRepo/Age-Calculator" },
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
        { title: "Rock-Paper-Scissor" },
        { code: "https://github.com/SalmaRepo/Rock-Paper-Scissor-Game" },
        { codeStack: "Html,CSS,JavaScript" },
        { brief: "Simple yet Tricky to code Rock paper scissor Game lets you play against computer and displays your win based on the score" }
      ],
    },
    {
      id: 3,
      title: "Shopping_Cart",
      gitLink: "https://shopping-cart-react-j4egt187y-salmarepo.vercel.app/",
      description: [
        { title: "Shopping Cart" },
        { code: "https://github.com/SalmaRepo/Shopping_Cart_React" },
        { codeStack: "Xml,CSS,JavaScript,React" },
        { brief: "This project replicates the shopping cart of an e-commerce application, filters the products based on size,Built in team, I contributed to majority of coding" },
      ],
    },
    {
      id: 4,
      title: "Movie_Search",
      gitLink: "https://movie-search-dh3add45u-salmarepo.vercel.app/",
      description: [
        { title: "Movie_Search" },
        { code: "https://github.com/SalmaRepo/Movie_Search" },
        { codeStack: "Xml,CSS,JavaScript,REACT" },
        { brief: "A simple project based on movie API fetch, lets you search for any movie, displays movie banner, release date and title " },
      ],
    },

    {
      id: 5,
      title: "Expenses_Tracker",
      gitLink: "https://expenses-i0pigovs7-salmarepo.vercel.app/",
      description: [
        { title: "Expenses_Tracker" },
        { code: "https://github.com/SalmaRepo/Expenses-React-App" },
        { codeStack: "Xml,CSS,JavaScript,ReactJs" },
        { brief: "Group Project with a dummy User Login Page, lets you track daily expenses and incomes and also displays History of individual Spendings on daily basis based" },
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
        likeId,
        setLikeId
       
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

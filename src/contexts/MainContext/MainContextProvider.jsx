import { MainContext } from "./mainContext";
import { useState } from "react";

export default function MainContextProvider({ children }) {
  const [projectDescDisplay, setProjectDescDisplay] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [like, setLike] = useState(
    localStorage.getItem("like") ? localStorage.getItem("like") : false
  );
  const [likeId, setLikeId] = useState(
    localStorage.getItem("likedId") ? localStorage.getItem("likedId") : ""
  );
  const [projectLike, setProjectLike] = useState(
    localStorage.getItem("projectLike")
      ? localStorage.getItem("projectLike")
      : { ["0"]: false }
  );

  const projects = [
    {
      id: 0,
      title: "Fullstack Expenses Tracker-Expensify",
      gitLink: "https://expensestracker-frontend.onrender.com/",
      description: [
        { title: "Expensify" },
        { code: "https://github.com/SalmaRepo/Expenses_Tracker_Frontend" },
        { codeStack: "MERN-stack,Chart.js" },
        {
          brief:
            "An Expenses and Income tracker, that helps you track your amounts and reciepts in daily, weekly, monthly and yearly basis",
        },
      ],
    },
    {
      id: 1,
      title: "Game of Thrones-Characters",
      gitLink: "https://salmarepo-game-of-thrones-api-frontend.onrender.com/",
      description: [
        { title: "Game of Thrones" },
        { code: "https://github.com/SalmaRepo/game-of-thrones" },
        { codeStack: "Vue.js" },
        {
          brief:
            "This applications helps you search for diefferent characters in Game of Thrones, their houses and their quotes.",
        },
      ],
    },
	    {
      id: 2,
      title: "Fullstack Online Book Store",
      gitLink: "https://github.com/SalmaRepo/FullStack_BookStore_Rent-Buy",
      description: [
        { title: "Online Book Store" },
        { code: "https://github.com/SalmaRepo/FullStack_BookStore_Rent-Buy" },
        { codeStack: "MERN-stack" },
        {
          brief:
            "An Online e-commerce application for Books",
        },
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
        {
          brief:
            "This project replicates the shopping cart of an e-commerce application, filters the products based on size,Built in team, I contributed to majority of coding",
        },
      ],
    },
	 {
      id: 4,
      title: "Frontend Expenses_Tracker",
      gitLink: "https://expenses-i0pigovs7-salmarepo.vercel.app/",
      description: [
        { title: "Expenses_Tracker" },
        { code: "https://github.com/SalmaRepo/Expenses-React-App" },
        { codeStack: "Xml,CSS,JavaScript,ReactJs" },
        {
          brief:
            "Group Project with a dummy User Login Page, lets you track daily expenses and incomes and also displays History of individual Spendings on daily basis based",
        },
      ],
    },
    {
      id: 5,
      title: "Movie_Search",
      gitLink: "https://movie-search-dh3add45u-salmarepo.vercel.app/",
      description: [
        { title: "Movie_Search" },
        { code: "https://github.com/SalmaRepo/Movie_Search" },
        { codeStack: "Xml,CSS,JavaScript,REACT" },
        {
          brief:
            "A simple project based on movie API fetch, lets you search for any movie, displays movie banner, release date and title ",
        },
      ],
    },

   
	
	    {
      id: 6,
      title: "Calculator",
      gitLink: "https://salmarepo.github.io/Calculator/",
      description: [
        { title: "Calculator" },
        { code: "https://github.com/SalmaRepo/Calculator" },
        { codeStack: "Html,CSS,JavaScript" },
        {
          brief:
            "This is a responsive calculator app.You can perform all the basic mathematical operations.This app also allows you to perform operations in decimals",
        },
      ],
    },
	{
      id: 7,
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
      id: 8,
      title: "Rock-Paper-Scissor",
      gitLink: "https://salmarepo.github.io/Rock-Paper-Scissor-Game/",
      description: [
        { title: "Rock-Paper-Scissor" },
        { code: "https://github.com/SalmaRepo/Rock-Paper-Scissor-Game" },
        { codeStack: "Html,CSS,JavaScript" },
        {
          brief:
            "Simple yet Tricky to code Rock paper scissor Game lets you play against computer and displays your win based on the score",
        },
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
        setLikeId,
        projectLike,
        setProjectLike,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

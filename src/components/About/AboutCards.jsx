import { useContext, useState, useEffect, useRef } from "react";

import { MainContext } from "../../contexts/MainContext/mainContext";
import "./aboutCards.css";
import ProjectDescription from "./ProjectDescription";

export default function AboutCards() {
  const {
    projects,
    setProjectDescDisplay,
    projectDescDisplay,
    setProjectId,
    projectId,
    setLike,
    like,

    likeId,
    setLikeId,
  } = useContext(MainContext);

  const scroll = useRef();

  return (
    <div style={{ display: "flex" }}>
      <div
        className="scrollerLeft"
        onClick={() => {
          if (window.innerWidth > 760) {
            scroll.current.scrollLeft -= 600;
          } else {
            scroll.current.scrollLeft -= 250;
          }
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="projectCardsContainer" ref={scroll}>
        {projects.map((project) => {
          return (
            <div key={project.id} id={project.id} className="projectCardStyle">
              <div className="projectCard-inner">
                <div className="projectCard-front">
                  <div
                   /*  href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer" */
                    className="imageLink"
                  >
                    <img
                      src={`./${project.title}.jpg`}
                      className="projectImageSize"
                      alt=""
                      onMouseOver={() => {
                        setProjectDescDisplay(true);
                        setProjectId(project.id);
                      }}
                    />
                  </div>
                </div>

                <div className="projectCard-back">
                  {project.id == projectId && projectDescDisplay && (
                    <ProjectDescription />
                  )}
                </div>
              </div>

              <h3
                className="projectTitle"
                /*      onMouseOver={(e) => {
                  
                  if (e.target.parentElement.id === `${project.id}`) {
                    setProjectDescDisplay(true);
                    setProjectId(e.target.parentElement.id);
                    
                  }
                }}
                onMouseOut={(e) => {
                  if (e.target.parentElement.id === `${project.id}`) {
                    setTimeout(() => {
                      setProjectDescDisplay(false);
                      setProjectId(e.target.parentElement.id);
                      
                    }, 10000);
                  }
                }} */
              >
                {project.title}{" "}
              </h3>
            </div>
          );
        })}
      </div>
      <div
        className="scrollerRight"
        onClick={() => {
          if (window.innerWidth > 760) {
            scroll.current.scrollLeft += 600;
          } else {
            scroll.current.scrollLeft += 250;
          }
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

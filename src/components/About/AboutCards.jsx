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
  } = useContext(MainContext);

  const scroll = useRef();

  return (
    <div style={{display:'flex'}}>
      <div
        className="scrollerLeft"
        onClick={() => {
          scroll.current.scrollLeft -= 500;
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="projectCardsContainer" ref={scroll}>
        {projects.map((project) => {
          return (
            <div key={project.id} id={project.id} className="projectCardStyle">
              <a href={project.gitLink} className="imageLink">
                <img
                  src={`./${project.title}.jpg`}
                  className="projectImageSize"
                  alt=""
                />
              </a>

              <a href={project.gitLink}></a>

              {project.id == projectId && projectDescDisplay && (
                <ProjectDescription />
              )}

              <h3
                className="projectTitle"
                onMouseOver={(e) => {
                  /* setLike(false); */
                  console.dir(e.target.parentElement);
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
                    }, 5000);
                  }
                }}
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
            scroll.current.scrollLeft += 500;
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
    </div>
  );
}

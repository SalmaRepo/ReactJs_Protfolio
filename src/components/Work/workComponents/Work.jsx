import "./work.css";

import styled, { keyframes } from "styled-components";

import { useContext, useState, useEffect } from "react";
import { WorkContext } from "../workContexts/contextWork";
import WorkProvider from "../workContexts/WorkProvider";

const move = keyframes`
  0%{
    opacity;0;
    transform:translateY(0rem)
  }

  100%{
    opacity:1;
    transform:translateY(-3rem)
  }

`;

const CardLeft = styled.div`
  animation: ${move} 1s linear backwards;
`;

export default function Work() {
  const { animLeft, animRight, setAnimLeft, setAnimRight, timeLineData } =
    useContext(WorkContext);
  /*   console.log(timeLineData); */
  /*   workData=timeLineData.filter(data=>data.type==='work');
  studyData=timeLineData.filter(data=>data.type==='study');
  gapData=timeLineData.filter(data=>data.type==='gap'); */

  useEffect(() => {
    window.addEventListener("scroll", () => {
     
      if (window.scrollY > 1000 || window.scrollY > 2000) {
        setAnimLeft(true);
        setAnimRight(true);
      }
    });
  }, []);

  return (
    <div className="workContainer" id="Work">
      <h3>Collection of My Job Experiences and Education.</h3>
      <p className="workDesc">
        I completed my graduation in 2015 and worked in many roles since
        then.Following Timeline will give you the brief description of my Jobs
        and my Studies. You can also download my Resume in pdf versions in both English and Deutsch for more details.{" "}
        <a className="resume" href="Salma Front End English Resume.pdf" download>
          English Resume <i class="fa-solid fa-down-long"></i>
        </a>
        <a className="resume" href="Salma Front End Deutsch Resume.pdf" download>
          Deutsch Resume <i class="fa-solid fa-down-long"></i>
        </a>
      </p>

      <div className="workTimeLineContainer">
        <div className="timeLineCardLeftContainer">
          {timeLineData.map((data, index) => {
            return (
              index % 2 === 0 && (
                <div
                  key={data.id}
                  className={`timeLineCardLeft ${
                    animLeft && "timeLineCardLeftAnim"
                  }`}
                >
                  <div>
                    {data.type === "work" ? (
                      <i className="fa-solid fa-briefcase iconLeft"></i>
                    ) : (
                      <i className="fa-solid fa-graduation-cap iconLeft"></i>
                    )}
                  </div>
                  <h3>{data.title}</h3>
                  <h4>({data.duration})</h4>
                  <h5>Skills used and Gained-{data.skills}</h5>
                  <p>{data.description}</p>
                </div>
              )
            );
          })}
        </div>

        <div className="timeLine"> </div>

        <div className="timeLineCardRightContainer">
          {timeLineData.map((data, index) => {
            return (
              index % 2 !== 0 && (
                <div
                  key={data.id}
                  className={`timeLineCardRight ${
                    animRight && "timeLineCardRightAnim"
                  }`}
                >
                  <div>
                    {data.type === "work" ? (
                      <i className="fa-solid fa-briefcase iconRight"></i>
                    ) : (
                      <i className="fa-solid fa-graduation-cap iconRight"></i>
                    )}
                  </div>
                  <h3>{data.title}</h3>
                  <h4>({data.duration})</h4>
                  <h5>Skills used and Gained-{data.skills}</h5>
                  <p>{data.description}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

import "./work.css";

import styled, { keyframes } from "styled-components";

import { useContext, useState } from "react";
import { WorkContext } from "../workContexts/contextWork";
import WorkProvider from "../workContexts/WorkProvider";

const move=keyframes`
  0%{
    opacity;0;
    transform:translateY(0rem)
  }

  100%{
    opacity:1;
    transform:translateY(-3rem)
  }

`

const CardLeft = styled.div`
  animation: ${move} 1s linear backwards;

  
`;



export default function Work() {
  const { scroll, setScroll, timeLineData } = useContext(WorkContext);
/*   console.log(timeLineData); */
  /*   workData=timeLineData.filter(data=>data.type==='work');
  studyData=timeLineData.filter(data=>data.type==='study');
  gapData=timeLineData.filter(data=>data.type==='gap'); */

  let animDuration = 0;

  const animTime = () => {
    return (animDuration += 1);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      animTime();
      setScroll(animDuration);
    } else if (window.scrollY >= 300) {
      animTime();
      setScroll(animDuration);
    } else if (window.scrollY >= 500) {
      animTime();
      setScroll(animDuration);
    } else if (window.scrollY >= 700) {
      animTime();
      setScroll(animDuration);
    } else if (window.scrollY >= 900) {
      animTime();
      setScroll(animDuration);
    }
  });

  return (
    <div className="workContainer">
      <div className="timeLineCardLeftContainer">
        {timeLineData.map((data, index) => {
          return (
            index % 2 === 0 && (
              <div key={data.id} className="timeLineCardLeft ">
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
              <div key={data.id} className="timeLineCardRight">
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
  );
}

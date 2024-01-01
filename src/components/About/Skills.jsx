import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);
  console.log(animateSkills);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1200) {
        setAnimateSkills(true);
      }
    });
  }, []);

  const skillsData = {
    TechnicalSkills: [
      { skill: "HTML5,CSS3", percent: "90%", animName: "htmlSkillBar" },
      { skill: "NodeJS, Express JS, Mongo DB", percent: "90%", animName: "backendBar" },
      { skill: "Javascript and Typescript", percent: "80%", animName: "languageBar" },
      { skill: "React, Angular, Vue", percent: "65%", animName: "frameworkSkillBar" },
      { skill: "Saas and BootStrap", percent: "70%", animName: "stylingSkillBar" },
     
    ],

    LanguageSkills: [
      { skill: "English", percent: "C1", animName: "englishSkillBar" },
      { skill: "Deutsch", percent: "B1", animName: "germanSkillBar" },
    ],
  };

  return (
    <div className="skillsSectionContainer">
      <h2 className="skillsHead">My Skills</h2>
      <div className="skillsSection">
        <div className="skillsTechnicalContainer">
          <h2 className="skillsHead">Technical Skills</h2>
          {skillsData.TechnicalSkills.map((type) => {
            return (
              <div className="technicalSkillsCard" key={type.id}>
                <div className="technicalSkillType">
                  <p className="skillName">{type.skill}</p>
                  {/* <p className="skillName">{type.percent}</p> */}
                </div>
                <div
                  className={`${animateSkills && type.animName} skillBar`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="skillsLanguageContainer">
          <h2 className="skillsHead">Language Skills</h2>
          <div className="languageSkillsSection">
            {skillsData.LanguageSkills.map((type) => {
              return (
                <div className="LanguageSkillsCard" key={type.id}>
                  <div className="LanguageSkillType">
                    <p className="skillName">{type.skill}</p>
                 
                  </div>
                  <div
                    className={`${
                      animateSkills && type.animName
                    } circleSkillBar`}
                  >
                    <div className="innerCircle">
                      <div id="number">{type.percent}</div>
                    </div>

                    {animateSkills&&<svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="160px"
                      height="160px"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#85ebee" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      {type.animName==='englishSkillBar'&&<circle cx="80" cy="80" r="70" stroke-linecap="round" class='englishCircle' 
                    />}
                    <circle cx="80" cy="80" r="70" stroke-linecap="round"  class='germanCircle'
                    />
                    </svg>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

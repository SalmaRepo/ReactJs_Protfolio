import {useState,useEffect} from 'react'
export default function Skills() {
    const [animateSkills,setAnimateSkills]=useState(false);
    console.log(animateSkills);

    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            if(window.scrollY>1200){
                setAnimateSkills(true)
            }
           })
    },[])
    
  return (
    <div className="skillsSectionContainer">
      <h2>My Skills</h2>
      <div className="skillsSection">
     
        <div className="skillsTechnicalContainer">
            <h2>Technical Skills</h2>
          <div className="technicalSkillsCard">
            <div className="technicalSkillType">
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className={`${animateSkills && 'htmlSkillBar'} skillBar`}></div>
          </div>
          <div className="technicalSkillsCard">
            <div className="technicalSkillType">
              <p>CSS</p>
              <p>90%</p>
            </div>
            <div className={`${animateSkills && 'cssSkillBar'} skillBar`}></div>
          </div>
          <div className="technicalSkillsCard">
            <div className="technicalSkillType">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className={`${animateSkills && 'jsSkillBar'} skillBar`}></div>
          </div>
          <div className="technicalSkillsCard">
            <div className="technicalSkillType">
              <p>React</p>
              <p>65%</p>
            </div>
            <div className={`${animateSkills && 'reactSkillBar'} skillBar`}></div>
          </div>
          <div className="technicalSkillsCard">
            <div className="technicalSkillType">
              <p>Python</p>
              <p>50%</p>
            </div>
            <div className={`${animateSkills && 'pythonSkillBar'} skillBar`}></div>
          </div>
        </div>
        <div className="skillsProfessionalContainer"></div>
        <div className="skillsLanguageContainer"></div>
      </div>
    </div>
  );
}

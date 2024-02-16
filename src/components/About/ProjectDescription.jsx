import { useContext } from "react";

import { MainContext } from "../../contexts/MainContext/mainContext";
import CodeButton from "./CodeButton";

export default function ProjectDescription() {
  const {
    projects,
    projectDescDisplay,
    projectId,
    setProjectDescDisplay,
    like,
    setLike,
  } = useContext(MainContext);
  console.log(projectId, projectDescDisplay);
  let projectDisp = projects.find((project) => project.id == projectId);
  console.log(projectDisp);
  let finalDescription = projectDisp.description;
  console.log(finalDescription);
console.log(finalDescription[1].code)
  return (
    <div className="projectDescCard"  id={projectId}>
      {finalDescription.map((desc) => {
        return (
          <div key={projectId} >
            <h3 style={{color:"blue"}}>{desc.title}</h3>
            <h5>{desc.codeStack}</h5>
            <p>{desc.brief}</p>
          </div>
        );
      })}
      {/* <button className="closeProjectDesc" onClick={()=>setProjectDescDisplay(false)}>x</button> */}

      <CodeButton code={finalDescription[1].code} link={projectDisp.gitLink}/>
    </div>
  );
}

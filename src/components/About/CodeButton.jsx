import { useContext } from "react";


import { MainContext } from "../../contexts/MainContext/mainContext";
export default function CodeButton({ code }) {
  const { projectId, like, setLike,projectDescDisplay, } = useContext(MainContext);
  console.log(projectId)
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }} id={projectId}>
      <button className="projectDescButton">
        code <a href={code}></a>{" "}
      </button>
      <button
        className={`projectLike ${like && "updateLike"}`}
        onClick={(e) => {
          console.dir(e.target.parentElement.parentElement.parentElement)
            if(e.target.parentElement.parentElement.id===projectId){
              
              setLike(true);
            }else{
              setLike(false)
            }
           
          
          
        }}
      >
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  );
}

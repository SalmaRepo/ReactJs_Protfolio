import { useContext, useEffect } from "react";


import { MainContext } from "../../contexts/MainContext/mainContext";
export default function CodeButton({ code }) {
  const { projectId,projects, like, setLike,likeId,setLikeId,projectDescDisplay, } = useContext(MainContext);
  console.log(projectId)
  console.log(likeId)
  
localStorage.setItem('isLiked',like)
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }} id={projectId} >
      <a href={code} target="_blank" rel="noopener noreferrer" className="projectDescButton">
      <button className="projectDescButton">
      code 
    </button>
      </a>
      
      <button
        className={`projectLike ${(like&&projectId===likeId)&&'updateLike'}`}
        onClick={(e) => {
          /* console.log(e.target.parentElement.parentElement.parentElement.id)
            e.target.parentElement.parentElement.id===projectId? */
            setLikeId(e.target.parentElement.parentElement.parentElement.id)    
            
            setLike(!like)


          
              
          
           
          
          
        }}
      >
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  );
}


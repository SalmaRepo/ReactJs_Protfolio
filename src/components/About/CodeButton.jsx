import { useContext } from "react";

import { MyContext } from "../../App";
export default function CodeButton({ code }) {
  const { projectId, like, setLike,projectDescDisplay, } = useContext(MyContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button className="projectDescButton">
        code <a href={code}></a>{" "}
      </button>
      <button
        className={`projectLike ${like && "updateLike"}`}
        onClick={(e) => {
         
            setLike(true);
          
          
        }}
      >
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  );
}

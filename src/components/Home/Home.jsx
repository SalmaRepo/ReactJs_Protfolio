import HomeImg from "./HomeImages/back.png";
import { Link } from "react-scroll";
import "./Home.css";
export default function Home() {
  return (
    <div className="homeDesk">
      <img className="homeImgDesk" src={HomeImg} alt="" />
      <div className="deskDesc">
        <h2 className="hello">Hello,</h2>
        <h1 className="name">
          I'm <span className="nameDesk">Salma</span>
        </h1>
        <h2 className="webDev">Web Developer.</h2>
        <p>
          A passionate Fresher aiming to develop beautiful and highly
          functionalWeb Sites with all the knowledge I gained since past few
          years. Have alook at my Profile !!
        </p>
      </div>
    </div>
  );
}

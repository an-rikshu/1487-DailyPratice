import React from "react";
import "./About.css";
import tech from "./bgmi.jpg";
import tech1 from "./COD.jpg";
import tech2 from "./csgo.jpg";
import tech3 from "./nfs.jpg";
import tech4 from "./amongus.webp";
import tech5 from "./valorant.jpg";
 import { AiFillSignal,AiOutlinePoweroff,AiFillHeart,AiOutlineFileDone,AiTwotoneHighlight,AiFillSafetyCertificate,AiFillTool } from "react-icons/ai";
import {BsGlobe2} from "react-icons/bs";
// import { FaGlobeAmericas } from "react-icons/ai";
const About = () => {
  return (
    <>
 <div className="container-fluid text-center">
  <h2>Trending  games</h2>
  <br/>
  <div className="row">
    <div className="col-sm-4">
        <img src={tech} alt="..." height="200px" width ="100px" className="card-img-top" />
        <br/>
        <h5 className="card-title">PUBG Mobile</h5>
    </div>
    <div className="col-sm-4">
        <img src={tech1} alt="..." height="210" width ="100" className="card-img-top" />
        <br/>
        <h5 className="card-title">COD</h5>
    </div>
    <div className="col-sm-4">
        <img src={tech2} alt="..." height="210" width ="100" className="card-img-top" />
        <br/>
        <h5 className="card-title">Counter strike : Global Offensive</h5>
    </div>
    <div className="col-sm-4">
        <img src={tech3} alt="..." height="210" width ="100" className="card-img-top" />
        <br/>
        <h5 className="card-title">NEED FOR SPEED</h5>
    </div>
    <div className="col-sm-4">
        <img src={tech4} alt="..." height="210" width ="100" className="card-img-top" />
        <br/>
        <h5 className="card-title">Among us</h5>
    </div>
    <div className="col-sm-4">
        <img src={tech5} alt="..." height="210" width ="100" className="card-img-top" />
        <br/>
        <h5 className="card-title">Valorant</h5>
    </div>
  </div>
</div>
{/* <div className="col-sm-4">
       <span className="glyphicon glyphicon-lock logo-small" style={{color: "#f4511e",fontSize: "80px"}}><AiOutlineFileDone/></span>
      <h4>JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet..</p> 
  </div>
  </div>
   <br></br>
    <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"><AiTwotoneHighlight/></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"><AiFillSafetyCertificate/></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"><AiFillTool/></span>
      <h4 style={{color:"#303030"}}>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div> */}

</>
  )

};

export default About;


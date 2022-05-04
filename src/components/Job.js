import React from "react";
import JobImg from "../assets/job.gif";

const Job = () => {
  return (
    <div className="job" style={{textAlign: "center"}}>
        <br />
        <br />
        <br />
        <h2>В процес на работа...</h2>
        <br />
        <img src={JobImg} alt="job" width="100%"/>
        
    </div>
  );
}

export default Job;
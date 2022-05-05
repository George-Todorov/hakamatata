import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import JobImg from "../assets/job.gif";

const Job = () => {
  const history = useHistory();
  const [count, setCount] = useState(5);
  // const isMountedVal = useRef(1);
  
  useEffect(() => {
    const counter = setInterval(() => {
      setCount(count - 1);
      
      if(count < 1) {
        if(location.hash.includes("topics")) {
          history.push('/topics/math-4');
        }
        else {
          history.push('/');
        }
      }
    }, 1000);

    return () => {
      clearInterval(counter);
    }
	})

  return (
    <div className="job">
        <br />
        <h3>{`Не е готово. \n В процес на работа. \n Пренасочване след ...`}</h3>
        <span className='counter'>{count}</span>
        <br />
        <img src={JobImg} alt="job" width="100%"/>
        
    </div>
  );
}

export default Job;
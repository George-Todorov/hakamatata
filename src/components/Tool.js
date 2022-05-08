import React from 'react';
import Tool1 from "../assets/tool-1.png";
import Tool2 from "../assets/tool-2.png";
import Tool3 from "../assets/tool-3.png";
import Tool4 from "../assets/tool-4.png";
import Tool5 from "../assets/tool-5.png";
import Tool6 from "../assets/tool-6.png";

const Tool = () => {

    const onToolClose = () => {
        document.getElementById("tool").style.display = "none";
        document.getElementById("close-tool").style.display = "none";
    }

  return (
    <>
    <div id="tool">
        <div className="tools">
            <img src={Tool1} alt="tool" width="100%" />
            <img src={Tool2} alt="tool" width="100%" />
            <img src={Tool3} alt="tool" width="100%" />
            <img src={Tool4} alt="tool" width="100%" />
            <img src={Tool5} alt="tool" width="100%" />
            <img src={Tool6} alt="tool" width="70%" />
        </div>
    </div>
    <span id="close-tool" className="close" onClick={onToolClose}>X</span>
    </>
  );
}

export default Tool;
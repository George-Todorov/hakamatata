import React from 'react';
import Tool1 from "../assets/tool-1.png";
import Tool2 from "../assets/tool-2.png";
import Tool3 from "../assets/tool-3.png";

const Tool = () => {

    const onToolClose = () => {
        document.getElementById("tool").style.display = "none";
        document.getElementById("close-tool").style.display = "none";
    }

  return (
    <>
    <div id="tool">
      <br />
      <img src={Tool1} alt="tool" width="100%" />
      <img src={Tool2} alt="tool" width="100%" />
      <img src={Tool3} alt="tool" width="100%" />
    </div>
    <span id="close-tool" className="close" onClick={onToolClose}></span>
    </>
  );
}

export default Tool;
import React, { useEffect } from "react";
import {Helmet} from "react-helmet";

// import JsonTree from "../components/JsonTree";
// import { MathData } from "../data/MathData";
import Zita from "../assets/zita1.jpg";

const Home = () => {
    useEffect(() => {
        document.getElementById("lessons-link").style.color = "#f4a232";
    });

    return <main className="view-wrapper">
        <Helmet>
            <title>zita-math</title>
        </Helmet>
        <h4 className="info">
        Образователен <span className="shadowed">ЦЕНТЪР ЗИТА</span> предлага подготовка 
        {/* по <span className="shadowed">МАТЕМАТИКА</span>  */} за <span className="shadowed">НВО</span> и <span className="shadowed">ТЕСТОВЕ</span> за самостоятелна проверка на учениците в <br /><span className="shadowed">7 КЛАС</span>.
        </h4>
        <img src={Zita} alt="ZITA" width="100%"/>

        {/* <h3 style={{textAlign: "left", paddingLeft: "13px", textDecoration: "underline"}}>Учебният материал включва:</h3> */}
        {/* <section className="lessons-wrapper">
            <JsonTree dataJson={MathData} hasParent={true}/>
        </section> */}
        
        <h4 className="info">
            Учебният материал е съобразен с изискванията на <span className="shadowed">МОН</span> и предоставената от тях програма за подготовка за <span className="shadowed">НВО</span>. 
            <br />
            <br />
            Изисквания на&nbsp; 
            <span className="shadowed"><a href="https://mon.bg/bg/26" target="_blank">mon.bg</a></span>
        </h4>
            <br />
        
        {/* <h4 className="info">
            Всеки може да изпробва своите знания с нашия <span className="shadowed">ТЕСТ</span>. Резултатите се виждат веднага след това, не се изпращат никъде и се пазят в &nbsp;
            <span className="shadowed">
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">localStorage</a>
            </span>&nbsp;
            на вашия браузър.
        </h4> */}
    </main>
}

export default Home;
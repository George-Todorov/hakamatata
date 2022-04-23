import React from "react";
import JsonTree from "../components/JsonTree";
import { MathData } from "../data/MathData";

const Home = () => {
    return <main className="view-wrapper">
        <h2 className="title">УРОЦИ</h2>
        <section className="lessons-wrapper">
            <JsonTree dataJson={MathData} hasParent={true}/>
        </section>
        {/* <hr />
        
        <a className="mon" href="https://mon.bg/bg/100148" target="_blank">mon.bg/НВО-4.клас</a>
        <br />
        
        <a className="mon" href="https://mon.bg/bg/100149" target="_blank">mon.bg/НВО-7.клас</a>
        <br />
        
        <a className="mon" href="https://mon.bg/bg/100151" target="_blank">mon.bg/НВО-10.клас</a> */}
    </main>
}

export default Home;
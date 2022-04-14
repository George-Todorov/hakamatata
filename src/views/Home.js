import React from "react";
import JsonTree from "../components/JsonTree";
import { MathData } from "../data/MathData";

const Home = () => {
    return <main className="view-wrapper">
        <h2 className="title">УРОЦИ</h2>
        <section className="lessons-wrapper">
            <JsonTree dataJson={MathData} hasParent={true}/>
        </section>
    </main>
}

export default Home;
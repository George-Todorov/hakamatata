import React, { useState } from "react";
import {Helmet} from "react-helmet";
import Paginator from "../components/Paginator";
import JobImg from "../assets/job.gif";

const Results = () => {
    const [sec, setSec] = useState(5);

    const getHistory = () => {
        if(localStorage.getItem("hakamatata-user")) {
            return JSON.parse(localStorage.getItem("hakamatata-user")).History.reverse().slice(0, 24);
        }
        return [];
    }

    return <main className="view-wrapper">
                <Helmet>
                    <title>zita-math-test-results</title>
                </Helmet>
                <main className="history">
                    {
                        getHistory().length == 0 ? 
                        <div>
                            <h2>Няма намерени резултати</h2>
                            <br />
                            <img src={JobImg} alt="job" width="100%"/>
                        </div> : 
                        Paginator({ items: getHistory(), itemsPerPage: 3 })
                    }
                    <br />
                </main>
            </main>;
}

export default Results;
import React from "react";
import Paginator from "../components/Paginator";

const Results = () => {
    const getHistory = () => {
        if(localStorage.getItem("hakamatata-user")) {
            return JSON.parse(localStorage.getItem("hakamatata-user")).History.reverse(); //.slice(0, 5);
        }
        return [];
    }

    return <main className="view-wrapper">
        <main className="history">
            {
                getHistory().length == 0 ? 
                "Няма намерени резултати" : 
                Paginator({ items: getHistory(), itemsPerPage: 5 })
            }
            <br />
        </main>
    </main>;
}

export default Results;
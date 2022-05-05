import React, { useState, useEffect } from "react";
import Paginator from "../components/Paginator";

const Results = () => {
    const [sec, setSec] = useState(5);

    const getHistory = () => {
        if(localStorage.getItem("hakamatata-user")) {
            return JSON.parse(localStorage.getItem("hakamatata-user")).History.reverse().slice(0, 24);
        }
        return [];
    }

    return <main className="view-wrapper">
        <main className="history">
            {
                getHistory().length == 0 ? 
                "Няма намерени резултати" : 
                Paginator({ items: getHistory(), itemsPerPage: 3 })
            }
            <br />
        </main>
    </main>;
}

export default Results;
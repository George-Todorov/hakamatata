import React from "react";

const Results = () => {
    const getHistory = () => {
        if(localStorage.getItem("hakamatata-user")) {
            return JSON.parse(localStorage.getItem("hakamatata-user")).History.reverse();
        }
        return [];
    }
    return <main className="view-wrapper">
        <h2 className="title">РЕЗУЛТАТИ</h2>
        <main className="history">
            {
                getHistory().length == 0 ? 
                "Няма намерени резултати" : 
                getHistory().map((item, i) => {
                    return <article key={i}>
                        <h3>{"Тест по " + item.name}</h3>
                        <h4>{"Дата : " + new Date(item.date).toLocaleDateString("en-US") + ", " + item.startTime + " часа"}</h4>
                        <h4>{"Времетраене : " + Math.floor(item.time/1000/60) + " мин"}</h4>
                        <h4>{"Верни отговори : " + item.rightAnswers + " / 20"}</h4>
                        <h4>{"Точки : " + item.points + " / 100"}</h4>
                    </article>
                })
            }
            <br />
        </main>
    </main>;
}

export default Results;
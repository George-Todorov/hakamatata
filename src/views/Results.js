import React from "react";

const Results = () => {
    const getHistory = () => {
        if(localStorage.getItem("hakamatata-user")) {
            return JSON.parse(localStorage.getItem("hakamatata-user")).History.reverse().slice(0, 5);
        }
        return [];
    }

    // const deleteTestResult = e => {
    //     const index = +e.target.className[e.target.className.length - 1];
    //     const obj = JSON.parse(localStorage.getItem("hakamatata-user"));
    //     let currentResult = obj.History[obj.History.length - 1 - index];

    //     if (confirm("Този резултат ще бъде изтрит")) {
    //         currentResult["isDeleted"] = true;
    //         localStorage.setItem("hakamatata-user", JSON.stringify(obj));
    //     } 
    // }

    return <main className="view-wrapper">
        <h2 className="title">РЕЗУЛТАТИ</h2>
        <main className="history">
            {
                getHistory().length == 0 ? 
                "Няма намерени резултати" : 
                getHistory().map((item, i) => {
                    if(item !== null) {
                        return <article id={"result-" + i} key={i}>
                            <h3>
                                {"Тест по " + item.name}
                                {/* <span className={"close " + i} title="delete" onClick={deleteTestResult}></span> */}
                            </h3>
                            <h4>{"Дата : " + new Date(item.date).toLocaleDateString("en-US") + ", " + item.startTime + " часа"}</h4>
                            <h4>{"Времетраене : " + Math.floor(item.time/1000/60) + " мин"}</h4>
                            <h4>{"Верни отговори : " + item.rightAnswers + " / 20"}</h4>
                            <h4>{"Точки : " + item.points + " / 100"}</h4>
                        </article>
                    }
                })
            }
            <br />
        </main>
    </main>;
}

export default Results;
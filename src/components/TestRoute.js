import React from "react";
import TestMath from "./TestMath";
import { TaskOne } from "../data/tasks/TaskOne";

const TestMathObj = {
    "rules": "20 задачи за 60 минути",
    "startTime": "",
    "endTime": "",
    "questionsNumber": 20,
    "questionList": [
    ],
}

const TestRoute = test => {
    TestMathObj.questionList = [];
    let taskIndex = getRandomInt(3);
    TestMathObj.questionList.push(TaskOne[taskIndex])
    
    for(let i = 1; i < 20; i++) {
        TestMathObj.questionList.push({
            "number": i + 1,
            "taskImage": "",
            "answers": {
                "a": "",
                "b": "",
                "c": "",
                "d": ""
            },
            "rightAnswer": ""
        });
    }

    switch (test) {
        case "math-4":
            TestMathObj["name"] = "Математика - 4. клас"
            return (
                <main className="math-test-wrapper">
                    <TestMath testObj={TestMathObj} />
                </main>
            );
        case "math-7":
            TestMathObj["name"] = "Математика - 7. клас"
            return (
                <main className="math-test-wrapper">
                    <TestMath testObj={TestMathObj} />
                </main>
            );
        default:
            return (
                <main className="math-test-wrapper">
                    <TestMath testObj={TestMathObj} />
                </main>
            );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default TestRoute;
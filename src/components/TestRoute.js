import React from "react";
import TestMath from "./TestMath";
import { TaskData } from "../data/tasks/TaskData";

const TestMathObj = {
    startTime: "",
    endTime: "",
    questionsCount: 20,
    questionList: [
    ],
}

const SetQuestions = (num) => {
    TestMathObj.questionList = [];

    for(let i = 0; i < 20; i++) {
        let data = TaskData[num];
        let taskCount = data[i].length;

        if(taskCount > 0) {
            let taskIndex = getRandomInt(taskCount);
            TestMathObj.questionList.push(data[i][taskIndex])
        } 
        else {
            TestMathObj.questionList.push({
                "number": i + 1,
                "taskImage": "",
                "rightAnswer": "",
                "userAnswer": ""
            });
        }
    }
}

const TestRoute = test => {
    switch (test) {
        case "math-4":
            SetQuestions(4);
            TestMathObj["name"] = "Математика - 4. клас"
            return (
                <main className="math-test-wrapper">
                    <TestMath testObj={TestMathObj} />
                </main>
            );
        case "math-7":
            SetQuestions(7);
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
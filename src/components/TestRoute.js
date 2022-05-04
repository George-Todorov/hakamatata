import React from "react";
import TestMath from "./TestMath";
import Job from "./Job";
import { TaskData } from "../data/tasks/TaskData";

const TestMathObj = {
    startTime: "",
    endTime: "",
    questionsCount: 20,
    answersCount: 4,
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
        case "math-1": 
            return (<Job />);
        case "math-2": 
            return (<Job />);
        case "math-3": 
            return (<Job />);
        case "math-4":
            SetQuestions(4);
            TestMathObj["name"] = "Математика - 4. клас";
            TestMathObj.answersCount = 3;

            return (
                <main className="math-test-wrapper">
                    <TestMath testObj={TestMathObj} />
                </main>
            );
        case "math-5": 
            return (<Job />);
        case "math-6": 
            return (<Job />);
        case "math-7":
            SetQuestions(7);
            TestMathObj["name"] = "Математика - 7. клас"
            TestMathObj.answersCount = 4;
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
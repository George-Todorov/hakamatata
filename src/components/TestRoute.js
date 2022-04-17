import React from "react";
import TestMath from "./TestMath";

const TestMathObj = {
    "rules": "20 задачи за 60 минути",
    "startTime": "",
    "endTime": "",
    "questionsNumber": 20,
    "questionList": [
        {
            "number": 1,
            "text": "",
            "image": "",
            "answers": {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
            },
            "rightAnswer": ""
        }
    ],
}

const TestRoute = test => {
    switch (test) {
        case "math-4":
            return (
                <main className="math-test-wrapper">
                    <TestMath testObj={TestMathObj} />
                </main>
            );
        case "math-7":
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

export default TestRoute;
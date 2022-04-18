import React from "react";
import TestMath from "./TestMath";

const TestMathObj = {
    "rules": "20 задачи за 60 минути",
    "startTime": "",
    "endTime": "",
    "questionsNumber": 20,
    "questionList": [
    ],
}

const TestRoute = test => {
    for(let i = 0; i < 20; i++) {
        TestMathObj.questionList.push({
            "number": i + 1,
            "image": "",
            "task": "",
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

export default TestRoute;
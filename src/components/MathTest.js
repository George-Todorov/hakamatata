import React from "react";

const MathTest = test => {
    switch (test) {
        case "math-4":
            return (
                <main className="math-test-wrapper">
                    444
                </main>
            );
        case "math-7":
            return (
                <main className="math-test-wrapper">
                    777
                </main>
            );
        default:
            return (
                <main className="math-test-wrapper">
                    Този тест липсва!
                </main>
            );
    }
}

export default MathTest;
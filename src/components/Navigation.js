import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    function changeLink(e) {
        let id = e.target.id;
    
        document.getElementById("lessons-link").style.color = "#e6e8ee";
        document.getElementById("tests-link").style.color = "#e6e8ee";
        document.getElementById("results-link").style.color = "#e6e8ee";
        document.getElementById(id).style.color = "#f4a232";
    }

    return (
    <nav id="main-nav" className="main-nav">
        <ul className="container-flex-row">
            <li className="flex-item-1">
                <Link id="lessons-link" to="/" className="flex-item-1 nav-link" onClick={changeLink}>
                    ИНФО
                </Link>
            </li>
            <li className="flex-item-1">
                <Link id="tests-link" to="/topics" className="flex-item-1 nav-link" onClick={changeLink}>
                    ТЕСТ
                </Link>
            </li>
            <li className="flex-item-1">
                <Link id="results-link" to="/results" className="flex-item-1 nav-link" onClick={changeLink}>
                    РЕЗУЛТАТИ
                </Link>
            </li>
        </ul>
    </nav>
    );
}

export default Navigation;
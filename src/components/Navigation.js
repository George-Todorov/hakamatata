import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="main-nav" className="main-nav">
        <ul className="container-flex-row">
            <li className="flex-item-1">
                <Link to="/" className="flex-item-1 nav-link">УРОЦИ</Link>
            </li>
            <li className="flex-item-1">
                <Link to="/topics" className="flex-item-1 nav-link">ТЕСТОВЕ</Link>
            </li>
            <li className="flex-item-1">
                <Link to="/results" className="flex-item-1 nav-link">РЕЗУЛТАТИ</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;
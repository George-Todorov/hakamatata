import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  function changeLink() {
      document.getElementById("lessons-link").style.color = "#f4a232";
      document.getElementById("tests-link").style.color = "#e6e8ee";
      document.getElementById("results-link").style.color = "#e6e8ee";
  }

  return (
    <header className="header container-flex-row">
      <section className="logo flex-item-1">
        <Link to="/" onClick={changeLink}><img src={Logo} alt="Logo" width="70px"/></Link>
      </section>
      <section className="flex-item-4">
        <h2 className="title">МАТЕМАТИКА</h2>
      </section>
    </header>
  );
}

export default Header;
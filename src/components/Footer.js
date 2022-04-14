import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer container-flex-row">

      <section className="logo flex-item-1">
        <img src={Logo} alt="Logo" width="70px"/>
      </section>

      <section className="zita-link flex-item-1">
        <a href="https://centerzita.com" target="_blank">centerzita.com</a>
      </section>

    </footer>
  );
}

export default Footer;
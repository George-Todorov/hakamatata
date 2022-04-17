import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>С подкрепата на :</h3>

      <main className="container-flex-row">
        <section className="logo flex-item-1">
          <img src={Logo} alt="Logo" width="70px"/>
        </section>

        <section className="zita-link flex-item-1">
          <a href="https://centerzita.com" target="_blank">centerzita.com</a>
        </section>
      </main>
    </footer>
  );
}

export default Footer;
import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header container-flex-row">
      <section className="logo flex-item-1">
       <img src={Logo} alt="Logo" width="70px"/>
      </section>
      <section className="flex-item-4">
        <h2 className="title">МАТЕМАТИКА</h2>
      </section>
    </header>
  );
}

export default Header;
import React from "react";
import Logo from "../assets/logo-h.png";

const Header = () => {
  return (
    <header className="header container-flex-row">
      <section className="flex-item-2">

      </section>
      <section className="logo flex-item-1">
        <img src={Logo} alt="Logo" width="100px"/>
      </section>
      <section className="flex-item-2">
        
      </section>
    </header>
  );
}

export default Header;
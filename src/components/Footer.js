import React from "react";
import Logo from "../assets/logo.png";
import PhoneIcon from "../assets/phone-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <h3 className="support">С подкрепата на :</h3> */}

      <main className="container-flex-row">
        <section className="logo flex-item-1">
          <img src={Logo} alt="Logo" width="56px"/>
        </section>

        <section className="zita-link flex-item-1">
          <img src={PhoneIcon} alt="phone" width="18px" />&nbsp;
          <span className="phone-number">0898 271 234</span>
          <br />
          <a className="website" href="https://centerzita.com" target="_blank">centerzita.com</a>
        </section>
      </main>
    </footer>
  );
}

export default Footer;
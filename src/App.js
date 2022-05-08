import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import Tool from "./components/Tool";

export default function App() {
  return (
    <div id="app-wrapper">
      <Header />
      <Navigation />
      <Routes />
      <Footer />
      <Tool />
    </div>
  );
}
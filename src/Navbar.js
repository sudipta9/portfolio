import React from "react";
import "./Navbar.css";
import Logo from "./logo.svg";

function Navbar() {
  return (
    <section className="main">
      <nav>
        <a href="#">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <ul className="menu">
          <li>
            <a href="#g">Home</a>
            <a href="#g">Home</a>
            <a href="#g">Home</a>
            <a href="#g">Home</a>
            <a href="#g">Home</a>
          </li>
        </ul>
        <a href="#g" className="hey">
          Hey
        </a>
      </nav>
    </section>
  );
}

export default Navbar;

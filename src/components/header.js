import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/nexta.webp";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <ul className="li-container">
        <div>
          <a href="https://www.nexta.io/" target="_blank">
        <img src={logo} alt="logo" className="logo"/>
        </a>
        </div>
        <li className="nav-items">
          <Link to="/">See Campaigns</Link>
        </li>
        <li className="nav-items">
          <Link to="/create">Create Campaings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

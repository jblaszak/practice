import "./Navigation.css";
import React, { useState } from "react";

const Navigation = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="top">
      <a href="#" aria-label="Blogr Home Page">
        <img src="../../images/logo.svg" alt="" />
      </a>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="sr-only">Open main menu</span>
        <img
          src={menuOpen ? "../../images/icon-hamburger.svg" : "../../images/icon-hamburger.svg"}
          alt=""
          aria-hidden="true"
        />
      </button>
      <div className="menu-container">
        <ul className="menu">
          <li className="dropdown">
            <span>Product</span>
            <ul className="submenu">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </li>
          <li className="dropdown">
            <span>Company</span>
            <ul className="submenu">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </li>
          <li className="dropdown">
            <span>Connect</span>
            <ul className="submenu">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </li>
        </ul>
        <div className="credentials-container">
          <a href="#" aria-label="Login">
            Login
          </a>
          <a href="#" aria-label="Signup">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

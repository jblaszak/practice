import React, { useState } from "react";
import "./Navigation.css";
import MenuDropdown from "./MenuDropdown";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuDropdowns = [
    {
      category: "Product",
      items: [
        { name: "Overview", link: "#" },
        { name: "Pricing", link: "#" },
        { name: "Marketplace", link: "#" },
        { name: "Features", link: "#" },
        { name: "Integrations", link: "#" },
      ],
    },
    {
      category: "Company",
      items: [
        { name: "About", link: "#" },
        { name: "Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Careers", link: "#" },
      ],
    },
    {
      category: "Connect",
      items: [
        { name: "Contact", link: "#" },
        { name: "Newsletter", link: "#" },
        { name: "LinkedIn", link: "#" },
      ],
    },
  ];

  return (
    <header>
      <nav aria-label="top">
        <a href="#" aria-label="Blogr Home Page">
          <img src="../../images/logo.svg" alt="" />
        </a>
        <button className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          <span className="sr-only">Open main menu</span>
          <img
            src={menuOpen ? "../../images/icon-close.svg" : "../../images/icon-hamburger.svg"}
            alt=""
            aria-hidden="true"
          />
        </button>
        <div className={`${menuOpen ? "menuOpen " : ""}menu-container`}>
          <ul className="menu">
            {menuDropdowns.map((dropdown) => {
              return (
                <MenuDropdown
                  key={dropdown.category}
                  category={dropdown.category}
                  items={dropdown.items}
                />
              );
            })}
          </ul>
          <div className="credentials-container">
            <a href="#" aria-label="Login">
              Login
            </a>
            <a className="signup" href="#" aria-label="Signup">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

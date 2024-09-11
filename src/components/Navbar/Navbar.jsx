import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (event) => {
    setActiveLink(event.target.textContent);
  };
  return (
    <header className="container">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <a href="#" className="logo">Notitanic</a>
        </div>
        <ul className="nav-links">
          <a
            href="#"
            className={activeLink === "Home" ? "active" : ""}
            onClick={handleClick}
          >
            <li>Home</li>
          </a>
          <a
            href="#about"
            className={activeLink === "About" ? "active" : ""}
            onClick={handleClick}
          >
            <li>About</li>
          </a>
          <a
            href="#portfolio"
            className={activeLink === "Portfolio" ? "active" : ""}
            onClick={handleClick}
          >
            <li>Portfolio</li>
          </a>
          <a
            href="#contact"
            className={activeLink === "Contact" ? "active" : ""}
            onClick={handleClick}
          >
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


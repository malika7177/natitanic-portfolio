  import React, { useState } from "react";
  import "./navbar.css";
  import logo from "../../assets/logo.png";

  const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const links = [
      { text: "Home", href: "#home" },
      { text: "About", href: "#about" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Contact", href: "#contact" },
    ];

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
            {links.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className={activeLink === link.text ? "active" : ""}
                  onClick={handleClick}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };

  export default Navbar;
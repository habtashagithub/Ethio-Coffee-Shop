import React, { useState } from "react";

function Header() {
  const [changeHeader, setChangeHeader] = useState(false);

  function changeHeaderColor() {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  }

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <header
      className={`header ${changeHeader && "scroll-header"} `}
      style={{ backgroundColor: "#000" }}
      id="header"
    >
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Ethiopian Coffee
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About us
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                Product
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                Blog
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;

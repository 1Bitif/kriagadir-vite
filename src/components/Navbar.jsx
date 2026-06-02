import React from 'react';

function Navbar({ smoothScroll }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">KriAgadir</div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => smoothScroll(e, 'home')}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#fleet" onClick={(e) => smoothScroll(e, 'fleet')}>
              Véhicules
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-right">
          <select className="currency-selector">
            <option>EUR</option>
            <option>MAD</option>
          </select>
          <select className="language-selector">
            <option>FR</option>
            <option>AR</option>
          </select>
          <a href="tel:+212600144245" className="phone-number">
            +212 600-144245
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import { CartWidget } from '../../common/CartWidget/CartWidget';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo y Marca */}
      <div className="navbar-brand">
        <div className="logo">
          <img
            className="imagen"
            src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png"
            alt="logo"
          />
        </div>
      </div>

      {/* Botón de menú hamburguesa */}
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Ícono de hamburguesa */}
      </button>

      {/* Enlaces del Navbar */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link">Inicio</a></li>
        <li><a href="#about" className="nav-link">Acerca</a></li>
        <li><a href="#services" className="nav-link">Servicios</a></li>
        <li><a href="#contact" className="nav-link">Contacto</a></li>
        <li><CartWidget /></li> 
      </ul>
    </nav>
  );
};

//export default Navbar;

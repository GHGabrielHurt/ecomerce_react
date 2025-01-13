import React from 'react';
import './Navbar.css';
import { CartWidget } from '../../common/CartWidget/CartWidget';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className='logo'>
        <img className='imagen' src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png" alt="logo" />
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#home" className="nav-link">Inicio</a></li>
        <li><a href="#about" className="nav-link">Acerca</a></li>
        <li><a href="#services" className="nav-link">Servicios</a></li>
        <li><a href="#contact" className="nav-link">Contacto</a></li>
        < CartWidget />
      </ul>
    </nav>
  );
};

//export default Navbar;

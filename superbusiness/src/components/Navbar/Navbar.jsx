import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/logos/logo-super_business.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/register">Registro</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
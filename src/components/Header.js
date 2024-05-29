import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Agricultura Sustentável</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/data">Dados</Link></li>
          <li><Link to="/help">Ajuda</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

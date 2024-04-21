import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './isimg.jpg'; // Importez l'image du logo depuis le chemin correct

const BarreNavigation = () => {
  return (
    <nav className="barre-navigation">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="menu-item">
          <Link to="/livre">Livres</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BarreNavigation;

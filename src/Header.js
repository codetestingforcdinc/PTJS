import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt=""
          src="https://i.ibb.co/MGGpPH7/PTJS-Logo1.png"
        />
      </Link>

      <Link to="/host">
        <div className="header__right">
          <p className="host">Become A Host</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;

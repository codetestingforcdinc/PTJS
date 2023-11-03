import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="Footer">
      <p>© 2023 PTJS! No Rights Reserved</p>
      <p>
        <Link to="/privacy">Privacy</Link> ·
        <Link to="/terms">Terms & Conditions</Link> ·
        <Link to="/about-us"> Company Details</Link>
      </p>
    </div>
  );
}

export default Footer;

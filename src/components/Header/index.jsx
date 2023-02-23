import * as React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-section basic-padding">
      <p className="heading">The Artifact</p>
      <p className="sub-heading">Culture & Art blog</p>
      <nav className="nav-bar">
        <a href="#Blog"> Blog</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;

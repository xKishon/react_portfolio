import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';
import '../index.css';

function Navbar(props) {
  const showNavbar = () => {
    props.onNavbarToggle();
  };

  return (
    <header className="bg_dark text-white px-3 py-2">
      <a href="http://google.it">
        <img src="../logoprovapng.png" height="30" alt="logo" />
      </a>
      <nav className={`bg_dark ${props.isMenuOpen ? 'responsive_nav' : ''}`}>
        <p className="text_main fs-3 fw-bold" id="p_navpanel">
          Navigation Panel
        </p>
        <a href="/#" className="pb-1">
          Home
        </a>
        <a href="/#" className="pb-1">
          My work
        </a>
        <a href="/#" className="pb-1">
          Blog
        </a>
        <a href="/#" className="pb-1">
          About me
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn fs-3" onClick={props.onNavbarToggle}>
        <RiMenu3Line />
      </button>
    </header>
  );
}

export default Navbar;

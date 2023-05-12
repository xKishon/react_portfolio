import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import {CiMenuBurger} from 'react-icons/ci'

function Navbar2({scrollToAbout}) {
  return (
        <Navbar collapseOnSelect expand="lg" className="justify-content-between bg_dark p-2 sticky-top">
           <a href="http://google.it">
             <img src="../logoprovapng.png" height="30" alt="logo" />
           </a>
           <Navbar.Toggle aria-controls="responsive-navbar-nav">
             <CiMenuBurger className="text-white CiMenuBurger fs-3" type="button"/> 
           </Navbar.Toggle>
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto text-center">
               <Link to="/home" className="text-decoration-none text-white mx-4 my-2 ">
                 <span className="nav-link-text">Home</span>
               </Link>
               <Link to="/about" className="text-decoration-none text-white mx-4 my-2">
                 <span className="nav-link-text" onClick={scrollToAbout}>About</span>
               </Link>
               <Link to="/portfolio" className="text-decoration-none text-white mx-4 my-2">
                 <span className="nav-link-text">Portfolio</span>
               </Link>
               <Link to="/blog" className="text-decoration-none text-white mx-4 my-2">
                 <span className="nav-link-text">Blog</span>
               </Link>
               <Link to="/contacts" className="text-decoration-none text-white mx-4 my-2">
                 <span className="nav-link-text">Contacts</span>
               </Link>
             </Nav>

             {/* Se metterò la dark/light mode */}
             {/* <Nav>
               <Nav.Link href="#deets" className="text-white"></Nav.Link>
             </Nav> */}

           </Navbar.Collapse>

       </Navbar>
  );
}

export default Navbar2;



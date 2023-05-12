import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from '../screen/About';
import Portfolio from '../screen/Portfolio';
import Blog from '../screen/Blog';
import Contacts from '../screen/Contacts';
import {CiMenuBurger} from 'react-icons/ci'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 

function CollapsibleExample() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="justify-content-center bg_lighter p-2">
        <Container>
          <a href="http://google.it">
            <img src="../logoprovapng.png" height="30" alt="logo" />
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <CiMenuBurger className="text-white CiMenuBurger fs-3" type="button"/> 
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center">
              <Link to="/" className="text-decoration-none text-white mx-4 my-2 ">
                <span className="nav-link-text">Home</span>
              </Link>
              <Link to="/about" className="text-decoration-none text-white mx-4 my-2">
                <span className="nav-link-text">About</span>
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
        </Container>
      </Navbar>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default CollapsibleExample;


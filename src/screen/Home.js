// import React from 'react'
// import {BsArrowDownSquareFill} from 'react-icons/bs'
// import Navbar from '../components/Navbar'

// const Home = () => {
//   return (
//     <>
//         <div className="container-fluid" id="container_Home">
//             <div className="row vh-100">
//                 <div className="col-12 d-flex justify-content-center align-items-center flex-column">
//                     <h1 className="text-white display text-center">Hello i'm <span className="text_main">Davide Lobascio</span>.</h1>
//                     <h3 className="text-white text-center">I'm a Full-Stack web developer</h3>
//                     <BsArrowDownSquareFill className="fs-1 text-white mt-3" id="arrow_down_landing"/>
//                 </div>
//             </div>
//         </div>
//         <Navbar />
//     </>



//   )
// }

// export default Home
import React, { useState } from 'react';
import { BsArrowDownSquareFill } from 'react-icons/bs';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavbarToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container-fluid" id="container_Home">
        <div className="row vh-100">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-white display text-center">
              Hello i'm <span className="text_main">Davide Lobascio</span>.
            </h1>
            <h3 className="text-white text-center">I'm a Full-Stack web developer</h3>
            <BsArrowDownSquareFill
              className="fs-1 text-white mt-4"
              id="arrow_down_landing"
              type="button"
              onClick={handleScrollToNavbar}
            />
          </div>
        </div>
      </div>
      <div id="navbar">
        <Navbar isMenuOpen={isMenuOpen} onNavbarToggle={handleNavbarToggle} />
      </div>
    </>
  );
};

export default Home;

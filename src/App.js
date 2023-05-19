import React, { useRef } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Design from './components/Design';
import Home from './screen/Home';
import Navbar from './components/Navbar';
import About from './screen/About';
import Portfolio from './screen/Portfolio';
import Blog from './screen/Blog';
import Contacts from './screen/Contacts';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  
  
  const scrollToAbout = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({behaviour: 'smooth', block: 'start'});
    }
  };
  const scrollToHome = () => {
    if (homeRef && homeRef.current) {
      homeRef.current.scrollIntoView({behaviour: 'smooth', block: 'start'});
    }
  };


  return (
    <Router>
        <Design />
        <div ref={homeRef}>
          <Home scrollToAbout={scrollToAbout}/>
        </div>
        <div className="sticky-top">
          <Navbar scrollToAbout={scrollToAbout} scrollToHome={scrollToHome}/>
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <Portfolio />
        <Blog />
        <Contacts />

    </Router>
  );
}

export default App;


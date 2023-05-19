import { BsArrowDownSquareFill } from 'react-icons/bs';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'
import { Typewriter } from 'react-simple-typewriter'


const Home = ({scrollToAbout}) => {
  return (
    <>
      <div className="container-fluid" id="container_Home">
        <div className="d-flex justify-content-end pt-2">
          <a href="https://www.linkedin.com/in/davide-lobascio-dev/">
            <FaLinkedin className="text_lighter2 mx-4 fs-5 social_icon"/>
          </a>
          <a href="http://google.it">
              <FaInstagram className="text_lighter2 mx-4 fs-5 social_icon"/>
            </a>
            <a href="https://github.com/xKishon">
              <FaGithub className="text_lighter2 mx-4 fs-5 social_icon"/>
            </a>
            <a href="https://www.codewars.com/users/xKishon">
              <SiCodewars className="text_lighter2 mx-4 fs-5 social_icon"/>
            </a>
        </div>
        <div className="row vh-100">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-white display text-center">
              Hello i'm <span className="text_main text_shadow" id="name_landing">Davide Lobascio</span>.
            </h1>
            <h3 className="text-white text-center ">I'm a {" "}
            <span className="bg_lighter px-2 rounded-start rounded-end">
            <Typewriter
            words={['Full Stack Developer', 'Gamer', 'CLC Lover']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={70}
            delaySpeed={1000}
          />

            </span>
            </h3>
            <BsArrowDownSquareFill
              className="fs-1 text-white mt-4"
              id="arrow_down_landing"
              type="button"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

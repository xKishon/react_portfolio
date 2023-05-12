import { BsArrowDownSquareFill } from 'react-icons/bs';
import {MdRocketLaunch} from 'react-icons/md'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'
const Home = ({ scrollToNavbar }) => {


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
              Hello i'm <span className="text_main" id="name_landing">Davide Lobascio</span>.
            </h1>
            <h3 className="text-white text-center">I'm a Full-Stack web developer <MdRocketLaunch className=""/></h3>
            <BsArrowDownSquareFill
              className="fs-1 text-white mt-4"
              id="arrow_down_landing"
              type="button"
              onClick={scrollToNavbar}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from 'react'
import Hexagons from './Hexagons'

const About = () => {
  return (
    <>
      <div className="container-fluid bg_dark pt-5">
        <h1 className="text_main text-center text-uppercase mb-3 mt-3 h1_border_bottom fw-bold">About</h1>
        <p className=" fs-6 text-uppercase text-center text-white">chi sono?</p>
        <div className="row">
          <div className="col-12 col-md-6 p-5 d-flex justify-content-center flex-column">
            <img src="../../prova2.png" alt="Davide Lobascio" className=""></img>
            <div className="container-fluid rounded shadow bg_dark">
            <h2 className="text-center text_main mt-4 h1_shadow">Tech Stack</h2>
              <div className="row justify-content-center">
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                  <img src="../../htmllogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">HTML</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../csslogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">CSS</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../bootstraplogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">BootStrap</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../javascriptlogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">JavaScript</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../reactlogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">React</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../phplogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">PhP</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../laravellogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">Laravel</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../mysqllogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">MySQL</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../vscodelogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">VS Code</p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column justify-content-center my-2">
                <img src="../../gitlogo.svg" alt="x" height="50"></img>
                  <p className="text-center text_lighter2">Git</p>
                </div>                  
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6 p-5">
            <p className="lead text-center text-white">Ciao sono blabla testo testo stesto develope  isdfosgpèsdgsdgsdgsdgs Ciao sono blabla testo testo stesto developer  isdfosgpèsdgsdgsdgsdgsCiao  sono blabla testo testo stesto developer isdfosgpè sdgsdgsdgsdgsCiao sono blabla  testo testo stesto developer isdfosgpèsdgsdgs dgsdgsCiao sono blabla  testo testo stesto developer isdfosgp èsdgsdgsdgsdgsCiao so no blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla tes o testo stesto developer isdfosgpèsdgs dgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsd gsdgsdgsCiao s o o blabla tes to testo stesto developer isdfosgpès dgsdgsdg sdgsCiao sono blabla  testo testo stesto developer isdfosgpèsdgsd dgs dgsCiao sono blab la testo testo  ste  sto developer  isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosg pèsdgsdgsdgsdgsCiao sono blab la testo esto stesto developer isdfosgpèsdgs  dgsdgsdgs</p>
          </div>
        </div>
        <Hexagons />
      </div>
    </>
      
  )
}

export default About
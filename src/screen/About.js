import React from 'react'
import Hexagons from './Hexagons'

const About = () => {
  return (
    <>
      <div className="container-fluid pt-5 bg_dark">
        <h1 className="text_main text-center text-uppercase mb-3 h1_border_bottom">About</h1>
        <p className=" fs-6 text-uppercase text-center text-white">chi sono?</p>
        <div className="row">
          <div className="col-12 col-md-6 p-5 d-flex justify-content-center flex-column">
            <img src="../../dev1.jpg" alt="Davide Lobascio" className="img-fluid rounded"></img>
            <div className="container-fluid bg_dark rounded shadow">
            <h2 className="text-center text_main mt-4">Tech Stack</h2>
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
            <p className="text-white bg_dark">Ciao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgs Ciao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgsCiao sono blabla testo testo stesto developer isdfosgpèsdgsdgsdgsdgs</p>
          </div>
        </div>
        <Hexagons />
      </div>
    </>
      
  )
}

export default About
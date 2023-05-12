import React from 'react'
import {MdOutlineMobileFriendly, MdSpeed, MdLightbulbOutline} from 'react-icons/md'

const About = () => {
  return (
      <div className="container-fluid bg_lighter  pt-5">
          <h1 className="text_main text-center text-uppercase">About</h1>
          <div className="row d-flex justify-content-around pt-5">
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div className="hexagon d-flex justify-content-center align-items-center">
                <MdOutlineMobileFriendly className="text-white hexagon_icon_size"/>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div className="hexagon d-flex justify-content-center align-items-center">
                <MdSpeed className="text-white hexagon_icon_size"/>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div className="hexagon d-flex justify-content-center align-items-center">
                <MdLightbulbOutline className="text-white hexagon_icon_size"/>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div className="hexagon">

              </div>
            </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>Container 1</p>
            </div>
            <div className="col-12 col-md-6">
              <p>Container 2</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
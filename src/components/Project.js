import React from 'react'

const Project = ({name, description, img, github, site, technologies}) => {
const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
    
  return (

    <div className="col-10 col-md-6 d-flex justify-content-center my-4">
        <div className="card_project rounded" style={cardStyle}>
            <div className="project_body p-2">
                <header>
                    <p className="text_main text-center fs-1">{name}</p>
                    <p className="text-white">{technologies}</p>
                </header>
            </div>
            <div className="glow"></div>
        </div>

    </div>
    
  )
}

export default Project


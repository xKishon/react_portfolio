import React, {useState} from 'react'
import data from '../projectsData'
import Project from './Project'

const Projects = () => {
    const [projects, setProjects] = useState(data)
    console.log(projects)
    const years = Array.from(new Set(projects.map((el) =>el.year)))
    years.unshift("Tutti")
  return (
    <>
        <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex justify-content-center">
                {
                    years.map((year, index) => {
                        return <button key={index} className="projects_button btn bg_lighter py-1 px-3 rounded text-white mx-2"> {year}</button>
                    })
                }
            </div>
        </div>
        <div className="mt-5 row justify-content-center">
            {
                projects.map((el) =>( 
                <Project key={el.id} {...el} />
                ))}
        </div>
    </>
    
    
  )
}

export default Projects
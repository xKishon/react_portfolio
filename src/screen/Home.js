import React from 'react'
import ButtonLanding from '../components/ButtonLanding'

const Home = () => {
  return (
    <>
        <div className="container-fluid" id="container_Home">
            <div className="row vh-100">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <h1 className="text-white display text-center">Hello i'm <span className="text_main">Davide Lobascio</span>.</h1>
                    <h3 className="text-white text-center">I'm a Full-Stack web developer</h3>
                    <ButtonLanding />
                </div>
            </div>
        </div>
    </>



  )
}

export default Home
import React from 'react'
import {MdOutlineMobileFriendly, MdSpeed, MdRocketLaunch} from 'react-icons/md'
import {FaPeopleArrows} from 'react-icons/fa'

const Hexagons = () => {
  return (
    <div className="row d-flex justify-content-around pt-5 position-relative">
      <h1 className="d-inline-block text-center text_main mb-5 h1_border_bottom">Cosa Offro</h1>
          <div className="col-12 col-sm-6 col-lg-3 d-flex  align-items-center flex-column mb-5">
            <div className="hexagon d-flex justify-content-center align-items-center">
              <MdOutlineMobileFriendly className="text-white hexagon_icon_size"/>
            </div>
            <h3 className="text_main text-center mt-2">Soluzioni Responsive</h3>
            <p className="text-white text-center px-4">Strategia <strong>Mobile First</strong>. Ottimizzazione dei progetti sia su Mobile che su Desktop.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex  align-items-center flex-column mb-5">
            <div className="hexagon d-flex justify-content-center align-items-center">
              <MdSpeed className="text-white hexagon_icon_size"/>
            </div>
            <h3 className="text_main mt-2">Rapidità</h3>
            <p className="text-white text-center px-4">Tempi di consegna rapidi preservando la qualità del progetto, grazie all'utilizzo della metodologia Agile e SCRUM.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex  align-items-center flex-column mb-5">
            <div className="hexagon d-flex justify-content-center align-items-center">
              <FaPeopleArrows className="text-white hexagon_icon_size"/>
            </div>
            <h3 className="text_main mt-2">One to One</h3>
            <p className="text-white text-center px-4">Comunicazione diretta e collaborativa con il cliente. La fiducia è essenziale per comprendere appieno le esigenze e gli obiettivi.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex  align-items-center flex-column mb-5">
            <div className="hexagon d-flex justify-content-center align-items-center">
              <MdRocketLaunch className="text-white hexagon_icon_size"/>
            </div>
            <h3 className="text_main mt-2">Dinamicità</h3>
            <p className="text-white text-center px-4">Siti dinamici e coinvolgenti. Utilizzo di tecnologie moderne per creare effetti accattivanti, animazioni fluide ed intetettività per coinvolgere il visitatore al meglio.</p>
          </div>
        </div>
  )
}

export default Hexagons
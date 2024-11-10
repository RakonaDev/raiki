import './Servicio.css'

import PropTypes from 'prop-types'

function Servicio({ imagen, titulo, descripcion }) {
  return (
    <>
      <li className="servicio">
        <div className="header-servicio w-100 d-flex justify-content-center align-items-center">
          <img src={imagen} alt="servicio" className="imagen-servicio"/>
        </div>
        <div className='body-servicio'>
          <p className="fs-3 fw-medium text-black w-100">{titulo}</p>
          <p className="fs-6 text-black w-100">{descripcion}</p>
        </div>
      </li>
    </>
  )
}

Servicio.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
}

export default Servicio
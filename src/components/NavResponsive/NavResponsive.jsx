import { useState } from 'react'
import Home from '../../iconos/home'
import Nosotros from '../../iconos/Nosotros'
import PortafolioIcon from '../../iconos/Portafolio'
import ServicioIcon from '../../iconos/Servicios'
import './NavResponsive.css'

function NavResponsive() {

  const[mostrar, setMostrar] = useState(false)

  function switchNav () {
    setMostrar(!mostrar)
  }

  return (
    <>
      <button type="button" className="nav-button bg-body-secondary" onClick={() => switchNav()}>
        <i className="fa-solid fa-bars fs-5"></i>
      </button>
      <ul className={mostrar ? 'nav-container responsive text-bg-dark mostrar ' : 'nav-container responsive text-bg-dark'}>
        <li className='nav-item responsive'>
          <a href="#" className='nav-link responsive d-flex gap-2 align-items-center ps-3'>
            <span className='text-light'>Inicio</span>
            <Home/>
          </a>
        </li>
        <li className='nav-item responsive'>
          <a href="#" className='nav-link responsive d-flex gap-2 align-items-center ps-3'>
            <span className='text-light'>Nosotros</span>
            <Nosotros/>
          </a>
        </li>
        <li className='nav-item responsive'>
          <a href="#" className='nav-link responsive d-flex gap-2 align-items-center ps-3'>
            <span className='text-light fs-6'>Portafolio</span>
            <PortafolioIcon/>
          </a>
        </li>
        <li className='nav-item responsive'>
          <a href="#" className='nav-link responsive d-flex gap-2 align-items-center ps-3'>
            <span className='text-light'>Servicios</span>
            <ServicioIcon/>
          </a>
        </li>
      </ul>
    </>
  )
}

export default NavResponsive
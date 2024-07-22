import { useState } from 'react'
import Home from '../../iconos/home'
import Nosotros from '../../iconos/Nosotros'
import PortafolioIcon from '../../iconos/Portafolio'
import ServicioIcon from '../../iconos/Servicios'
import './NavResponsive.css'
import { NavLink } from 'react-router-dom'

function NavResponsive() {

  const[mostrar, setMostrar] = useState(false)

  function switchNav () {
    setMostrar(!mostrar)
  }

  return (
    <>
      <button type="button" className="nav-button bg-body-secondary me-3" onClick={() => switchNav()}>
        <i className="fa-solid fa-bars fs-5 text-black"></i>
      </button>
      <ul className={mostrar ? 'nav-container responsive text-bg-dark mostrar ' : 'nav-container responsive text-bg-dark'}>
        <li className='nav-item responsive'>
          <NavLink to='/' className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light'>Inicio</span>
            <Home/>
          </NavLink>
        </li>
        <li className='nav-item responsive'>
          <NavLink to='/nosotros' className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light'>Nosotros</span>
            <Nosotros/>
          </NavLink>
        </li>
        <li className='nav-item responsive'>
          <NavLink to='/portafolio' className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light fs-6'>Portafolio</span>
            <PortafolioIcon/>
          </NavLink>
        </li>
        <li className='nav-item responsive'>
          <NavLink to='/servicios' className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light'>Servicios</span>
            <ServicioIcon/>
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavResponsive
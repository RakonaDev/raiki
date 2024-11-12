import { useContext, useEffect, useState } from 'react'
import Home from '../../iconos/home'
import Nosotros from '../../iconos/Nosotros'
import PortafolioIcon from '../../iconos/Portafolio'
import ServicioIcon from '../../iconos/Servicios'
import { ResponsiveContext } from "../../context/Responsive";
import './NavResponsive.css'

function NavResponsive() {

  const[mostrar, setMostrar] = useState(false)

  const[esProyecto, setEsProyecto] = useState(false)

  useEffect(() => {
    if(location.pathname.includes('/proyectos/')){
      setEsProyecto(true)
    }
    else {
      setEsProyecto(false)
    }
  }, [location.pathname])

  function switchNav () {
    setMostrar(!mostrar)
  }

  const { scrollElemento, mandarInicio } = useContext(ResponsiveContext)

  return (
    <>
      <button type="button" className="nav-button bg-body-secondary" onClick={() => switchNav()}>
        <i className="fa-solid fa-bars fs-5 text-black"></i>
      </button>
      <ul className={mostrar ? 'nav-container responsive text-bg-dark mostrar ' : 'nav-container responsive text-bg-dark'}>
        <li className='nav-item responsive' onClick={() => esProyecto ? mandarInicio('dividor') : scrollElemento('#dividor')}>
          <div className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light'>Inicio</span>
            <Home/>
          </div>
        </li>
        <li className='nav-item responsive' onClick={() => esProyecto ? mandarInicio('nosotros') : scrollElemento('#nosotros')}>
          <div  className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light'>Nosotros</span>
            <Nosotros/>
          </div>
        </li>
        <li className='nav-item responsive' onClick={() => esProyecto ? mandarInicio('servicios') : scrollElemento('#servicios')}>
          <div  className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light fs-6'>Servicios</span>
            <PortafolioIcon/>
          </div>
        </li>
        <li className='nav-item responsive' onClick={() => esProyecto ? mandarInicio('proyectos') : scrollElemento('#proyectos')}>
          <div className='nav-link responsive d-flex gap-2 align-items-center ps-4'>
            <span className='text-light'>Proyectos</span>
            <ServicioIcon/>
          </div>
        </li>
      </ul>
    </>
  )
}

export default NavResponsive
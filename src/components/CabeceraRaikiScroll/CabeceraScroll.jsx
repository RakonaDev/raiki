import { useEffect } from 'react'
import Home from '../../iconos/home'
import Nosotros from '../../iconos/Nosotros'
import PortafolioIcon from '../../iconos/Portafolio'
import RaikiScrollIcon from '../../iconos/RaikiScroll'
import ServicioIcon from '../../iconos/Servicios'
import Proyecto from '../Proyecto/Proyecto'
import './CabeceraScroll.css'

function CabeceraScroll() {

  function scrollElemento (elementoSeleccionado, instancia) {
    const elementos = document.querySelectorAll(elementoSeleccionado)
    if(elementos.length > instancia){
      elementos[instancia].scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <header className='cabecera-scroll p-1 d-flex justify-content-evenly'>
      <div type='button' className='logo-container d-flex justify-content-center align-items-center'>
        <RaikiScrollIcon/>
      </div>
      <nav className='lista-navegacion d-flex gap-2'>
        <a href='#dividor' className='d-flex lista-item align-items-center justify-content-center gap-2 pointer-event' >
          <p className='text-light fs-5 mt-3'>Inicio</p>
          <Home/>
        </a>
        <a href='#nosotros' className='d-flex lista-item align-items-center justify-content-center gap-2'>
          <p className='text-light fs-5 mt-3'>Nosotros</p>
          <Nosotros/>
        </a>
        <a href='#servicios' className='d-flex lista-item align-items-center justify-content-center gap-2'>
          <p className='text-light fs-5 mt-3'>Servicios</p>
          <ServicioIcon/>
        </a>
        <a href='#proyectos' className='d-flex lista-item align-items-center justify-content-center gap-2'>
          <p className='text-light fs-5 mt-3'>Proyectos</p>
          <PortafolioIcon/>
        </a>
      </nav>
    </header>
  )
}

export default CabeceraScroll

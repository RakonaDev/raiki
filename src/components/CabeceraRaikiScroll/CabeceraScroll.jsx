import { useContext, useEffect } from 'react'
import Home from '../../iconos/home'
import Nosotros from '../../iconos/Nosotros'
import PortafolioIcon from '../../iconos/Portafolio'
import RaikiScrollIcon from '../../iconos/RaikiScroll'
import ServicioIcon from '../../iconos/Servicios'
import './CabeceraScroll.css'
import { ResponsiveContext } from '../../context/Responsive'
import RedesScroll from '../RedesScroll/RedesScroll'

function CabeceraScroll() {

  const { scrollElemento } = useContext(ResponsiveContext)

  function EliminarActive() {
    const $navBoton = document.querySelectorAll(".lista-item");
    $navBoton.forEach((item) => {
      item.classList.remove("active");
    });
  }

  useEffect(() => {
    const $navItem = document.querySelectorAll(".lista-item")
    window.addEventListener('scroll', () => {

      let scrollInicio = document.querySelector('.dividor').scrollHeight + document.querySelector('#inicio').scrollHeight - 60
      let scrollNosotros = document.querySelector('#nosotros').scrollHeight + scrollInicio - 60
      let scrollServicios = document.getElementById("servicios").scrollHeight + scrollNosotros - 60
      let scrollProyectos = document.getElementById("proyectos").scrollHeight + scrollServicios - 60

      if(window.scrollY >= 0 && window.scrollY <= scrollInicio){
        EliminarActive()
        $navItem[0].classList.add("active")
      }
      else if(window.scrollY > scrollInicio && window.scrollY <= scrollNosotros){
        EliminarActive()
        $navItem[1].classList.add("active")
      }
      else if(window.scrollY > scrollNosotros && window.scrollY <= scrollServicios){
        EliminarActive()
        $navItem[2].classList.add("active")
      }
      else if(window.scrollY > scrollServicios && window.scrollY <= scrollProyectos){
        EliminarActive()
        $navItem[3].classList.add("active")
      }
    })
  },[])

  return (
    <header className='cabecera-scroll d-flex justify-content-evenly align-items-center'>
      <div type='button' className='logo-container d-flex justify-content-center align-items-center'>
        <RaikiScrollIcon/>
      </div>
      <ul className='lista-navegacion d-flex justiy-content-evenly'>
        <li className='d-flex lista-item align-items-center justify-content-center gap-2' onClick={() => scrollElemento('.dividor')}>
          <p className='text-light mt-3'>Inicio</p>
          <Home/>
        </li>
        <li className='d-flex lista-item align-items-center justify-content-center gap-2' onClick={() => scrollElemento('.nosotros-main')}>
          <p className='text-light mt-3'>Nosotros</p>
          <Nosotros/>
        </li>
        <li className='d-flex lista-item align-items-center justify-content-center gap-2' onClick={() => scrollElemento('.servicios-main')}>
          <p className='text-light mt-3'>Servicios</p>
          <ServicioIcon/>
        </li>
        <li className='d-flex lista-item align-items-center justify-content-center gap-2' onClick={() => scrollElemento('.proyectos-main')}>
          <p className='text-light mt-3'>Proyectos</p>
          <PortafolioIcon/>
        </li>
      </ul>
      <RedesScroll/>
    </header>
  )
}

export default CabeceraScroll

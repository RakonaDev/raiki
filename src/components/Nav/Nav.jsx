import { useContext, useEffect, useState } from "react";
import Home from "../../iconos/home";
import Nosotros from "../../iconos/Nosotros";
import PortafolioIcon from "../../iconos/Portafolio";
import ServicioIcon from "../../iconos/Servicios";
import { ResponsiveContext } from "../../context/Responsive";

import './Nav.css'

function Nav() {

  const { scrollElemento, mandarInicio } = useContext(ResponsiveContext)

  const[esProyecto, setEsProyecto] = useState(false)

  useEffect(() => {
    if(location.pathname.includes('/proyectos/')){
      setEsProyecto(true)
    }
    else {
      setEsProyecto(false)
    }
  }, [setEsProyecto])

  return (
    <>
      <ul className="nav-container d-flex flex-row bg-black">
        <li className={`nav-item ${esProyecto ? '' : 'active'} d-flex gap-2 align-items-center`} onClick={() => esProyecto ? mandarInicio() : ''}>
          <span className="text-white">Inicio</span>
          <Home />
        </li>
        <li className="nav-item d-flex gap-2 align-items-center" onClick={() => esProyecto ? mandarInicio() : scrollElemento('#nosotros')}>
          <span className="text-white">Nosotros</span>
          <Nosotros />
        </li>
        <li className="nav-item d-flex gap-2 align-items-center" onClick={() => esProyecto ? mandarInicio() : scrollElemento('#servicios')}>
          <span className="text-white">Servicios</span>
          <ServicioIcon />
        </li>
        <li className={`nav-item ${esProyecto ? 'active' : ''} d-flex gap-2 align-items-center`} onClick={() => scrollElemento('#proyectos')}>
          <span className="text-white">Proyectos</span>
          <PortafolioIcon />
        </li>
      </ul>
    </>
  );
}

export default Nav;

import { useEffect } from "react";
import Home from "../../iconos/home";
import Nosotros from "../../iconos/Nosotros";
import PortafolioIcon from "../../iconos/Portafolio";
import ServicioIcon from "../../iconos/Servicios";
import { NavLink } from "react-router-dom";

function Nav() {

  useEffect(() => {
    const $navItem = document.querySelectorAll('.nav-item')
    if(location.pathname.includes("nosotros")){
      $navItem[1].classList.add("active")
    }
    else if(location.pathname.includes("portafolio")){
      $navItem[2].classList.add("active")
    }
    else if(location.pathname.includes("servicios")){
      $navItem[3].classList.add("active")
    }
    else{
      $navItem[0].classList.add("active")
    }
  },[])
  
  function EliminarActive() {
    const $navBoton = document.querySelectorAll(".nav-item");
    $navBoton.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function activarLink(event) {
    EliminarActive();
    const $navItem = event.target.closest(".nav-item");
    $navItem.classList.add("active");
  }
  return (
    <>
      <ul className="nav-container d-flex flex-row bg-black">
        <li className="nav-item">
          <NavLink
            to='/'
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Inicio</span>
            <Home />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to='/nosotros'
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Nosotros</span>
            <Nosotros />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to='/portafolio'
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Portafolio</span>
            <PortafolioIcon />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to='/servicios'
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Servicios</span>
            <ServicioIcon />
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;

import { useEffect } from "react";
import Home from "../../iconos/home";
import Nosotros from "../../iconos/Nosotros";
import PortafolioIcon from "../../iconos/Portafolio";
import ServicioIcon from "../../iconos/Servicios";

function Nav() {

  useEffect(() => {
    const $navItem = document.querySelectorAll(".nav-item")
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 0 && window.scrollY <= 1900){
        EliminarActive()
        $navItem[0].classList.add("active")
      }
      else if(window.scrollY > 1900 && window.scrollY <= 3100){
        EliminarActive()
        $navItem[1].classList.add("active")
      }
      else if(window.scrollY > 3100 && window.scrollY <= 6000){
        EliminarActive()
        $navItem[2].classList.add("active")
      }
      
      else{
        location.hash = ""
      }
    })
  },[])
  

  useEffect(() => {
    const $navItem = document.querySelectorAll(".nav-item");
    if (location.pathname.includes("nosotros")) {
      $navItem[1].classList.add("active");
    } else if (location.pathname.includes("servicios")) {
      $navItem[2].classList.add("active");
    } else if (location.pathname.includes("proyectos")) {
      $navItem[3].classList.add("active");
    } else {
      $navItem[0].classList.add("active");
    }
  }, []);

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
    console.log(location.hash)
  }
  return (
    <>
      <ul className="nav-container d-flex flex-row bg-black">
        <li className="nav-item">
          <a
            href="#inicio"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Inicio</span>
            <Home />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#nosotros"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Nosotros</span>
            <Nosotros />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#servicios"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Servicios</span>
            <ServicioIcon />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#proyectos"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Proyectos</span>
            <PortafolioIcon />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;

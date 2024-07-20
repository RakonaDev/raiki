import Home from "../../iconos/home";
import Nosotros from "../../iconos/Nosotros";
import PortafolioIcon from "../../iconos/Portafolio";
import ServicioIcon from "../../iconos/Servicios";

function Nav() {
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
          <a
            href="#"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Inicio</span>
            <Home />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Nosotros</span>
            <Nosotros />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Portafolio</span>
            <PortafolioIcon />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link d-flex gap-2 align-items-center"
            onClick={(event) => activarLink(event)}
          >
            <span className="text-white">Servicios</span>
            <ServicioIcon />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;

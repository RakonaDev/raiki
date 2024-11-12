import { useContext, useEffect, useState } from "react";
import Home from "../../iconos/home";
import Nosotros from "../../iconos/Nosotros";
import PortafolioIcon from "../../iconos/Portafolio";
import RaikiScrollIcon from "../../iconos/RaikiScroll";
import ServicioIcon from "../../iconos/Servicios";
import "./CabeceraScroll.css";
import { ResponsiveContext } from "../../context/Responsive";
import RedesScroll from "../RedesScroll/RedesScroll";
import { activarItemXScroll, EliminarActive } from "../../logic/ActivarScroll";

function CabeceraScroll() {
  const { scrollElemento, mandarInicio } = useContext(ResponsiveContext);
  const[esProyecto, setEsProyecto] = useState(false)


  useEffect(() => {
    if(location.pathname.includes('/proyectos/')){
      setEsProyecto(true)
    }
    else {
      setEsProyecto(false)
    }
  }, [setEsProyecto])

  useEffect(() => {
    const $navItem = document.querySelectorAll(".lista-item");

    if (location.pathname === "/") {
      activarItemXScroll($navItem);
      window.addEventListener("scroll", () => {
        activarItemXScroll($navItem);
      });
    } else {
      EliminarActive();
      $navItem[3].classList.add("active");
    }
  });

  return (
    <header className="cabecera-scroll d-flex justify-content-evenly align-items-center">
      <div
        type="button"
        className="logo-container d-flex justify-content-center align-items-center"
      >
        <RaikiScrollIcon />
      </div>
      <ul className="lista-navegacion d-flex justiy-content-evenly">
        <li
          className="d-flex lista-item align-items-center justify-content-center gap-2"
          onClick={() => esProyecto ? mandarInicio('dividor') : scrollElemento(".dividor")}
        >
          <p className="text-light mt-3">Inicio</p>
          <Home />
        </li>
        <li
          className="d-flex lista-item align-items-center justify-content-center gap-2"
          onClick={() => esProyecto ? mandarInicio('nosotros') : scrollElemento(".nosotros-main")}
        >
          <p className="text-light mt-3">Nosotros</p>
          <Nosotros />
        </li>
        <li
          className="d-flex lista-item align-items-center justify-content-center gap-2"
          onClick={() => esProyecto ? mandarInicio('servicios') : scrollElemento(".servicios-main")}
        >
          <p className="text-light mt-3">Servicios</p>
          <ServicioIcon />
        </li>
        <li
          className="d-flex lista-item align-items-center justify-content-center gap-2"
          onClick={() => esProyecto ? mandarInicio('proyectos') : scrollElemento(".proyectos-main")}
        >
          <p className="text-light mt-3">Proyectos</p>
          <PortafolioIcon />
        </li>
      </ul>
      <RedesScroll />
    </header>
  );
}

export default CabeceraScroll;

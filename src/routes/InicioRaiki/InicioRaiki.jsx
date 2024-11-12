import Inicio from "../Inicio/Inicio";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";
import Proyectos from "../Proyectos/Proyectos";
import { useContext, useEffect } from "react";
import { ResponsiveContext } from "../../context/Responsive";

export function InicioRaiki() {

  const { scrollElemento } = useContext(ResponsiveContext);

  useEffect(() => {
    if(sessionStorage.getItem('elemento')) {
      scrollElemento(`#${sessionStorage.getItem('elemento')}`)
    }
  },[])

  return (
    <>
      <div id="inicio">
        <Inicio />
      </div>
      <div id="nosotros" className="pt-2">
        <Nosotros />
      </div>
      <div id="servicios" className="pt-2">
        <Servicios />
      </div>
      <div id="proyectos" className="pt-4 bg-light">
        <Proyectos />
      </div>
    </>
  );
}

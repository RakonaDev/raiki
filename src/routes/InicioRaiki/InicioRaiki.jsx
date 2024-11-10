import Inicio from "../Inicio/Inicio";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";
import Proyectos from "../Proyectos/Proyectos";

export function InicioRaiki() {
  return (
    <>
      <div id="inicio">
        <Inicio />
      </div>
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
    </>
  );
}

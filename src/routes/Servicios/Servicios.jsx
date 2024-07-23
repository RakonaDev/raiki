import Servicio from "../../components/Servicio/Servicio";

import Servicio1 from "../../assets/Servicio1.svg";
import Servicio2 from "../../assets/Servicio2.svg";
import Servicio3 from "../../assets/Servicio3.svg";
import Servicio4 from "../../assets/Servicio4.svg";

import "./Servicios.css";

function Servicios() {
  return (
    <div className="w-100 mt-5 ps-5 pe-5 pt-5 d-flex justify-content-center">
      <ul className="w-75 d-flex servicios-lista justify-content-evenly flex-wrap mt-5">
        <Servicio
          imagen={Servicio1}
          titulo="Branding"
          descripcion="Potenciamos marcas mediante estrategias de branding que fusionan creatividad y significado, construyendo una identidad visual coherente y atractiva que conecta de manera auténtica con su audiencia."
        />
        <Servicio
          imagen={Servicio2}
          titulo="Diseño de Interiores"
          descripcion="Transformamos espacios con nuestro servicio de diseño de interiores, fusionando funcionalidad y estética para crear ambientes únicos y personalizados que reflejen el estilo y las necesidades de nuestros clientes."
        />
        <Servicio
          imagen={Servicio3}
          titulo="Desarrollo Web"
          descripcion="Ayudamos a empresas y particulares a desarrollar sitios web personalizados,diseñados estratégicamente para satisfacer sus necesidades específicas."
        />
        <Servicio
          imagen={Servicio4}
          titulo="Creación de personajes"
          descripcion="Desde conceptos iniciales hasta la materialización de personajes únicos y cautivadores, trabajamos para dar forma a tus visiones con creatividad y atención al detalle"
        />
      </ul>
    </div>
  );
}

export default Servicios;

import Servicio from "../../components/Servicio/Servicio";

import Servicio1 from "../../assets/Servicio1.svg";
import Servicio2 from "../../assets/Servicio2.svg";
import Servicio3 from "../../assets/Servicio3.svg";
import Servicio4 from "../../assets/Servicio4.svg";

import Asesor from '../../assets/asesor.png'

import Consultoria1 from '../../assets/consultoria1.png'
import Consultoria2 from '../../assets/consultoria2.svg'

import "./Servicios.css";

function Servicios() {

  return (
    <>
      <div className="w-100 servicios-main mt-5 ps-5 pe-5 pt-5 d-flex flex-column justify-content-center">
        <ul className="w-100 d-flex servicios-lista justify-content-evenly flex-wrap mt-5">
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
      <article className="bg-servicios ps-5 pb-5 pe-5 w-100 h-auto font-k2d">
          <p className="fs-1 text-black fw-medium text-center pb-5 pt-5">
            Nosotros te Asesoramos
          </p>
          <div className="w-100 d-flex justify-content-evenly gap-4 flex-wrap">
            <div className="w-container d-flex flex-column justify-content-center">
              <p className="fs-4 fw-bold text-center">Reconocimiento de Marca</p>
              <p className="fs-5 text-center">Una identidad de marca sólida contribuye al reconocimiento inmediato por parte de los clientes.</p>
            </div>
            <div className="asesor-container">
              <img src={Asesor} alt="" className="asesor-item"/>
            </div>
            <div className="w-container d-flex flex-column justify-content-center">
              <p className="fs-4 fw-bold text-center">Confianza y Lealtad</p>
              <p className="fs-5 text-center">Una marca bien construida no solo crea una impresión visual, sino también emocional.</p>
            </div>
          </div>
          <p className="fs-1 text-black text-center fw-medium mt-5 mb-5">
            Agenda una cita con nosotros
          </p>
          <div className="d-flex w-100 justify-content-evenly flex-wrap row-gap-5">
            <article className="agenda-item p-5">
              <h4 className="fs-3 text-black text-center">¿Necesitas que te guiemos?</h4>
              <p className="fs-5 mt-5 h-25">Te <span className="fw-bolder">obsequiamos 20 min.</span> de consultoría</p>
              <div className="w-100 mt-5 footer-agenda d-flex flex-wrap column-gap-5 justify-content-evenly align-items-end"> 
                <button type="button" className="boton-agenda text-light">Agendar Consultoría</button>
                <img src={Consultoria1} alt="consultoria" className="imagen-consultoria"/>
              </div>
            </article>
            <article className="agenda-item p-5">
              <h4 className="fs-3 text-black text-center">¿Ya tienes claro que necesitas?</h4>
              <p className="fs-5 mt-5 h-25">Reunámonos para revisar tu requerimiento. Agendar para cotizar</p>
              <div className="w-100 mt-5 footer-agenda d-flex column-gap-5 flex-wrap justify-content-evenly align-items-end">
                <button type="button" className="boton-agenda text-light">Agenda Consultoría</button>
                <img src={Consultoria2} alt="consultoria" className="imagen-consultoria" />
              </div>
            </article>
          </div>
        </article>
    </>
  );
}

export default Servicios;

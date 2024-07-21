import "./Inicio.css";
import Layer_1 from "../../assets/Layer_1.svg";
import Layer_2 from "../../assets/Layer_2.svg";
import Marca1Icon from "../../iconos/Marca1";
import Marca2Icon from "../../iconos/Marca2";
import Marca3Icon from "../../iconos/Marca3";

function Inicio() {
  return (
    <>
      <section className="w-100 header-body">
        <img src={Layer_1} alt="Capa_1" className="Layer_1" />
        <div className="bola-chiquita izquierda"></div>
        <div className="bola-mediana izquierda"></div>
        <div className="bola-grande izquierda"></div>
        <p className="fs-1 text-black">
          Creatividad e innovación en branding y diseño de interiores para
          experiencias únicas.
        </p>
        <img src={Layer_2} alt="Capa_2" className="Layer_2" />
        <div className="bola-chiquita derecha"></div>
        <div className="bola-mediana derecha"></div>
        <div className="bola-grande derecha"></div>
      </section>
      <section className="marcas-container w-100">
        <div className="marca-titulo container d-flex justify-content-center">
          <p className="fs-1 mt-5 text-black">Marcas que redefinen Ambientes</p>
        </div>
        <article className="marca-article w-100 mt-5">
          <div className="marca">
            <div className="cabecera-marca d-flex justify-content-center align-items-center">
              <Marca1Icon />
            </div>
            <div className="cuerpo-marca mt-4">
              <p>Creación de Identidad y Experiencia de Marca</p>
            </div>
          </div>
          <div className="marca">
            <div className="cabecera-marca d-flex justify-content-center align-items-center">
              <Marca2Icon/>
            </div>
            <div className="cuerpo-marca mt-4">
              <p>Optimización del Espacio y 
              Experiencia del Usuario</p>
            </div>
          </div>
          <div className="marca">
            <div className="cabecera-marca d-flex justify-content-center align-items-center">
              <Marca3Icon/>
            </div>
            <div className="cuerpo-marca mt-4">
              <p>Comunicación Visual y 
              Coherencia de Marca</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Inicio;

import Personaje from "../../components/Personaje/Personaje";

import Zaitex from "../../assets/zaitex.png";
import Profit from "../../assets/profit.png";
import Club from "../../assets/club.png";

import Personaje1 from "../../assets/personaje1.png";
import Personaje2 from "../../assets/personaje2.png";
import Personaje3 from "../../assets/personaje3.png";
import Personaje4 from "../../assets/personaje4.png";

import "./Nosotros.css";

function Nosotros() {

  return (
    <>
      <section className="nosotros-main w-100 pt-5 h-auto" id="nosotros">
        <article className="cabecera-nosotros container-xxl">
          <p className="fs-1 fw-medium">Nuestra Historia</p>
          <p className="fs-6">
            Trasforma tu Imaginación en una Aventura: Únete a Nuestro Viaje
            Raikiano
          </p>
          <p className="fs-4 mt-5">
            Raiki, nacio en noviembre de 2018 con una pasión por diseños de
            logos minimalistas, evolucionó en noviembre de 2019 hacia la
            creación y comunicación de marcas. Sin embargo, la pandemia de
            COVID-19 en 2020 reveló grietas en su enfoque tradicional,
            llevándola a una transformación completa. En 2021, Raiki resurgió
            con un nuevo enfoque en Branding y Arquitectura, fusionando arte y
            estrategia para crear marcas profundamente arraigadas. De un modesto
            creador de logos, se convirtió en una fuerza impulsora en la
            creación de marcas impactantes en un mundo cambiante.
          </p>
        </article>
        <section className="team-raiki w-100 container-xxl">
          <p className="fs-1 fw-medium">Team Raiki</p>
          <ul className="lista-raiki mt-5">
            <Personaje
              imagen={Personaje1}
              nombre="Mayckol Mori"
              cargo="Ceo Fundador"
            />
            <Personaje
              imagen={Personaje2}
              nombre="Luzmila Aliaga"
              cargo="Directora de Estrategia"
            />
            <Personaje
              imagen={Personaje3}
              nombre="Frank Diaz"
              cargo="Director de Comunicaciones"
            />
            <Personaje
              imagen={Personaje4}
              nombre="Juan Cajas"
              cargo="Desarrollador Web"
            />
          </ul>
        </section>
        <section className="socios-section w-100 container-xxl h-auto pb-5 pt-5">
          <p className="fs-1 fw-medium mb-5">Socios Estratégicos</p>
          <main className="socios-container d-flex gap-4 justify-content-evenly flex-wrap">
            <a className="socio-item my-auto">
              <img src={Zaitex} alt="zaitex" />
            </a>
            <a className="socio-item my-auto">
              <img src={Profit} alt="profit trading" />
            </a>
            <a className="socio-item my-auto">
              <img src={Club} alt="club de las 5am" />
            </a>
          </main>
        </section>
      </section>
    </>
  );
}

export default Nosotros;

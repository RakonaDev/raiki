import { useContext } from "react";
import Banner from "../../assets/SaldanaGroup/banner.jpg";
import Body from "../../assets/SaldanaGroup/body.jpg";
import { ResponsiveContext } from "../../context/Responsive";

export default function SaldanaGroup() {

  const { windowWidth } = useContext(ResponsiveContext);

  return (
    <>
      <img src={Banner} alt="banner" className="w-100 h-auto" />
      <header className="w-100 h-auto bg-black text-white">
        <div className={`container-xxl py-5 d-flex row-gap-5 column-gap-3 ${windowWidth <= 750 ? 'flex-wrap-reverse' : ''}`}>
          <div className={`${windowWidth <= 750 ? 'w-100' : 'w-50'} py-3`}>
            <h1 className={`${windowWidth <= 750 ? 'text-center fw-bold' : ''}`}>Construyendo Sueños</h1>
            <p className="mt-5 text-justify">
              Enfrentamos desafíos significativos en nuestros primeros proyectos
              en el sector de la construcción, lo que nos permitió identificar
              oportunidades de mejora. Transformamos esas lecciones en una
              metodología única: CONSTRU - PRO, basada en prácticas sólidas de
              planificación, ejecución y control de calidad, que ahora forman el
              pilar de nuestros servicios. Hoy, Saldaña Group aplica esta
              experiencia para garantizar la excelencia y la satisfacción en
              cada proyecto que desarrollamos.
            </p>
          </div>
          <div className={`${windowWidth <= 750 ? 'w-100 align-items-center' : 'w-50 align-items-end'} flex-column d-flex `}>
            <div>
              <p className={`font-k2d ${windowWidth <= 750 ? 'text-center' : ''}`}>Branding / identidad / Estrategia </p>
              <h1 className={`font-k2d fw-normal ${windowWidth <= 750 ? 'text-center' : ''}`}>Saldaña Group</h1>
            </div>
          </div>
        </div>
      </header>
      <section className="w-100 h-auto bg-white text-black">
        <div className={`container-xxl py-5 d-flex row-gap-5 column-gap-3 ${windowWidth <= 750 ? 'flex-wrap-reverse' : ''}`}>
          <p className={`${windowWidth <= 750 ? 'w-100 ' : 'w-50 pe-5'} font-k2d text-justify`}>
            Saldaña Group ha dejado su huella en el ámbito de la construcción,
            destacando por su enfoque en proyectos de alta calidad. Ahora, la
            empresa se enfoca en transformar la manera en que se concibe el
            desarrollo urbano en Perú. Con una misión clara de mejorar la
            calidad de vida a través de proyectos sostenibles e innovadores,
            Saldaña Group se dedica a empoderar a las comunidades locales,
            aportando infraestructura de vanguardia y contribuyendo al
            crecimiento y bienestar económico del país. Creemos firmemente que
            &apos; no hay progreso sin construcción responsable &apos; , y
            estamos comprometidos a liderar esta visión con cada proyecto que
            realizamos
          </p>
          <div className={` ${windowWidth <= 750 ? 'w-100 ' : 'w-50'} h-auto d-flex align-items-center`}>
            <h1 className={`fw-bold ${windowWidth <= 750 ? 'text-center' : ''}`}>
              Liderando el Camino en el Mundo de la construcción{" "}
            </h1>
          </div>
        </div>
      </section>
      <img src={Body} alt="body" className="w-100 h-auto" />
      <section className="w-100 h-auto bg-white text-black">
        <div className="container-xxl py-5 d-flex row-gap-5">
          <p className={`${ windowWidth <= 750 ? '' : 'pe-5'} w-100 font-k2d text-justify pb-5`}>
            En Saldaña Group, redefinimos nuestra identidad al redescubrir los
            valores que nos guían. Guiados por Mauro Saldaña, ingeniero civil y
            fundador, entendimos a fondo el sector de la construcción, los
            desafíos técnicos y las expectativas del mercado. Esto nos permitió
            diseñar una estrategia de posicionamiento sólida, enfocada en
            innovación y sostenibilidad. 
            La experiencia y resiliencia de Mauro
            se reflejan en cada proyecto, inspirando a nuestro equipo a superar
            obstáculos y entregar resultados de excelencia. Creemos que con
            conocimiento técnico, planificación rigurosa y compromiso,
            convertimos los retos del sector en oportunidades para construir un
            futuro mejor para nuestras comunidades.
          </p>
        </div>
      </section>
    </>
  );
}

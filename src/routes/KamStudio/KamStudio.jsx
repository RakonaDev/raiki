import Banner from "../../assets/KamStudio/banner.jpg";
import PrimeraFoto from "../../assets/KamStudio/1.jpg";
import SegundaFoto from "../../assets/KamStudio/2.jpg";
import TerceraFoto from "../../assets/KamStudio/3.jpg";
import { useContext } from "react";
import { ResponsiveContext } from "../../context/Responsive";

export default function KamStudio() {
  const { windowWidth } = useContext(ResponsiveContext);

  return (
    <div>
      <img src={Banner} alt="banner" className="w-100 h-auto" />
      <header className="bg-black text-white w-full h-auto">
        <div className={`container-xxl d-flex py-5 gap-5 ${windowWidth <= 950 ? 'flex-wrap-reverse' : 'px-2'}`}>
          <div className={`${windowWidth <= 950 ? 'w-100' : 'w-75'}`}>
            <h1 className={`fw-bold ${windowWidth <= 950 ? 'text-center' : ''}`}>De la Creatividad al Respeto</h1>
            <div className={`d-flex row-gap-1 column-gap-3 mt-4 text-justify ${windowWidth <= 950 ? 'flex-wrap' : ''}`}>
              <p>
                KAMI Studio es un joven pero ambicioso estudio de arquitectura y
                paisajismo que nació en 2023 con la visión de transformar la
                forma en que experimentamos los espacios. Desde sus inicios,
                KAMI se ha dedicado a fusionar la arquitectura con el entorno
                natural, creando diseños que no solo destacan por su estética,
                sino también por su profunda conexión con el entorno.
              </p>
              <p>
                Apenas un año después de su fundación, en 2024, KAMI Studio
                decidió dar un paso audaz y redefinir su identidad de marca.
                Este rebranding no solo tenía como objetivo fortalecer su
                presencia en un mercado competitivo, sino también subrayar su
                compromiso con la innovación y la sostenibilidad. En esta nueva
                etapa, KAMI Studio se propuso capturar y comunicar de manera más
                efectiva su esencia única: una mezcla perfecta de creatividad,
                funcionalidad y respeto por la naturaleza.
              </p>
            </div>
          </div>
          <div className={`${windowWidth <= 950 ? 'w-100' : 'w-25'} text-justify font-k2d`}>
            <p className={`font-k2d ${windowWidth <= 950 ? 'text-center' : ''}`}>Branding / identidad / Estrategia</p>
            <h1 className={`font-k2d ${windowWidth <= 950 ? 'text-center' : ''}`}>KAM STUDIO</h1>
          </div>
        </div>
      </header>
      <img src={PrimeraFoto} alt="primera foto" className="w-100 h-auto" />
      <section className={`my-3 w-full h-auto d-flex gap-3 ${windowWidth <= 950 ? 'flex-wrap' : ''}`}>
        <img src={SegundaFoto} alt="segunda foto" className={` ${windowWidth <= 950 ? 'w-100 h-auto' : 'w-50 h-auto'} object-fit-cover`} />
        <img src={TerceraFoto} alt="tercera foto" className={` ${windowWidth <= 950 ? 'w-100 h-auto' : 'w-50 h-auto'} object-fit-cover`} />
      </section>
    </div>
  );
}

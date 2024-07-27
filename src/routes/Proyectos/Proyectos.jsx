import Proyecto from '../../components/Proyecto/Proyecto'
import './Proyectos.css'

function Proyectos() {
  return (
    <>
      <main className='p-5 proyectos-main bg-light font-k2d d-flex flex-wrap justify-content-evenly'>
        <div className='proyecto-item'>
          <p className='fs-2 fw-medium'>Proyectos</p>
          <p className='fs-5'>Nuestra experiencia en proyectos refleja nuestra habilidad para abordar una variedad de desafíos empresariales e institucionales. Este enfoque nos ha posicionado como una opción destacada en el ámbito del branding y el diseño de interiores en Lima y en el Perú, con un fuerte compromiso hacia la generación de resultados empresariales significativos.</p>
        </div>
        <Proyecto categorias="Branding / identidad / Estrategia / Interiores" titulo="Profit Trading"/>
        <Proyecto categorias="Branding / identidad / Estrategia / Interiores" titulo="Profit Trading"/>
      </main>
    </>
  )
}

export default Proyectos
import Proyecto from '../../components/Proyecto/Proyecto'
import './Proyectos.css'

import ProfitTrading from '../../assets/proyecto-1.png'
import KamStudio from '../../assets/proyecto-2.png'
import SaldanaGroup from '../../assets/proyecto-3.png'
import { useContext } from 'react'
import { ResponsiveContext } from '../../context/Responsive'

function Proyectos() {

  const { windowWidth } = useContext(ResponsiveContext)

  return (
    <>
      <main className='p-5 proyectos-main bg-light flex-row gap-2 font-k2d d-flex flex-wrap justify-content-evenly w-100 container-xxl'>
        <div className={`parrafo-proyecto h-auto ${windowWidth < 1050 ? 'w-100' : ''}`}>
          <p className={`fs-2 fw-medium ${windowWidth < 1050 ? 'text-center' : ''}`}>Proyectos</p>
          <p className='fs-5'>Nuestra experiencia en proyectos refleja nuestra habilidad para abordar una variedad de desafíos empresariales e institucionales. Este enfoque nos ha posicionado como una opción destacada en el ámbito del branding y el diseño de interiores en Lima y en el Perú, con un fuerte compromiso hacia la generación de resultados empresariales significativos.</p>
        </div>
        <div className='lista-proyectos d-flex flex-row gap-3 flex-wrap'>
          <Proyecto url="/proyectos/profit-trading" img={ProfitTrading} categorias="Branding / identidad / Estrategia" titulo="Profit Trading"/>
          <Proyecto url="/proyectos/kam-studio" img={KamStudio} categorias="Branding / identidad / Estrategia" titulo="Kam Studio"/>
          <Proyecto url="/proyectos/saldana-group" img={SaldanaGroup} categorias="Branding / identidad / Estrategia" titulo="Saldaña Group"/>
        </div>
      </main>
    </>
  )
}

export default Proyectos
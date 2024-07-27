import './App.css'
import Cabecera from './components/CabeceraRaiki/Cabecera'
import Inicio from './routes/Inicio/Inicio'
import Nosotros from './routes/Nosotros/Nosotros'
import Servicios from './routes/Servicios/Servicios'
import Proyectos from './routes/Proyectos/Proyectos'
import { useContext } from 'react'
import { ResponsiveContext } from './context/Responsive'
import CabeceraScroll from './components/CabeceraRaikiScroll/CabeceraScroll'

function App() {
  const { windowScroll, windowWidth } = useContext(ResponsiveContext)

  return (
    <>
      { windowWidth > 750 ? windowScroll == 0 ? <Cabecera/> : <CabeceraScroll/> : <Cabecera/> }
      <div className='dividor' id='dividor'></div>
      <div id='inicio'>
        <Inicio/>
      </div>
      <div id='nosotros'>
        <Nosotros/>
      </div>
      <div id='servicios'>
        <Servicios/>
      </div>
      <div id='proyectos'>
        <Proyectos/>
      </div>
    </>
  )
}

export default App

import './App.css'
import Cabecera from './components/CabeceraRaiki/Cabecera'
import Inicio from './routes/Inicio/Inicio'
import Nosotros from './routes/Nosotros/Nosotros'
import Servicios from './routes/Servicios/Servicios'
import Proyectos from './routes/Proyectos/Proyectos'

function App() {


  return (
    <>
      <Cabecera/>
      <div className='dividor'></div>
      <div id='inicio'>
        <Inicio/>
      </div>
      <div>
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

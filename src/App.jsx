import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cabecera from './components/CabeceraRaiki/Cabecera'
import Inicio from './routes/Inicio/Inicio'
import Nosotros from './routes/Nosotros/Nosotros'
import Portafolio from './routes/Portafolio/Portafolio'
import Servicios from './routes/Servicios/Servicios'

function App() {

  console.log(window.screenTop)

  return (
    <>
      <Cabecera/>
      <div className='dividor'></div>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/portafolio' element={<Portafolio/>}></Route>
        <Route path='/servicios' element={<Servicios/>}></Route>
      </Routes>
    </>
  )
}

export default App

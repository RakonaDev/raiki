import './Servicio.css'

function Servicio(props) {
  return (
    <>
      <li className="servicio">
        <div className="header-servicio w-100 d-flex justify-content-center align-items-center">
          <img src={props.imagen} alt="servicio" className="imagen-servicio"/>
        </div>
        <div className='body-servicio'>
          <p className="fs-3 fw-medium text-black w-100">{props.titulo}</p>
          <p className="fs-6 text-black w-100">{props.descripcion}</p>
        </div>
      </li>
    </>
  )
}

export default Servicio
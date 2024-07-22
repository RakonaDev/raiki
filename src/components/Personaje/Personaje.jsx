import './Personaje.css'

function Personaje(props) {
  return (
    <>
      <li className='personaje-item'>
        <div className='personaje-cabecera'>
          <img src={props.imagen} alt="personaje-imagen" className='personaje-imagen'/>
        </div>
        <div className='personaje-cuerpo'>
          <p className='fs-4'>{props.nombre}</p>
          <p className='fs-6'>{props.cargo}</p>
        </div>
      </li>
    </>
  )
}

export default Personaje
import './Personaje.css'
import PropTypes from 'prop-types';

function Personaje(props) {
  return (
    <>
      <li className='personaje-item' data-aos={props.animacion || 'fade-up'} data-aos-offset="200" data-aos-delay={props.delay || '50'}>
        <div className='personaje-cabecera'>
          <img src={props.imagen} alt="personaje-imagen" className='personaje-imagen' height='356' />
        </div>
        <div className='personaje-cuerpo'>
          <p className='fs-4'>{props.nombre}</p>
          <p className='fs-6'>{props.cargo}</p>
        </div>
      </li>
    </>
  )
}

Personaje.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  animacion: PropTypes.string,
  delay: PropTypes.string
}

export default Personaje
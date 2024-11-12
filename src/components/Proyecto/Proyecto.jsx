import { Link } from 'react-router-dom'
import './Proyecto.css'
import PropTypes from 'prop-types'
import { ResponsiveContext } from '../../context/Responsive'
import { useContext } from 'react'

function Proyecto({ url,img, categorias, titulo }) {
  const { windowWidth } = useContext(ResponsiveContext)

  return (
    <>
      <Link to={url} className={`proyecto-item ${windowWidth < 950 ? 'w-100 h-auto' : ''}`}>
        <div className={`imagen-proyecto  ${windowWidth < 950 ? 'w-100 h-auto' : ''}`}>
          <img src={img} alt="proyecto" className="w-100"/>
        </div>
        <p className='fs-6 mt-2'>{categorias}</p>
        <p className='fs-2 fw-medium mt-0 titulo-proyecto'>{titulo}</p>
      </Link>
    </>
  )
}

Proyecto.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  categorias: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired
}

export default Proyecto
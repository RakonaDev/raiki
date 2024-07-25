import './Proyecto.css'

function Proyecto(props) {
  return (
    <>
      <article className="proyecto-item">
        <div className="w-100 imagen-proyecto"></div>
        <p className='fs-6 mt-2'>{props.categorias}</p>
        <p className='fs-2 fw-medium mt-0 titulo-proyecto'>{props.titulo}</p>
      </article>
    </>
  )
}

export default Proyecto
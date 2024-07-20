import { useState } from 'react'
import './RedesResponsive.css'

function RedesResponsive() {

  const[mostrar, setMostrar]= useState(false)

  function handleButton () {
    setMostrar(!mostrar)
  }

  return (
    <>
      <button type='button' className={mostrar ? 'redes-button click text-bg-dark': 'redes-button text-bg-dark'} onClick={() => handleButton()}>
        <i className="fa-solid fa-plus fs-5"></i>
      </button>
    </>
  )
}

export default RedesResponsive
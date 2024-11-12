import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

export const ResponsiveContext = createContext()

function ResponsiveContextProvider({ children }) {

  const[windowWidth , setWindowWidth] = useState(window.innerWidth)
  const[windowScroll, setWindowScroll] = useState(0)

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  useEffect(() => {
    window.scrollTo(0, 0)
  },[location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  function scrollElemento (elementoSeleccionado, instancia = 0) {
    const elementos = document.querySelectorAll(elementoSeleccionado)
    if(elementos.length > instancia){
      elementos[instancia].scrollIntoView({behavior: 'smooth'}, {block: 'start'})
    }
  }

  function mandarInicio (elemento) {
    sessionStorage.setItem('elemento', elemento)
    location.pathname = '/'
  }

  return (
    <ResponsiveContext.Provider value={{ windowWidth, setWindowWidth, windowScroll ,setWindowScroll, scrollElemento, mandarInicio }}>
      {children}
    </ResponsiveContext.Provider>
  )
}

ResponsiveContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ResponsiveContextProvider
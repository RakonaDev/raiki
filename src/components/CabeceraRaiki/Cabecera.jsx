import raikiLogo from "/src/assets/raikiLogo.png";
import './Cabecera.css'
import { useEffect, useState } from "react";
import Redes from "../Redes/Redes";
import RedesResponsive from "../RedesResponsive/RedesResponsive";
import Nav from "../Nav/Nav";
import NavResponsive from "../NavResponsive/NavResponsive";

function Cabecera() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="cabeceraScroll-container fixed-top" id="header-container">
      <nav className={ windowWidth <= 750 ? "nav-cabecera responsive" : "nav-cabecera" }>
        <div className={windowWidth <= 750 ? "logo-container ms-5" : "logo-container"}>
          <img src={raikiLogo} alt="raikiLogo" />
        </div>
        { windowWidth > 750 ? <Nav/> : <NavResponsive width={windowWidth}/> }
        { windowWidth > 1050 ? <Redes/> : <RedesResponsive/>  }
      </nav>
    </header>
  );
}

export default Cabecera;

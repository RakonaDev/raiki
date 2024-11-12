import raikiLogo from "/src/assets/raikiLogo.png";
import './Cabecera.css'
import { useContext } from "react";
import Redes from "../Redes/Redes";
import RedesResponsive from "../RedesResponsive/RedesResponsive";
import Nav from "../Nav/Nav";
import NavResponsive from "../NavResponsive/NavResponsive";
import { ResponsiveContext } from "../../context/Responsive";

function Cabecera() {

  const { windowWidth } = useContext(ResponsiveContext)

  return (
    <header className="cabeceraScroll-container fixed-top" id="header-container">
      <nav className={ windowWidth <= 1050 ? "nav-cabecera responsive container-xxl" : "nav-cabecera container-xxl" }>
        <div className={windowWidth <= 1050 ? "logo-container ms-4" : "logo-container"}>
          <img src={raikiLogo} alt="raikiLogo" />
        </div>
        { windowWidth > 1050 ? <Nav/> : <NavResponsive width={windowWidth}/> }
        { windowWidth > 1050 ? <Redes color="white"/> : <RedesResponsive/>  }
      </nav>
    </header>
  );
}

export default Cabecera;

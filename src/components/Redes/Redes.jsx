import FacebookIcon from "../../iconos/Facebook";
import InstagramIcon from "../../iconos/Instagram";
import TiktokIcon from "../../iconos/Tiktok";
import YoutubeIcon from '../../iconos/Youtube';

import PropTypes from "prop-types";

function Redes(props) {
  return (
    <>
      <ul className="redes-container d-flex">
        <li className="red-container">
          <a href="https://www.facebook.com/raikide?locale=es_LA" className="red-item" target="_blank">
            <FacebookIcon color={props.color}/>
          </a>
        </li>
        <li className="red-container">
          <a href="https://www.instagram.com/raikidesign/" className="red-item" target="_blank">
            <InstagramIcon color={props.color}/>
          </a>
        </li>
        <li className="red-container">
          <a href="https://www.tiktok.com/@raiki.design?lang=es" className="red-item" target="_blank">
            <TiktokIcon color={props.color}/>
          </a>
        </li>
        <li className="red-container">
          <a href="https://www.youtube.com/@RaikiDesign" className="red-item" target="_blank">
            <YoutubeIcon color={props.color}/>
          </a>
        </li>
      </ul>
    </>
  );
}

Redes.propTypes = {
  color: PropTypes.string.isRequired
}

export default Redes;

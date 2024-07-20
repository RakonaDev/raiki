import FacebookIcon from "../../iconos/Facebook";
import InstagramIcon from "../../iconos/Instagram";
import TiktokIcon from "../../iconos/Tiktok";
import TwitterIcon from "../../iconos/Twitter";
import YoutubeIcon from '../../iconos/Youtube';

function Redes() {
  return (
    <>
      <ul className="redes-container">
        <li className="red-container">
          <a href="#" className="red-item">
            <FacebookIcon />
          </a>
        </li>
        <li className="red-container">
          <a href="#" className="red-item">
            <InstagramIcon />
          </a>
        </li>
        <li className="red-container">
          <a href="#" className="red-item">
            <TiktokIcon />
          </a>
        </li>
        <li className="red-container">
          <a href="#" className="red-item">
            <TwitterIcon />
          </a>
        </li>
        <li className="red-container">
          <a href="#" className="red-item">
            <YoutubeIcon />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Redes;

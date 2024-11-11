import FacebookIcon from "../../iconos/Facebook"
import InstagramIcon from "../../iconos/Instagram"
import TiktokIcon from "../../iconos/Tiktok"
import YoutubeIcon from "../../iconos/Youtube"

import './RedesScroll.css'

function RedesScroll() {
  return (
    <nav className="d-flex nav-redes justify-content-evenly align-items-center">
      <a href="https://www.facebook.com/raikide?locale=es_LA" className="red-item rounded-5 d-flex justify-content-center align-items-center hover:bg-black" target="_blank">
        <FacebookIcon color="black"/>
      </a>
      <a href="https://www.instagram.com/raikidesign/" className="red-item rounded-5 d-flex justify-content-center align-items-center" target="_blank">
        <InstagramIcon color="black"/>
      </a>
      <a href="https://www.tiktok.com/@raiki.design?lang=es" className="red-item rounded-5 d-flex justify-content-center align-items-center" target="_blank">
        <TiktokIcon color="black"/>
      </a>
      <a href="https://www.youtube.com/@RaikiDesign" className="red-item rounded-5 d-flex justify-content-center align-items-center" target="_blank">
        <YoutubeIcon color="black"/>
      </a>
    </nav>
  )
}

export default RedesScroll
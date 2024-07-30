import { useState } from 'react'
import './RedesResponsive.css'
import FacebookIcon from '../../iconos/Facebook'
import InstagramIcon from '../../iconos/Instagram'
import TiktokIcon from '../../iconos/Tiktok'
import YoutubeIcon from '../../iconos/Youtube'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import PlusIcon from '../../iconos/Plus'


const actions = [
  { icon: <FacebookIcon color="black"/>, name: 'Facebook', link: 'https://www.facebook.com/raikide?locale=es_LA'},
  { icon: <InstagramIcon color="black"/>, name: 'Instagram', link: 'https://www.instagram.com/raikidesign/' },
  { icon: <TiktokIcon color="black"/>, name: 'TikTok' , link: 'https://www.tiktok.com/@raiki.design?lang=es'},
  { icon: <YoutubeIcon color="black"/>, name: 'Youtube' , link: 'https://www.youtube.com/@RaikiDesign'}
]

function RedesResponsive() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const moveToLink = (link) => {
    handleClose()
    window.open(link, '_blank')
  }

  return (
    /*
    <div className='redes-responsive'>
      <nav className={mostrar ? 'lista-redes-responsive d-flex flex-column click' : 'lista-redes-responsive d-flex flex-column'}>
        <a href="#" className='bg-dark d-flex justify-content-center align-items-center rounded-5'>
          <FacebookIcon color="white"/>
        </a>
        <a href="#" className='bg-dark d-flex justify-content-center align-items-center rounded-5'>
          <InstagramIcon color="white"/>
        </a>
        <a href="#" className='bg-dark d-flex justify-content-center align-items-center rounded-5'>
          <TiktokIcon color="white"/>
        </a>
        <a href="#" className='bg-dark d-flex justify-content-center align-items-center rounded-5'>
          <YoutubeIcon color="white"/>
        </a>
      </nav>
      <button type='button' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Ver Redes" className={mostrar ? 'redes-button click text-bg-dark': 'redes-button text-bg-dark'} onClick={() => handleButton()}>
        <i className="fa-solid fa-plus fs-5"></i>
      </button>
    </div>*/
    <div className='redes-responsive'>
      <SpeedDial
      ariaLabel="Redes"
      icon={<PlusIcon/>}
      onOpen={handleOpen}
      onClose={handleClose}
      open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => moveToLink(action.link)}
          ></SpeedDialAction>
        ))}
      </SpeedDial>
    </div>
  )
}

export default RedesResponsive
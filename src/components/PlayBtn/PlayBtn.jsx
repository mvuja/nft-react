import React, { useEffect, useState } from "react";
import './_play-btn.scss';
import ModalVideo from 'react-modal-video'
import playBtn from '../../assets/play-btn.svg'

const PlayBtn = () => {
    const [isOpen, setOpen] = useState(false)

    const root = document.getElementsByTagName( 'html' )[0]

    if(isOpen === true){
      document.querySelector('body').classList.add('no-scroll')
      root.classList.add('no-scroll')
    }else{
      document.querySelector('body').classList.remove('no-scroll')
      root.classList.remove('no-scroll')
    }
  
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="FK2RaJ1EfA8" onClose={() => setOpen(false)} />
  
        <button className="play-btn" onClick={()=> setOpen(true)}><img src={playBtn} alt="play button" /> </button>
      </React.Fragment>
    )
  }

  export default PlayBtn
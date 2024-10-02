import React, { useEffect } from 'react'
import "./Collection2.scss"
import Button from '@mui/material/Button';
import Aos from 'aos';

const Collection2 = () => {

  useEffect(()=>{
    Aos.init({
      duration: 500,
      once: false,
    })
  })
  return (
    <div className='coll'>
    <div className="coll_wrapper3">
        <div className="coll_left" data-aos="fade-right">
            <h1>100%</h1>
            <p>Maxsulot Sifati</p>
        </div>
        <div className="coll_img"  data-aos="fade-down">
            <img src="https://bnf-fabric.vercel.app/static/media/collectionImg3.475cada5e84d9bbb2695.png" alt="" />
        </div>
        <div className="coll_right"  data-aos="fade-down">
            <h1>Buxoro tabiiy mahsuloti</h1>
            <p>ko'p yillar davomida butun dunyo uchun <br /> paxta matolarini ishlab  chiqaradigan kompaniya bo'lib kelgan</p>
            <Button variant="contained" color="white">
             Toplam
        </Button>
        </div>
        
    </div>
</div>
  )
}

export default Collection2
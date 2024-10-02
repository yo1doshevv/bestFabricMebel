import React, { useEffect } from 'react'
import "./Collecton1.scss"
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Collecton1 = () => {

    useEffect(()=>{
        AOS.init({
            duration: 500,
            once: false,
        })
    })
  return (
    <div className='coll'>
        <div className="coll_wrapper1">
            <div className="coll_left "data-aos="fade-right">
                <h1>100%</h1>
                <p>Maxsulot Sifati</p>
            </div>
            <div className="coll_img" data-aos="fade-down">
                <img src="https://bnf-fabric.vercel.app/static/media/collectionImg2.61eb33e1af082bc78e06.png" alt="" />
            </div>
            <div className="coll_right" data-aos="fade-down">
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

export default Collecton1
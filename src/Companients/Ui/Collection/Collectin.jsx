import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import "./Collection.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Collectin = () => {

    useEffect(()=>{
        AOS.init({
            duration: 500,
            once: false,
        })
    })
  return (
    <div className='coll'>
        <div className="coll_wrapper">
            <div className="coll_left" data-aos="fade-right">
                <h1>100%</h1>
                <p>Maxsulot Sifati</p>
            </div>
            <div className="coll_img" data-aos="fade-down">
                <img src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111.png" alt="" />
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

export default Collectin
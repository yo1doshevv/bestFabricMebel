import React, { useEffect } from 'react'
import "./Bottom.scss"
import Button from '@mui/material/Button';
import Aos from 'aos';


const Bottom = () => {

    useEffect(()=>{
        Aos.init({
            duration: 500,
            once: false,
        })
    })

  return (
    <div className='bottom'>
        <div className="bottom_wrapper" data-aos="fade-right">
            <div className="bottom_box">
                <div className="bottom_img">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                </div>
                <div className="bottom_text">
                    <p>has been a company that produces cotton fabrics for  use all over <br /> the world for many years</p>
                </div>
            </div>
            <div className="bottom_box">
                <div className="bottom_img">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                </div>
                <div className="bottom_text">
                    <p>has been a company that produces cotton fabrics for  use all over <br /> the world for many years</p>
                </div>
            </div>
            <div className="bottom_box">
                <div className="bottom_img">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                </div>
                <div className="bottom_text">
                    <p>has been a company that produces cotton fabrics for  use all over <br /> the world for many years</p>
                </div>
            </div>
            <div className="bottom_input">
                <input type="   text" placeholder='  Collectin' />
                <Button variant="contained" color="white">
                Toplam
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Bottom
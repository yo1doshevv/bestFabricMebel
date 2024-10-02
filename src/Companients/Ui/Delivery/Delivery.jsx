import React, { useEffect } from 'react'
import "./Delivery.scss";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PaymentsIcon from '@mui/icons-material/Payments';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Delivery = () => {

    useEffect(()=>{
        Aos.init({
            duration: 500,
            once: true,
        })
    } ,[])
  return (
    <div className='deliv'>
        <div className="deliv_wrapper" data-aos="fade-up">
            <div className="deliv_box">
                <div className="deliv_box1_logo">
                   <h1 className='deliv_icon'> <LocalShippingIcon fontSize='large'/></h1>
                </div>
                <div className="deliv_box1_text">
                   <h3 > Bepul Yetkazibberish</h3>
                   <p>Barcha buyurtmalarni uchun bepul yetkazibberish</p>
                </div>
            </div>
            
            <div className="deliv_box1">
            <div className="deliv_box1_logo">
                   <h1 className='deliv_icon'> <EventAvailableIcon fontSize='large'/></h1>
                </div>
                <div className="deliv_box1_text">
                   <h3> Bepul Yetkazibberish</h3>
                   <p>Barcha buyurtmalarni uchun bepul yetkazibberish</p>
                </div>
            </div>

            <div className="deliv_box1">
            <div className="deliv_box1_logo">
                   <h1 className='deliv_icon'> <SupportAgentIcon fontSize='large'/></h1>
                </div>
                <div className="deliv_box1_text">
                   <h3> Bepul Yetkazibberish</h3>
                   <p>Barcha buyurtmalarni uchun bepul yetkazibberish</p>
                </div>
            </div>

            <div className="deliv_box1">
                 <div className="deliv_box1_logo">
                   <h1 className='deliv_icon'> <PaymentsIcon fontSize='large'/></h1>
                </div>
                <div className="deliv_box1_text">
                   <h3> Bepul Yetkazibberish</h3>
                   <p>Barcha buyurtmalarni uchun bepul yetkazibberish</p>
                </div>
            </div>

            <div className="deliver_box">

            </div>
        </div>
    </div>
  )
}

export default Delivery
import React, { useEffect, useState } from 'react'
import "./Bottom.scss"
import Button from '@mui/material/Button';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';


const Bottom = () => {

    const {t, i18n} = useTranslation();
    const [leng, SetLeng] = useState("");
  

    useEffect(()=>{
        Aos.init({
            duration: 500,
            once: false,
        })
    })


    const handleLeng = (e)=>{
        const setValue = e.target.value;
        SetLeng(setValue);
        i18n.changeLanguage(setValue);
      }
    

  return (
    <div className='bottom'>
        <div className="bottom_wrapper" data-aos="fade-right">
            <div className="bottom_box">
                <div className="bottom_img">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                </div>
                <div className="bottom_text">
                    <p>{t("bottom.bottomtext")}</p>
                </div>
            </div>
            <div className="bottom_box">
                <div className="bottom_img">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                </div>
                <div className="bottom_text">
                    <p>{t("bottom.bottomtext")}</p>
                </div>
            </div>
            <div className="bottom_box">
                <div className="bottom_img">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                </div>
                <div className="bottom_text">
                    <p>{t("bottom.bottomtext")}</p>
                </div>
            </div>
            <div className="bottom_input">
                <input type="   text" placeholder= {t("Product.collection")} />
                <Button variant="contained" className='bottom_icon' color="white">
                {t("Product.Productt")}
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Bottom
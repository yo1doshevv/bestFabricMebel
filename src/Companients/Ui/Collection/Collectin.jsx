import React, { useEffect, useState, useTransition } from 'react'
import Button from '@mui/material/Button';
import "./Collection.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Collectin = () => {

    useEffect(()=>{
        AOS.init({
            duration: 500,
            once: false,
        })
    })

    const { t, i18n } = useTranslation();
     const [language, setLanguage] = useState("");

     const hendlLang = (e)=>{
        const SelecLeng = e.targe.value;
        setLanguage(SelecLeng);
        i18n.changeLanguage(setLanguage);
     }

  return (
    <div className='coll'>
        <div className="coll_wrapper">
            <div className="coll_left" data-aos="fade-right">
                <h1>100%</h1>
                <p>{t("collec1.Maxsulot")}</p>
            </div>
            <div className="coll_img" data-aos="fade-down">
                <img src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111.png" alt="" />
            </div>
            <div className="coll_right" data-aos="fade-down">
                <h1>{t("collec1.Tabiy")}</h1>
                <p>{t("collec1.Tit")}</p>
                <Button variant="contained" color="white">
                 {t("Product.Productt")}
            </Button>
            </div>
            
        </div>
    </div>
  )
}

export default Collectin
import React,  { useEffect, useState } from 'react'
import "./Collection2.scss"
import Button from '@mui/material/Button';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

const Collection2 = () => {
  const {t, i18n} = useTranslation();
  const [language, setLanguage] = useState("");

  useEffect(()=>{
    Aos.init({
      duration: 500,
      once: false,
    })

    const handleLang = (e) => {
      const selectedLang = e.target.value; // xato yozilgan "targe" ni to'g'riladim
      setLanguage(selectedLang);
      i18n.changeLanguage(selectedLang); // o'zgarishlar o'rniga "selectedLang" qo'llaniladi
  };
  
  })
  return (
    <div className='coll'>
    <div className="coll_wrapper3">
        <div className="coll_left" data-aos="fade-right">
            <h1>100%</h1>
            <p>{t("collec1.Maxsulot")}</p>
        </div>
        <div className="coll_img"  data-aos="fade-down">
            <img src="https://bnf-fabric.vercel.app/static/media/collectionImg3.475cada5e84d9bbb2695.png" alt="" />
        </div>
        <div className="coll_right"  data-aos="fade-down">
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

export default Collection2
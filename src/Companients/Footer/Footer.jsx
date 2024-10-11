import React, { useState } from 'react'
import "./Footer.scss"
import { useTranslation } from 'react-i18next';


const Footer = () => {

    const {t, i18n} = useTranslation();
    const [leng, SetLeng] = useState("");
  
    const handleLeng = (e)=>{
      const setValue = e.target.value;
      SetLeng(setValue);
      i18n.changeLanguage(setValue);
    }
  
  return (
    <div className='footer'>
      <div className="footer_wrapper">
        <p>{t("foter.footer")}
        </p>
      </div>
    </div>
  )
}

export default Footer
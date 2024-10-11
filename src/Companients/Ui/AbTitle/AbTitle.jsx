import React, { useState } from 'react'
import "./AbTitle.scss"
import { useTranslation } from 'react-i18next'; // Import the correct hook


const AbTitle = () => {

    const { t, i18n } = useTranslation(); // Correct hook
    const [language, setLanguage] = useState("");


  const handleLang = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang); 
  };

  return (
    <div className='about'>
        <div className="about_wrapper">
            <div className="about_left">
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
                <div className="about_select1">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="" />
                    <p className='about_text'>{t("foter.lotem")}</p>
                </div>
               
            </div>

            <div className="about_right">
                <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AbTitle
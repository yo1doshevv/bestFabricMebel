import React, { useState } from 'react'
import "./News.scss"
import { useTranslation } from 'react-i18next';


const News = () => {

    const {t, i18n} = useTranslation();
  const [leng, SetLeng] = useState("");


  const handleLeng = (e)=>{
    const setValue = e.target.value;
    SetLeng(setValue);
    i18n.changeLanguage(setValue);
  }

  return (
    <div className='news'>
          <div className="news_title">
                <h1>{t("new.titl")}</h1>
                <p> {t("new.text")}</p>
            </div>
        <div className="news_wrapper">
            <div className="news_box">
                <div className="news_img">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/gadget-D1lzdcbh.png" alt="" />
                </div>
                <div className="news_title">
                    <p>{t("new.carddate")}</p>
                    <h2 className='news_text'>{t("new.cardtitl")}</h2>
                    <p>{t("new.cardtext")}</p>
                </div>
            </div>
            <div className="news_box">
                <div className="news_img">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/mac-BO_lfsbc.png" alt="" />
                </div>
                <div className="news_title">
                    <p>{t("new.carddate")}</p>
                    <h2 className='news_text'>{t("new.cardtitl")}</h2>
                    <p>{t("new.cardtext")}</p>
                </div>
            </div>
            <div className="news_box">
                <div className="news_img">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/war-HAr_cAOY.png" alt="" />
                </div>
                <div className="news_title">
                    <p>{t("new.carddate")}</p>
                    <h2 className='news_text'>{t("new.cardtitl")}</h2>
                    <p>{t("new.cardtext")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News
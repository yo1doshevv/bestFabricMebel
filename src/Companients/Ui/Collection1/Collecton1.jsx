import React, { useEffect, useState } from 'react';
import "./Collecton1.scss";
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Collecton1 = () => {
    const { t, i18n } = useTranslation(); // useTranslation hooki tashqarida chaqiriladi
    const [language, setLanguage] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
        });
    }, []); // useEffect faqat bir marta chaqiriladi

    const handleLang = (e) => {
        const selectedLang = e.target.value; // xato yozilgan "targe" ni to'g'riladim
        setLanguage(selectedLang);
        i18n.changeLanguage(selectedLang); // o'zgarishlar o'rniga "selectedLang" qo'llaniladi
    };

    return (
        <div className='coll'>
            <div className="coll_wrapper1">
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
    );
}

export default Collecton1;

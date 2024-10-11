import React, { useEffect, useState } from 'react';
import "./Delivery.scss";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PaymentsIcon from '@mui/icons-material/Payments';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

const Delivery = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true,
        });
    }, []);

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("");

    const handleLang = (e) => {
        const selectedLang = e.target.value.toLowerCase();
        setLanguage(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    useEffect(() => {
        console.log(language);
    }, [language]);

    return (
        <div className='deliv'>
            <div className="deliv_wrapper" data-aos="fade-up">
                <div className="deliv_box">
                    <div className="deliv_box1_logo">
                        <h1 className='deliv_icon'><LocalShippingIcon fontSize='large' /></h1>
                    </div>
                    <div className="deliv_box1_text">
                        <h3>{t("fredriv.FreeShipping")}</h3>
                        <p>{t("fredriv.Description1")}</p>
                    </div>
                </div>

                <div className="deliv_box1">
                    <div className="deliv_box1_logo">
                        <h1 className='deliv_icon'><EventAvailableIcon fontSize='large' /></h1>
                    </div>
                    <div className="deliv_box1_text">
                        <h3>{t("fredriv.EventAvailable")}</h3>
                        <p>{t("fredriv.Description2")}</p>
                    </div>
                </div>

                <div className="deliv_box1">
                    <div className="deliv_box1_logo">
                        <h1 className='deliv_icon'><SupportAgentIcon fontSize='large' /></h1>
                    </div>
                    <div className="deliv_box1_text">
                        <h3>{t("fredriv.SupportAgent")}</h3>
                        <p>{t("fredriv.Description3")}</p>
                    </div>
                </div>

                <div className="deliv_box1">
                    <div className="deliv_box1_logo">
                        <h1 className='deliv_icon'><PaymentsIcon fontSize='large' /></h1>
                    </div>
                    <div className="deliv_box1_text">
                        <h3>{t("fredriv.Payments")}</h3>
                        <p>{t("fredriv.Description4")}</p>
                    </div>
                </div>

                <div className="deliver_box"></div>
            </div>
        </div>
    );
};

export default Delivery;

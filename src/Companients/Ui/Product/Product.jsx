import React, { useEffect, useState } from 'react';
import "./Product.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; // Import the correct hook

const Product = () => {
  const { t, i18n } = useTranslation(); // Correct hook
  const [language, setLanguage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
    });
  }, []);

  const handleLang = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang); 
  };

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <div className='product'>
      <div className="product_wrapper" data-aos="zoom-out">
        <div className="product_img" data-aos="fade-up">
          <img src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png" alt="" />
        </div>
        <div className="product_title" data-aos="fade-left"> 
          <h5 className='product_text1'>{t("Product.Bukhara")}</h5>
          <h3 className='product_text2'>{t("Product.Natural")}</h3>
          <h1 className='product_text3'>{t("Product.Productt")}</h1>
        </div>
      </div>
      
    </div>
  );
}

export default Product;

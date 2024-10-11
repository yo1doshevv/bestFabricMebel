import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Tarjima funksiyasini olish
  const [language, setLan] = useState("");

  const handleLan = (e) => {
    const selectedLanguage = e.target.value;
    setLan(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); // i18next da tilni o'zgartirish
  }

  useEffect(() => {
    console.log(language); // Til o'zgarishini kuzatish
  }, [language]);

  return (
    <div className='navbar'>
      <div className="navbar_wrapper">
        <div className="navbar_logo">
          <h1>
            <NavLink className={"navbar_logo"} to={"/"}>
              <img src="https://cute-sprinkles-79cc35.netlify.app/assets/logo-DDXHFmis.png" alt="Logo" />
            </NavLink>
          </h1>
        </div>
        <div className="navbar_nav">
          <ul>
            <li>
              <NavLink className={"link"} to={"/"}>{t("greetings.HomePage")}</NavLink> {/* Tarjima uchun t funksiyasidan foydalanish */}
            </li>
            <li>
              <NavLink className={"link"} to={"/toplam"}>{t("greetings.Product")}</NavLink>
            </li>
            <li>
              <NavLink className={"link"} to={"/about"}>{t("greetings.About")}</NavLink>
            </li>
            <li>
              <NavLink className={"link"} to={"/contact"}>{t("greetings.Contact")}</NavLink>
            </li>
           
          </ul>
        </div>

        <select onChange={handleLan} className='navbar_languages' name="Languages" id="">
          <option className='navbar_lang' value="uz">Uz</option>
          <option className='navbar_lang' value="en">En</option>
          <option className='navbar_lang' value="ru">Ru</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;

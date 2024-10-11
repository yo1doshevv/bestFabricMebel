import React, { useState } from "react";
import "./Connact.scss";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';

const Connact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      Ism: ${formData.name}
      Email: ${formData.email}
      Xabar: ${formData.text}
    `;

    const token = "7563218765:AAGAAi_p-t8-z6yfYw2G2-n-m30MK8gE64c"; // BotFather'dan olingan token
    const chatId = "6243320505"; // Telegramda siz bilan aloqa qiladigan botning chat ID

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      toast.success("Xabar muvaffaqiyatli yuborildi!"); // Muvaffaqiyat xabari
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Xabar yuborishda xatolik yuz berdi!"); // Xatolik xabari
    }
  };

  const latitude = 41.2995; // Foydalanuvchi koordinatalarini o'zgartiring
  const longitude = 69.2401; // Foydalanuvchi koordinatalarini o'zgartiring
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;
  return (
    <div className="con">
      <ToastContainer /> {/* ToastContainer komponentini qo'shish */}
      <div className="con_wrapper">
        <div className="con_select">
          <div className="con_left">
            <h2>{t("contact.contact")}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="text"
                placeholder={t("contact.text")}
                value={formData.text}
                onChange={handleChange}
              />
              <Button
                className="con_btn"
                variant="contained"
                size="small"
                color="error"
                type="submit"
              >
                {t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
        <div className="con_right">
          <iframe
            width="600"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          ></iframe>
        </div>

        <div className="con_contact">
          <div className="con_email">
            <NavLink><EmailIcon/>hbfbdbhvdbj@gmail.com</NavLink>
          </div>
          <div className="con_email">
            <NavLink><EmailIcon/>hbfbdbhvdbj@gmail.com</NavLink>
          </div>
          <div className="con_email">
            <NavLink><EmailIcon/>hbfbdbhvdbj@gmail.com</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connact;

import React, { useEffect, useState } from "react";
import "./Pg2.scss";
import SearchIcon from "@mui/icons-material/Search";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ReactPaginate from "react-paginate";
import Slider from "react-slick";

const Pg2 = () => {
  const { t, i18n } = useTranslation();
  const [leng, setLanguage] = useState("");
  const Naviget = useNavigate();

  const hendlclik = (id) => {
    Naviget(`/Data/${id}`);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv so'zi uchun state
  const [showDataa] = useState([
    {
      id: 21,
      name: "Squares",
      img: "/Img/winter1.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Squares",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 30,
      name: "Lavender roses",
      img: "/Img/winter2.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender roses",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 23,
      name: "Circle",
      img: "/Img/winter3.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Circles",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 24,
      name: "Geometry blue",
      img: "/Img/winter4.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Geometry blue",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 25,
      name: "Tropical leaves",
      img: "/Img/winter5.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Tropical leaves",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 26,
      name: "Bambi",
      img: "/Img/winter6.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bambi bedding set",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 27,
      name: "Bzyantyum",
      img: "/Img/winter7.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Byzantium",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 28,
      name: "Evening garden",
      img: "/Img/winter8.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bed linen set Evening garden",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 29,
      name: "Feather marquis",
      img: "/Img/winter9.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Feather Marquis",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 30,
      name: "Lavender roses",
      img: "/Img/winter1.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender roses",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 1,
      name: "Safari",
      img: "/Img/autumn1.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Squares",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 2,
      name: "Multicolored amethyst",
      img: "/Img/autumn2.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Ikat bedding set",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 3,
      name: "Stucco ornament",
      img: "/Img/autumn3.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Circles",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 4,
      name: "Emerald (AB)",
      img: "/Img/autumn4.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Emerald (AB)",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 5,
      name: "Malachite",
      img: "/Img/autumn5.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Malachite",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 6,
      name: "spring",
      img: "/Img/autumn6.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "spring bedding set",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 7,
      name: "Autumn leaf fall",
      img: "/Img/autumn7.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Autumn leaf fall (AB)",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 8,
      name: "Blue Breeze (AB)",
      img: "/Img/autumn8.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bed linen set Blue Breeze (AB)",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 9,
      name: "Feather Marquis",
      img: "/Img/autumn9.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Feather Marquis",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 10,
      name: "Lavender Plaid",
      img: "/Img/autumn10.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender Plaid",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 11,
      name: "Vintage style",
      img: "/Img/summer1.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Squares",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 12,
      name: "fluttering dandelion",
      img: "/Img/summer2.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Ikat bedding set",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 13,
      name: " French Riviera ",
      img: "/Img/summer3.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Circles",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 14,
      name: "Dolly the Sheep",
      img: "/Img/summer4.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Emerald (AB)",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 15,
      name: "Alpine herbs",
      img: "/Img/summer5.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Malachite",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 16,
      name: "Inspirational",
      img: "/Img/summer6.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "spring bedding set",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 17,
      name: "Green lotus",
      img: "/Img/summer7.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Autumn leaf fall (AB)",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 18,
      name: "Mountain cornflower",
      img: "/Img/summer8.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bed linen set Blue Breeze (AB)",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 19,
      name: "Sakura branch",
      img: "/Img/summer9.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Feather sakura",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 20,
      name: "Olive  branch",
      img: "/Img/summer1.jpg",
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender Plaid",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
  ]);

  const revers = () => {
    <div className="colec_box">
      <div className="product-list">
        {searchTerm && filteredData.length > 0 ? (
          // Faqat birinchi topilgan elementni ko'rsatish uchun find() metodidan foydalanamiz
          (() => {
            const product = filteredData.find((item) => item); // Birinchi elementni oladi
            return product ? (
              <div className="booox">
                <div key={product.id} className="product-item">
                  <div className="flex">
                    <nav className="pagi" aria-label="Page navigation example">
                      <div className="pagi_item">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="product-image"
                        />
                        <h2 className="product-title">{product.title}</h2>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            ) : null;
          })()
        ) : searchTerm ? (
          <p className="no-results">Hech qanday natija topilmadi.</p>
        ) : null}
      </div>

      {/* Faqat qidiruv bo'sh bo'lsa barcha card'lar ko'rsatiladi */}
      {!searchTerm &&
        showDataa.map((item) => (
          <div
            key={item.id}
            className="colec_product"
            data-aos="zoom-in-right"
            onClick={() => hendlclik(item.id)}
          >
            <div className="colec_img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="colec_text">
              <h4>{item.title.slice(0, 25)}</h4>
            </div>
          </div>
        ))}
    </div>;
  };

  // Qidirish funksiyasi
  const filteredData = showDataa.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Autumn = () => {
    console.log("kjdnkjlnjf");
  };

  const handlleng = (e) => {
    const seleclen = e.targe.value;
    setLanguage(seleclen);
    i18n.changeLanguage(seleclen);
  };

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div className="colec text-secondary-emphasis">
      <ToastContainer />
      <div className="colec_wrapper">
        <div className="colec_left">
          <div className="colec_input">
            <input
              type="text"
              placeholder="search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p className="colec_icon">
              <SearchIcon />
            </p>
          </div>
          <div className="colec_colection border border-dark-subtle">
            <h2>{t("Product.collection")}</h2>
            <p onClick={revers}>{t("en.SummerCollection")}</p>
            <p>{t("en.WinterCollection")}</p>
            <p>{t("en.AutumnCollection")}</p>
            <p>{t("en.SpringCollection")}</p>
          </div>
        </div>
        <div className="colec_right">
          <div className="colec_title">
            <h2>{t("Product.collection")}</h2>
            <p>
              Showing {filteredData.length} of {showDataa.length}
            </p>
          </div>
          <div className="colec_box">
            <div className="product-list">
              {searchTerm && filteredData.length > 0 ? (
                // Faqat birinchi topilgan elementni ko'rsatish uchun find() metodidan foydalanamiz
                (() => {
                  const product = filteredData.find((item) => item); // Birinchi elementni oladi
                  return product ? (
                    <div className="booox">
                      <div key={product.id} className="product-item">
                        <div className="flex">
                          <nav
                            className="pagi"
                            aria-label="Page navigation example"
                          >
                            <div className="pagi_item">
                              <img
                                src={product.img}
                                alt={product.title}
                                className="product-image"
                              />
                              <h2 className="product-title">{product.title}</h2>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()
              ) : searchTerm ? (
                <p className="no-results">Hech qanday natija topilmadi.</p>
              ) : null}
            </div>

            {/* Faqat qidiruv bo'sh bo'lsa barcha card'lar ko'rsatiladi */}
            {!searchTerm &&
              showDataa.map((item) => (
                <div
                  key={item.id}
                  className="colec_product"
                  data-aos="zoom-in-right"
                  onClick={() => hendlclik(item.id)}
                >
                  <div className="colec_img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="colec_text">
                    <h4>{item.title.slice(0, 25)}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg2;

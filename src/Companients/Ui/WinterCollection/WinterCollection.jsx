import React, { useEffect, useState } from 'react';
import './WinterCollection.scss';
import Aos from 'aos';
import Window from '../Window/Window';


const WinterCollection = () => {

  useEffect(()=>{
    Aos.init({
      duration: 500,
      once: false,
    })
  })

  const [data] = useState([
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
  ]);

  useState(
    function window(params) {
      <div className="win">
        <div className="win_wrapper">
          <div className="win_left">
            <div className="win_img">
              <img src={data.id} alt="" />
            </div>
          </div>
        </div>
      </div>
    }
  )

  return (
    <div className='winter'>
      <div className="winter_wtitle">
        <h1>Qishki Kolleksiya</h1>
        <p className='winter_text'>Tabiy Maxsulot</p>
      </div>
      <div className="winter_wrapperr">
        {data.map((item) => (
                <div key={item.id} className="winter_product"  data-aos="zoom-in-right">
                    <div className="winter_img">
                    <img onClick={window} src={item.img} alt="" />
                    </div>
                    <div className="winter_title">
                    <h5>{item.name}</h5>
                    
                    </div>
                </div>
        ))}
         </div>
      
    </div>
  );
};

export default WinterCollection;

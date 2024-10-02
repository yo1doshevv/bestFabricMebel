import React, { useEffect, useState } from 'react'
import "./AutumnCollection.scss"
import Aos from 'aos'

const AutumnCollection = () => {

  useEffect(()=>{
    Aos.init({
      duration: 500,
      once: false,
    })
  })

    const [dataa] = useState([
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
    ])

  return (
    <div className='autumn'>
    <div className="autumn_wtitle">
        <h1>Kuz Kolleksiyasi</h1>
        <p className='autumn_text'>Tabiy Maxsulot</p>
    </div>
    <div className="autumn_wrapper">
        {dataa.map((item) => (
            <div key={item.id} className="autumn_product"  data-aos="zoom-in-right">
                <div className="autumn_img">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="autumn_title">
                    <h5>{item.name}</h5>
                </div>
            </div>
        ))}
    </div>
</div>
);
}

export default AutumnCollection
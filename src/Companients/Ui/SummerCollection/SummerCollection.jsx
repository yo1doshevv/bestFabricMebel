import React, { useEffect, useState } from 'react'
import "./SummerCollection.scss"
import Aos from 'aos'

const SummerCollection = () => {

  useEffect(()=>{
    Aos.init({
      duration: 500,
      once: false,
    })
  })

    const [data] = useState(
        [{
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
          },]
    )

  return (
    <div className='summer'>
        <div className="summer_wtitle">
            <h1>Summer Collection</h1>
            <p className='summer_text'>Tabiy Maxsulot</p>
        </div>
        <div className="summer_wrapper">
          {data.map((index)=>(
            <div key={index.id} className="autumn_product"  data-aos="zoom-in-right">
                  <div className="summer_img">
                <img src={index.img} alt="" />
            </div>
            <div className="summer_title">
                <h5>{index.name}</h5>
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SummerCollection
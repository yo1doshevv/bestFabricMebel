import React, { useEffect, useState } from "react";
import "./Prodduct.scss";
import { useParams } from "react-router-dom";

const Prodduct = () => {
  const { id } = useParams();
  const [prodduct, useProdduct] = useState(null);

  useEffect(() => {
    const data = [
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
    ];
  });

  if (!prodduct) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="tablett">
      <div className="tablett_wrapper">
        <div className="product-detail">
          <img src={prodduct.img} alt={prodduct.name} />
          <div className="tablet">
            <h2>{prodduct.title}</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td>{prodduct.Material}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Yostiq g'ilofi:</strong>
                  </td>
                  <td>{prodduct.Pillowcase}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ko'rpa-to'shak varaqasi:</strong>
                  </td>
                  <td>{prodduct.sheet}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ko'rpa-to'shak qopqog'i:</strong>
                  </td>
                  <td>{prodduct.Duvet}</td>
                </tr>
                <tr>
                  <td>
                    <strong>O'lcham:</strong>
                  </td>
                  <td>{prodduct.Size}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mahsulot ishlab chiqaruvchisi:</strong>
                  </td>
                  <td>{prodduct.Manufacturer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodduct;

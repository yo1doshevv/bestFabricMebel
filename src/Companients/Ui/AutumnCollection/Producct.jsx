import React, { useEffect, useState } from "react";
import "./Producct.scss";
import { useParams } from "react-router-dom";

const Producct = () => {
  const { id } = useParams();
  const [producct, setProduct] = useState(null);

  useEffect(() => {
    const dataa = [
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
    ];

    // Mahsulotni id orqali qidirib topish
    const foundProduct = dataa.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!producct) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="tablett">
      <div className="tablett_wrapper">
        <div className="product-detail">
          <img src={producct.img} alt={producct.name} />
          <div className="tablet">
            <h2>{producct.title}</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td>{producct.Material}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Yostiq g'ilofi:</strong>
                  </td>
                  <td>{producct.Pillowcase}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ko'rpa-to'shak varaqasi:</strong>
                  </td>
                  <td>{producct.sheet}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ko'rpa-to'shak qopqog'i:</strong>
                  </td>
                  <td>{producct.Duvet}</td>
                </tr>
                <tr>
                  <td>
                    <strong>O'lcham:</strong>
                  </td>
                  <td>{producct.Size}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mahsulot ishlab chiqaruvchisi:</strong>
                  </td>
                  <td>{producct.Manufacturer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producct;

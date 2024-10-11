import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Data.scss";

const Data = () => {
  const { id } = useParams(); // URL-dan mahsulot ID ni olish
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Bu yerda tanlangan mahsulot haqida ma'lumot olish mumkin
    // Bu ma'lumotni serverdan yoki mahalliy holatdan olish mumkin
    const productData = [
      {
        id: 21,
        name: "Kvadratlar",
        img: "/Img/winter1.jpg",
        text: "Ko'rpa-to'shaklar...",
        title: "Kvadratlar ko'rpa-to'shak to'plami",
        category: "Qishgi kolleksiya",
        Material: "100% paxta flanel",
        Pillowcase: "50x70 sm (2 dona)",
        sheet: "Ko'rpa-to'shak varaqasi:",
        Duvet: "Ko'rpa-to'shak qopqog'i",
        Size: "Maxsus o'lcham",
        Manufacturer: "Buxoro Natural Product",
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
    ];

    const selectedProduct = productData.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="tablett">
      <div className="tablett_wrapper">
        <div className="product-detail">
          <img src={product.img} alt={product.name} />
          <div className="tablet">
            <h2>{product.title}</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td>{product.Material}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Yostiq g'ilofi:</strong>
                  </td>
                  <td>{product.Pillowcase}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ko'rpa-to'shak varaqasi:</strong>
                  </td>
                  <td>{product.sheet}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ko'rpa-to'shak qopqog'i:</strong>
                  </td>
                  <td>{product.Duvet}</td>
                </tr>
                <tr>
                  <td>
                    <strong>O'lcham:</strong>
                  </td>
                  <td>{product.Size}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mahsulot ishlab chiqaruvchisi:</strong>
                  </td>
                  <td>{product.Manufacturer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

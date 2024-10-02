import React, { useEffect } from 'react';
import "./Product.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
    });
  }, []);

  return (
    <div className='product'>
       <div className="product_wrapper"  data-aos="zoom-out" >
           <div className="product_img" data-aos="fade-up"> 
            <img src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png" alt="" />
        </div>
        <div className="product_title" data-aos="fade-left"> 
            <h5 className='product_text1'>Bukhara</h5>
            <h3 className='product_text2'>Natural</h3>
            <h1 className='product_text3'>Product</h1>
        </div>
       </div>
    </div>
  );
}

export default Product;

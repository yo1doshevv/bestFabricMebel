import React from 'react'
import "./News.scss"

const News = () => {
  return (
    <div className='news'>
          <div className="news_title">
                <h1>News</h1>
                <p> Buxoro tabiy maxsulotlar</p>
            </div>
        <div className="news_wrapper">
            <div className="news_box">
                <div className="news_img">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/gadget-D1lzdcbh.png" alt="" />
                </div>
                <div className="news_title">
                    <p>10/05/2019 by admin</p>
                    <h2 className='news_text'>How to choose perfect gadgets</h2>
                    <p>When, while the lovely valley teems with vapour around me,<br /> and the meridian sun strikes the upper s...</p>
                </div>
            </div>
            <div className="news_box">
                <div className="news_img">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/mac-BO_lfsbc.png" alt="" />
                </div>
                <div className="news_title">
                    <p>10/05/2019 by admin</p>
                    <h2 className='news_text'>How to choose perfect gadgets</h2>
                    <p>When, while the lovely valley teems with vapour around me,<br /> and the meridian sun strikes the upper s...</p>
                </div>
            </div>
            <div className="news_box">
                <div className="news_img">
                    <img src="https://cute-sprinkles-79cc35.netlify.app/assets/war-HAr_cAOY.png" alt="" />
                </div>
                <div className="news_title">
                    <p>10/05/2019 by admin</p>
                    <h2 className='news_text'>How to choose perfect gadgets</h2>
                    <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News
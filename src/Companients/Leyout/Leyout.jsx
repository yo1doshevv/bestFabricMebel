import React from 'react'
import AppRouter from '../../Router/Routes'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro'
import Bottom from '../Bottom/Bottom'
import Footer from '../Footer/Footer'


const Leyout = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <AppRouter/>
      <Bottom/>
      <Footer/>
    </div>
  )
}

export default Leyout
import React from 'react'
import Product from "../Companients/Ui/Product/Product"
import Delivery from '../Companients/Ui/Delivery/Delivery'
import Collectin from '../Companients/Ui/Collection/Collectin'
import Collecton1 from '../Companients/Ui/Collection1/Collecton1'
import Collection2 from '../Companients/Ui/Collection2/Collection2'
import WinterCollection from '../Companients/Ui/WinterCollection/WinterCollection'
import SummerCollection from '../Companients/Ui/SummerCollection/SummerCollection'
import AutumnCollection from '../Companients/Ui/AutumnCollection/AutumnCollection'
import News from '../Companients/Ui/News/News'

const Home = () => {
  return (
    <div>
      <Product/>
      <Delivery/>
      <Collectin/>
      <WinterCollection/>
      <Collecton1/>
      <AutumnCollection/>
      <Collection2/>
      <SummerCollection/>
      <News/>
    </div>
  )
}

export default Home;
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import About from '../Pages/About';
import Toplam from '../Pages/Toplam';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import WinterCollection from '../Companients/Ui/WinterCollection/WinterCollection';
import ProductDetail from '../Companients/Ui/WinterCollection/ProductDetail';
import Producct from '../Companients/Ui/AutumnCollection/Producct';
import Prodduct from '../Companients/Ui/SummerCollection/Prodduct';
import Data from '../Companients/Ui/Pg2/Data';

const AppRouter = () => {
  return (
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/toplam" element={<Toplam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<WinterCollection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/producct/:id" element={<Producct/>} />
        <Route path="/prodduct/:id" element={<Prodduct/>} />
        <Route path="/Data/:id" element={<Data/>} />

      </RouterRoutes>
  );
};

export default AppRouter;

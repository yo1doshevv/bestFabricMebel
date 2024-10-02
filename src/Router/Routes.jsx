import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import About from '../Pages/About';
import Toplam from '../Pages/Toplam';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

const AppRouter = () => {
  return (
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/toplam" element={<Toplam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </RouterRoutes>
  );
};

export default AppRouter;

import React from 'react';
import '../src/Pages/styles/home.css';
import HomeSvg from './Pages/HomeSvg';
import Navbar from './Pages/Navbar';
import HomeImg from './Pages/HomeImg';
import HomeContent from './Pages/HomeContent';

const Home = () => {
  return (
    <div >
      <Navbar/>
      <HomeSvg/>
      <HomeImg/>
      <HomeContent/>
    </div>

  );
};

export default Home; // Exportación por defecto del componente Home
import React from 'react';
import '../src/Pages/styles/home.css';
import HomeSvg from './Pages/HomeSvg';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__logo'>

        <img className='home__logo-img' src="" alt="logo" />

        </div>

        <div className='home__il'>
            <ul className='home__il-ul'>
                <li>
                    Sobre mi
                </li>
                <li>
                    Proyectos
                </li>
                <li>
                    Contacto
                </li>
            </ul>
            <button className='home__main'>
                <p className='home__btn'> ¡Contratame!</p>
            </button>
      </div>
      <HomeSvg/>
    </div>

  );
};

export default Home; // Exportación por defecto del componente Home
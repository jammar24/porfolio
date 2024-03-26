import React from 'react'
import '../Pages/styles/navbar.css'
import lg from '../assets/lg.png'

const Navbar = () => {
  return (
    <div className='home'>
        <div className='home__logo'>

<img className='home__logo-img' src={lg} alt="logo" />

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
    </div>
  )
}

export default Navbar
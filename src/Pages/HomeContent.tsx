import React from 'react'
import Me from '../assets/me.png'
import './styles/homecontent.css';

const HomeContent = () => {
  return (
<>
<div >
    <h1> holo soy dev</h1>
    <div className='home__cont-text'>
        <p>Lorem ipsum dolor sit amet coidem ae a provident?</p>
    </div>

</div>



<div className='ty__img'>
    <img className='' src={Me} alt="me" />
</div>

  <div className='home__cont-main'>
  <input className="home__input"
    id="email"
    type="email"
    placeholder="Insert email"
    />
  <button>
       vamos al lio
  </button>
</div>
</>
  )
}

export default HomeContent
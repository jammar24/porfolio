import React from 'react'
import './styles/homecontent.css';

const HomeContent = () => {
  return (
    <div >
    <div >
    <h1> holo soy dev</h1>
    </div>
    <div className='home__cont-text'>
        <p>Lorem ipsum dolor sit amet coidem ae a provident?</p>
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
    <div>
    </div>
</div>
  )
}

export default HomeContent
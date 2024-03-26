import React from 'react'
import '../Pages/styles/homelinks.css'

const HomeLinks = () => {
  return (
    <div className='c'>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/jamar-masias/" target='blank'><i className='bx bxl-linkedin'></i></a>
            </li>
            <li>
                <a href="https://github.com/jammar24" target='blank'><i className='bx bxl-github'></i></a>
            </li>
            <li>
                <a href="https://gitlab.com/jammar24" target='blank'><i className='bx bxl-gitlab'></i></a>
            </li>
            <li>
                <a href="https://wa.me/+5930996009197" target='blank'><i className='bx bxl-whatsapp'></i></a>
            </li>
        </ul>
    </div>
  )
}

export default HomeLinks
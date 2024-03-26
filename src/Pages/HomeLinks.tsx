import React from 'react'
import '../Pages/styles/homelinks.css'

const HomeLinks = () => {
  return (
    <div className='c'>
        <ul>
            <li>
                <a href=""><i className='bx bxl-linkedin'></i></a>
            </li>
            <li>
                <a href=""><i className='bx bxl-github'></i></a>
            </li>
            <li>
                <a href=""><i className='bx bxl-gitlab'></i></a>
            </li>
            <li>
                <a href=""><i className='bx bxl-whatsapp'></i></a>
            </li>
        </ul>
    </div>
  )
}

export default HomeLinks
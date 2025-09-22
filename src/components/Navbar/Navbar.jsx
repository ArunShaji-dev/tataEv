import React from 'react'
import logo  from '../../assets/logo.png'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='main-container'>
      <nav>
        <div className="container">
          <img src={logo}alt="" />
        </div>
        <div className='nav-container'>
           <ul>
          <li>Technology</li>
          <li>About</li>
          <li>Careers</li>
        </ul>
        <button>Subscribe</button>
        </div>
       
      </nav>
    </div>
  )
}

export default Navbar
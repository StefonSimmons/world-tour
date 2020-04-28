import React from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import hamburger from '../../images/hamburger.png'

import './Header.css'

function Header() {
  return (
    <div>

      <header className="app-header">
        <nav>
          <ul>
            {/* <li id= "hamburger-container"> */}
              <img id="hamburger" src={hamburger} alt="hamburger menu"/>
            {/* </li> */}
            <li className= "menu-item-container">
              <Link to='/' className="menu-item">
                  Home
              </Link>
            </li>
            <li className= "menu-item-container">
              <Link to='/about' className="menu-item">
                  About
              </Link>
            </li>
            <li className= "menu-item-container">
              <Link to='/contact' className="menu-item"> 
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link to='/explorer'>
          <img src={earth} className="earth-logo" alt="logo" />
        </Link>
        
      </header>
    </div>
  )
}

export default Header

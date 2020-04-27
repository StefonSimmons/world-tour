import React from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import './Header.css'

function Header() {
  return (
    <div>

      <header className="app-header">
        <nav >
          <ul className="app-nav">
            <li>
              <Link to='/'>
                  Home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                  About
              </Link>
            </li>
            <li>
              <Link to='/contact'> 
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
        <img src={earth} className="earth-logo" alt="logo" />
      </header>
    </div>
  )
}

export default Header

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
              <Link to='/' className="nav-link">
                  Home
              </Link>
            </li>
            <li>
              <Link to='/about' className="nav-link">
                  About
              </Link>
            </li>
            <li>
              <Link to='/contact' className="nav-link"> 
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

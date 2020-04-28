import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import hamburger from '../../images/hamburger.png'
import './Header.css'
// import styled from 'styled-components'



function Header() {

  const [open, updateOpen] = useState(false) 


  return (
    <div>

      <header className="app-header">
        <nav>
          <ul>
            {/* <li id= "hamburger-container"> DONT NEED*/}
            <img id="hamburger" src={hamburger} alt="hamburger menu" onClick={(e) => updateOpen(!open)}/>
            {/* {console.log(open)} */}
            {/* </li> DONT NEED*/}
            <li className= "menu-item-container" style={open ? { display:"block" }: {display:""}}>
              <Link to='/' className="menu-item" style={open ? { display:"block" }: {display:""}}>
                  Home
              </Link>
            </li>
            <li className= "menu-item-container" style={open ? { display:"block" }: {display:""}}>
              <Link to='/about' className="menu-item" style={open ? { display:"block" }: {display:""}}>
                  About
              </Link>
            </li>
            <li className= "menu-item-container" style={open ? { display:"block" }: {display:""}}>
              <Link to='/contact' className="menu-item" style={open ? { display:"block" }: {display:""}}> 
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link to='/explorer'>
            <img src={earth} className="earth-logo" alt="logo" />
          </Link>
        </div>
        
      </header>
    </div>
  )
}

export default Header

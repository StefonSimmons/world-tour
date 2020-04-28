import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import hamburger from '../../images/hamburger.png'

import './Header.css'

function Header() {

  const [open, updateOpen] = useState(false) 

  // const handleMenu = () => {
  //   const mq = window.matchMedia("(max-width: 861px)");
  //   if (mq.matches) {
  //     updateOpen(!open)
  //     // open ? {display: "none"}: display:
  //   }
  // }


  return (
    <div>

      <header className="app-header">
        <nav>
          <ul>
            {/* <li id= "hamburger-container"> */}
            <img id="hamburger" src={hamburger} alt="hamburger menu" onClick={(e) => updateOpen(!open)}/>
            {console.log(open)}
            {/* </li> */}
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
        <Link to='/explorer'>
          <img src={earth} className="earth-logo" alt="logo" />
        </Link>
        
      </header>
    </div>
  )
}

export default Header

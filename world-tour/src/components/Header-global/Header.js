import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import hamburger from '../../images/hamburger.png'
import './Header.css'
import styled, {keyframes} from 'styled-components'

// Styled Components
const AppHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: #282c34;
  position: relative;
  opacity: .9
`
const NavBar = styled.nav`
  height: 80px;
`
const Wrapper = styled.ul``
const Hamburger= styled.img`
  display: none;
`
const EarthSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Earth = styled.img`
  position: absolute;
  height: 30vmin;
  top: 20px;
  right: 42vw;
  border-radius: 360px;
  box-shadow: 5px 10px 20px #F4D35E;
  cursor: pointer;
  animation: ${EarthSpin} infinite 50s linear;
`

function Header() {

  const [open, updateOpen] = useState(false) 


  return (
    <div>

      <AppHeader>
        <NavBar>
          <Wrapper>
            <Hamburger id="hamburger" src={hamburger} alt="hamburger menu" onClick={(e) => updateOpen(!open)}/>
            {/* {console.log(open)} */}
            <li className= "menu-item-container" style={open ? { display:"block" }: {display:""}}>
              <Link to='/' className="menu-item" style={open ? { display:"block" }: {display:""}}>
                  Home
              </Link>
            </li>
            <li  className= "menu-item-container" style={open ? { display:"block" }: {display:""}}>
              <Link to='/about' className="menu-item" style={open ? { display:"block" }: {display:""}}>
                  About
              </Link>
            </li>
            <li  className= "menu-item-container" style={open ? { display:"block" }: {display:""}}>
              <Link to='/contact' className="menu-item" style={open ? { display:"block" }: {display:""}}> 
                  Contact
              </Link>
            </li>
          </Wrapper>
        </NavBar>
        <div>
          <Link to='/explorer'>
            <Earth src={earth} className="earth-logo" alt="logo" />
          </Link>
        </div>
        
      </AppHeader>
    </div>
  )
}

export default Header

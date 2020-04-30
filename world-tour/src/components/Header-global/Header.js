import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import hamburger from '../../images/hamburger.png'
import styled, {keyframes} from 'styled-components'


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
const Wrapper = styled.ul`
`
const Hamburger= styled.img`
  display: none;

  @media(max-width: 861px){
    display: inline-block;
    width: 40px;
    padding: 6px 40px
  }
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
  
  @media(max-width: 861px){   
    right: 35vw;
  }

  @media(max-width: 800px){
    right: 30vw;
  }
`
const MenuItemContainer = styled.li`
  display: inline-block;
  list-style-type: none;
  padding: 15px;
  border-left: solid 1px grey;

  @media(max-width: 861px){
    display: none; 
    background-color: #282c34;
  }
`
const MenuLink = styled(Link)`
  display: inline block;
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 25px;

  @media(max-width: 861px){   
    margin: 25px 15px;
  }
`

function Header() {

  const [open, updateOpen] = useState(false) 


  return (
    <div>

      <AppHeader>
        <NavBar>
          <Wrapper>
            <Hamburger src={hamburger} alt="hamburger menu" onClick={(e) => updateOpen(!open)}/>
            
            <MenuItemContainer style={open ? { display: "block" } : { display: "" }}>
              <MenuLink to='/' style={open ? { display:"block" }: {display:""}}>
                  Home
              </MenuLink>
            </MenuItemContainer>

            <MenuItemContainer style={open ? { display:"block" }: {display:""}}>
              <MenuLink to='/about' style={open ? { display:"block" }: {display:""}}>
                  About
              </MenuLink>
            </MenuItemContainer>

            <MenuItemContainer style={open ? { display:"block" }: {display:""}}>
              <MenuLink to='/contact' style={open ? { display:"block" }: {display:""}}> 
                  Contact
              </MenuLink>
            </MenuItemContainer>

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

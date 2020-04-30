import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import earth from '../../images/Emblem-earth.svg'
import hamburger from '../../images/hamburger.png'
import logo from '../../images/logoWT.png'
import styled, {keyframes} from 'styled-components'


const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #282c34;
  // position: relative;
  opacity: .85
`
const Logo = styled.img`
  width: 100px;
  padding-left: 25px
`
const OzoneLayer = styled.div`
  // position: relative;
  align-self: center;
  text-align: right;
  width: 75px;

  @media(max-width: 1000px){   
    width: 50px;
    text-align: left;
  }
  @media(max-width: 861px){   
    width: 30px;
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
  height: 170px;
  // align-self: center;
  // top: 20px;
  // right: 42vw;
  border-radius: 360px;
  box-shadow: 5px 10px 20px #F4D35E;
  cursor: pointer;
  animation: ${EarthSpin} infinite 50s linear;
  
  &:hover {
    box-shadow: 5px 10px 40px #F4D35E;
  }
  @media(max-width: 861px){   
    height: 150px;
    right: 41vw;
  }
`
const NavBar = styled.nav`
  height: 80px;
  align-self: center;
  @media(max-width: 1000px){   
    height: 60px;
  }
`
const Wrapper = styled.ul`
  text-align: center;
  padding-left: 0px;
`
const Hamburger= styled.img`
  display: none;

  @media(max-width: 861px){
    display: inline-block;
    width: 40px;
    padding: 0 40px;
  }
`
const MenuItemContainer = styled.li`
  display: inline-block;
  list-style-type: none;
  padding: 15px;
  border-left: solid 1px grey;

  @media(max-width: 1000px){   
    padding: 5px;
  }
  @media(max-width: 861px){
    display: none; 
    background-color: #282c34;
    border-left: none;

  }
`
const MenuLink = styled(Link)`
  display: inline block;
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 25px;
  @media(max-width: 1000px){   
    margin: 15px;
  }
  @media(max-width: 861px){   
    margin: 25px;
    font-size: 24px
  }
`
const ExplorerLink = styled(Link)`
`



function Header() {

  const [open, updateOpen] = useState(false) 


  return (
    <div>

      <AppHeader>
        <Logo src={logo} alt='logo'/>
        <OzoneLayer>
          <ExplorerLink to='/explorer'>
            <Earth src={earth} alt="logo" />
          </ExplorerLink>
        </OzoneLayer>

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

      </AppHeader>
    </div>
  )
}

export default Header

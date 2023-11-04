import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Explorer.css'
import styled from 'styled-components'



const Main = styled.main`
  justify-content: center;
  text-align: center;
  margin: 225px 0 0 0
`

const RandomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RandoBtn = styled.button`
  margin: 15px 0px;
  height: 35px;
  background-color: rgb(17,124,158);
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer
`
export const RandoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 300px;
  border: blue dotted 2px;
  background-color: rgba(17,124,158,.2)
`
export const RandoCountry = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px
`
const CountryLink = styled(Link)`
  text-decoration: none;
  color: black
`
const RegionSection = styled(RandomSection)`
  margin: 50px 0
`
export const RegionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 300px;
  width: 1000px;


  @media(max-width: 1000px){   
    height: 300px;
    width: 860px;
  }
  @media(max-width: 861px){   
    height: 300px;
    width: 600px;
    margin: 20px;
    border-radius: 10px
  }
  @media(max-width: 697px){   
    height: 300px;
    width: 300px;
    margin: 20px;
    border-radius: 10px
  }  
`
const RegionLink = styled(CountryLink)`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(20,20,20,.4);
    h2 {
      font-size: 48px;
      box-shadow: none;
      background-color: transparent
    }
  }
`
const Region = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 36px;
  letter-spacing: 5px;
  padding: 0px 5px;
  color: white;
  background-color: rgba(20,20,20,.1);
  box-shadow: 5px 10px 20px rgb(20,20,20);
`


function Explorer({ uniqueRegions, countries }) {
  
  const [country, updateCountry] = useState('--?--')
  const [clickable, updateClickable] = useState(false)

  function handleRandomBtn(e) {
    const countryCount = countries.length
    const randomNumber = Math.floor(Math.random() * countryCount)
    const randomCountry = countries.filter((country, i) => countries.indexOf(country) === randomNumber)
    
    updateClickable(true)
    updateCountry(randomCountry)
  }


  return (
    <div>
      <Main>
        <RandomSection>

          <RandoBtn onClick= {(e) => handleRandomBtn()}>Visit a Random Country</RandoBtn>
          
          <RandoBox>
            <CountryLink to={`/country/${country}`} style={clickable ? { pointerEvents: "" } : { pointerEvents: "none" }}>
              <RandoCountry>{country}</RandoCountry>
            </CountryLink>
          </RandoBox>
          
        </RandomSection>
        <RegionSection>
          {/* Includes a className so I can style the region names with a background image*/}
          {uniqueRegions.map((region, id) => 
            <RegionContainer className={region.replace(' ', '-')} key={id}>
              <RegionLink to={`/region/${region.replace(' ', '-')}`}>
                <Region>
                  {region}
                </Region>
              </RegionLink>
            </RegionContainer>
          )} 
        </RegionSection>  
      </Main>
      
      
    </div>
  )
}
// style={clickable ? { pointerEvents: "" } : { pointerEvents: "none" }}
export default Explorer

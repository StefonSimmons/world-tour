import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Explorer.css'
import styled from 'styled-components'

const Main = styled.main`
  justify-content: center;
  text-align: center;
  margin: 225px 0
`

const SectionRandom = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RandoBtn = styled.button`
  margin: 15px 0px;
  height: 35px;
  background-color: rgb(17,124,158);
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer
`
const RandoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 300px;
  border: blue dotted 2px;
  background-color: rgba(17,124,158,.2)
`
const RandoCountry = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px
`
const CountryLink = styled(Link)`
  text-decoration: none;
  color: black
`
const RegionLink = styled(CountryLink)`
  text-decoration: none;
  color: black
`
const SectionRegion = styled(SectionRandom)`
  margin: 50px 0
`
const RegionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 300px;
  width: 1000px;
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
  
  const [randoCountry, updateCountry] = useState('--?--')

  function handleRandomBtn(e) {
    const countryCount = countries.length
    const randomNumber = Math.floor(Math.random() * countryCount)
    const randomCountry = countries.filter((country,i) => countries.indexOf(country) === randomNumber)

    updateCountry(randomCountry)
    // console.log(randomCountry)
  }

  return (
    <div>
      <Main>
        <SectionRandom>

          <RandoBtn onClick= {(e) => handleRandomBtn()}>Visit a Random Country</RandoBtn>
          
          <RandoBox>
            <CountryLink to='/country/:alpha3code'>
              <RandoCountry>{randoCountry}</RandoCountry>
            </CountryLink>
          </RandoBox>
          
        </SectionRandom>
        <SectionRegion>
          {/* A map loop for regions here. Include a className so I can style the region names with a background image*/}
          {uniqueRegions.map((region, id) => 
            <RegionContainer className={region}>
              <RegionLink to='/region/:alphacode3' key={id}>
                <Region>{region}</Region>
              </RegionLink>
            </RegionContainer>
          )} 
        </SectionRegion>  
      </Main>
      
      
    </div>
  )
}

export default Explorer

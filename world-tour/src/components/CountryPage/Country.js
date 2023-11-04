import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import CountUp from 'react-countup'
import styled from 'styled-components'


export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  margin: 250px 0 0 0;
  padding-bottom: 80px
`
const Summary = styled.section`
  width: 500px;
  background-color: rgba(20,20,20,.1);
  box-shadow: 5px 10px 20px rgb(20,20,20);
  padding: 40px;
  margin-bottom: 50px;

  @media(max-width: 1050px){    
    width: 800px;
    text-align: center
  }
  @media(max-width: 900px){ 
    width: 500px;
  }
  @media(max-width: 697px){ 
    width: 300px;
  }
`
const Header = styled.h1`
  margin-bottom: 5px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 36px;
  letter-spacing: 5px;

  @media(max-width: 1050px){    
    font-size: 48px;
  }
`
const NativeName = styled.i`
  font-size: 12px;
  letter-spacing: 5px;

  @media(max-width: 1050px){    
    font-size: 18px;
  }
  
`
const Divider = styled.hr`
  width: 500px;
  margin: 18px 0px;

  @media(max-width: 1050px){    
    width: 800px;
  }
  @media(max-width: 900px){ 
    width: 500px;
  }
  @media(max-width: 697px){ 
    width: 300px;
  }
`
const Table = styled.table`
  width: 500px;

  @media(max-width: 1050px){    
    width: 800px;
  }
  @media(max-width: 900px){ 
    width: 500px;
  }
  @media(max-width: 697px){ 
    width: 300px;
  }
`
export const Label = styled.td`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  line-height: 2;
  width: 60%;
  @media(max-width: 1050px){    
    font-size: 24px;
    text-align: left
  }
  @media(max-width: 697px){ 
    font-size: 18px;
  }
`
const Details = styled.td`
  font-family: sans-serif;
  font-size: 18px;
  line-height: 2;
  text-align: right;

  @media(max-width: 1050px){    
    font-size: 24px;
  }
  @media(max-width: 697px){ 
    font-size: 18px;
  }
`
export const Flag = styled.img`
  width: 500px;
  border: grey solid 2px;

  &:hover{
    box-shadow: 5px 10px 40px grey;
    opacity: .9
  }
  @media(max-width: 1050px){    
    width: 800px;
  }
  @media(max-width: 900px){ 
    width: 500px;
  }
  @media(max-width: 697px){ 
    width: 300px;
  }
`
const ReturnBtn = styled.button`
  font-size: 18px;
  border-radius: 15px;
  background-color: rgba(60,60,155,.1);
  cursor: pointer;
  color: rgba(20,20,20,.7);
  transition: all .15s ease-in;

  @media(max-width: 1050px){ 
    font-family: 'Nunito Sans', sans-serif;   
    font-size: 28px;
    padding: 5px 12px;
    background-color: rgba(60,60,155,.3);
  }
  @media(max-width: 900px){ 
    font-size: 18px;
  }

  &:hover{
    border: solid transparent 2px;
    color: black;
  }

`
const RegionLink = styled(Link)`
`

function Country({regions}) {


  let history = useHistory();
  const { countryName } = useParams()

  let countryData = regions.filter(r => r.name.replaceAll(' ', '-') === countryName)
  let country = countryData[0]


  function redirect() {
    if (country === undefined) {
      history.push('/explorer')
      window.location.reload()
    }
  }

  redirect()

  return (
    <div>
      <Main>
        <Summary>
          <RegionLink to={`/region/${country.region.replaceAll(' ', '-')}`}>
            <ReturnBtn>{`${`⬅`} ${country.region}`}</ReturnBtn>
          </RegionLink>
          <Header>{countryName}</Header>
          <NativeName>( {country.nativeName} )</NativeName>
          <Divider/>
          <Table>
            <tbody>
              <tr>
                <Label>{`Population in ${countryName}:`}</Label>
                <Details>
                  <CountUp
                    end={country.population}
                    separator=','
                  />
                </Details>
              </tr>
              <tr>
                <Label>Area of Land (mi<sup>2</sup>):</Label>
                <Details>
                  <CountUp
                    end={country.area}
                    separator=','
                  />
                </Details>
              </tr>
              <tr>
                <Label>Capital:</Label>
                <Details>{country.capital ? country.capital : "N/A"}</Details>
              </tr>
              <tr>
                <Label>Currency (Symbol):</Label>
                {
                  country.currencies ?
                    <Details>
                    {country.currencies[0].code} {(country.currencies[0].symbol) }
                    </Details>
                    :
                    <Details>
                    N/A
                    </Details>
                }
              </tr>
              <tr>
                <Label>Region:</Label>
                <Details>{country.region}</Details>
              </tr>
              <tr>
                <Label>Sub Region:</Label>
                <Details>{country.subregion}</Details>
              </tr>
            </tbody>
          </Table>
          <Divider />
        </Summary>
        <a
          href={`https://www.google.com/maps/place/${countryName}/@${country.latlng[0]},${country.latlng[1]},6z/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flag src={country.flag} alt={countryName}/>
        </a>  
      </Main>
    </div>
  )
}

export default Country

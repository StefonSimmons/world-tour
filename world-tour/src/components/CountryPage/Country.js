import React from 'react'
import {useParams} from 'react-router-dom'
import CountUp from 'react-countup'
import styled from 'styled-components'

const Main = styled.main`
  text-align: left;
  margin: 175px 0;
  padding: 0 0 0 0px;
`
const Summary = styled.section`
  width: 500px;
  background-color: rgba(20,20,20,.1);
  box-shadow: 5px 10px 20px rgb(20,20,20);
  padding: 40px 0 40px 100px;
  margin-bottom: 30px
`
const Header = styled.h1`
  margin-bottom: 5px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 36px;
  letter-spacing: 5px;
`
const NativeName = styled.i`
  font-size: 12px;
  letter-spacing: 5px;
`

const Divider = styled.hr`
  width: 350px;
  margin: 18px 0px
`
const Table = styled.table`
  width: 350px
`
const Label = styled.td`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  line-height: 2
`
const Details = styled.td`
  font-family: sans-serif;
  font-size: 18px;
  line-height: 2;
  text-align: right
`
const Flag = styled.img`
  width: 600px;
  border: grey solid 2px
`


function Country({regions}) {

  
  const {countryName} = useParams()
  let countryData = regions.filter(r => r.name === countryName)
  let country = countryData[0]


  return (
    <div>
        {console.log('in rtrn before native',country)}
      <Main>
        <Summary>
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
                <Details>{country.capital}</Details>
              </tr>
              <tr>
                <Label>Currency (Symbol):</Label>
                <Details>{country.currencies[0].code} ({country.currencies[0].symbol})</Details>
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
          <Flag src={country.flag} alt={countryName} />
      </Main>
    </div>
  )
}

export default Country

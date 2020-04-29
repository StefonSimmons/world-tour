import React from 'react'
import {useParams} from 'react-router-dom'
import CountUp from 'react-countup'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 125px 0;
  padding: 0 0 0 0px;
`


function Country({regions}) {

  
  const {countryName} = useParams()
  let countryData = regions.filter(r => r.name === countryName)
  let country = countryData[0]


  return (
    <div>
        {console.log('in rtrn before native',country)}
      <Main>
        <h1>{countryName}</h1>
        <i>{country.nativeName}</i>
        <hr/>
        <table>
          <tbody>
            <tr>
              <td>{`Population in ${countryName}:`}</td>
              <td>
                <CountUp
                  end={country.population}
                  separator=','
                />
              </td>
            </tr>
            <tr>
              <td>Area of Land (mi<sup>2</sup>):</td>
              <td>
                <CountUp
                  end={country.area}
                  separator=','
                />
              </td>
            </tr>
            <tr>
              <td>Capital:</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Currency (Symbol):</td>
              <td>{country.currencies[0].code} ({country.currencies[0].symbol})</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>{country.region}</td>
            </tr>
            <tr>
              <td>Sub Region:</td>
              <td>{country.subregion}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <img src={country.flag} alt={countryName}/>
      </Main>
    </div>
  )
}

export default Country

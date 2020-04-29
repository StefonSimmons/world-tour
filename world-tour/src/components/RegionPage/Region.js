import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"
import CountUp from 'react-countup'
import '../ExplorerPage/Explorer.css'
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 125px 0;
  padding: 0 0 0 0px;
`
const Header = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 36px;
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
const Numbers = styled.td`
  font-family: sans-serif;
  font-size: 18px;
  line-height: 2;
  text-align: right
`
const CountryLink = styled(Link)`
  text-decoration: none;
  color: black
`
const Country = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  letter-spacing: 5px;
`
const Summary = styled.section`
  width: 500px;
  background-color: rgba(20,20,20,.1);
  box-shadow: 5px 10px 20px rgb(20,20,20);
  padding: 60px 0 0 100px
`
const SideImage = styled.aside`
  height: 1000px;
  width: 600px;

`

function Region({regions}) {
  
  // useParams will read whatever :variable is set on the Region for this component and create a unique location.
  // useParams will read the to=value of the Link for this component and create a unique link (url or path name)
  const { regionName } = useParams()
  // This gets me all countries data specific to the region clicked from explorer
  const countries = regions.filter(r => r.region === regionName)
    console.log(countries)

  function totalPopulation() {
    const populationArray = countries.map((c) => c.population)
    const summedPopulation = populationArray.reduce((sum, curr) => {
      return sum + curr
    }, 0)
    return summedPopulation
  }

  function totalArea() {
    const areaArray = countries.map((c) => c.area)
    const summedArea = areaArray.reduce((sum, curr) => {
      return sum + curr
    }, 0)
    return summedArea
  }
  
  return (
    <div>
      <Main>
        <Summary>
          <Header>{regionName}</Header>
          <Divider/>
          <Table>
            <tbody>
              <tr>
                <Label>Population in {regionName}:</Label>
                <Numbers>
                  <CountUp
                    end={totalPopulation()}
                    separator=','
                  />  
                </Numbers>
              </tr>
              <tr>
                <Label>Area of Land (mi<sup>2</sup>):</Label>
                <Numbers>
                  <CountUp
                    end={totalArea()}
                    separator=','
                  />
                </Numbers>
              </tr>
              <tr>
                <Label>Total Countries:</Label>
                <Numbers>
                  <CountUp
                    end={countries.length}
                    separator=','
                  />
                </Numbers>
              </tr>
            </tbody>
          </Table>
          <Divider/>
          {/* Need to setup a map loop for regions here*/}
          <section>
            {countries.map((c, id) => 
              <div key= {id}>
                <CountryLink to= {`/country/${c.name}`}>
                  <Country>{c.name}</Country>
                </CountryLink>
              </div>
            )}
          </section>
        </Summary>
        <SideImage className={regionName}>
        </SideImage>
      </Main>
      
      
    </div>
  )
}

export default Region
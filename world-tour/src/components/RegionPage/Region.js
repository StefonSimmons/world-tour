import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"
import CountUp from 'react-countup'

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
      <main>
        <h1>{regionName}</h1>
        <hr/>
        <table>
          <tbody>
            <tr>
              <td>Population in {regionName}:</td>
              <td>
                <CountUp
                  end={totalPopulation()}
                  separator=','
                />  
              </td>
            </tr>
            <tr>
              <td>Area of Land (mi<sup>2</sup>):</td>
              <td>
                <CountUp
                  end={totalArea()}
                  separator=','
                />
              </td>
            </tr>
            <tr>
              <td>Total Countries:</td>
              <td>
                <CountUp
                  end={countries.length}
                  separator=','
                />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        {/* Need to setup a map loop for regions here*/}
        <div>
          {countries.map((c, id) => 
            <div key= {id}>
              <Link to= {`/country/${c.name}`}>
                {c.name}
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Region
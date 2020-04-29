import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"

function Region({regions}) {
  
  const { name } = useParams()
  // This gets me all countries data specific to the region clicked from explorer
  const countries = regions.filter(r => r.region === name)
    console.log(countries)

  
  return (
    <div>
      <main>
        <h1>name of Region clicked</h1>
        <hr/>
        <table>
          <tbody>
            <tr>
              <td>Population in *name here*</td>
              <td>########</td>
            </tr>
            <tr>
              <td>Area of Land (mi<sup>2</sup>)</td>
              <td>#####</td>
            </tr>
            <tr>
              <td>Total Countries</td>
              <td>####</td>
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
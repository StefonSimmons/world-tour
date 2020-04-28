import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Explorer({ uniqueRegions, countries }) {
  
  const [country, updateCountry] = useState('')

  function handleRandomBtn(e) {
    const countryCount = countries.length
    const randomNumber = Math.floor(Math.random() * countryCount)
    const randomCountry = countries.filter((country,i) => countries.indexOf(country) === randomNumber)
 
    updateCountry(randomCountry)
    // console.log(randomCountry)
  }

  return (
    <div>
      <main>
        <button onClick= {(e) => handleRandomBtn()}>Visit a Random Country/Region</button>

        <Link to='/country/:alpha3code'>
          <div>{country}</div>
        </Link>

        {/* Need to setup a map loop for regions here. Include a className so I can style the region names with a background image*/}
        {uniqueRegions.map((region, id) => 
          <Link to='/region/:alphacode3' key={id}>
            <h2 className={region}>
              {region}
            </h2>
        </Link>
        )}  
      </main>
      
    </div>
  )
}

export default Explorer

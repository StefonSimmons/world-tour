import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../Header-global/Header'
import Home from '../HomePage/Home'
import About from '../AboutPage/About'
import Contact from '../ContactPage/Contact'
import Explorer from '../ExplorerPage/Explorer'
import Region from '../RegionPage/Region'
import Country from '../CountryPage/Country'
import Footer from '../Footer-global/Footer'
import {Route, Switch} from 'react-router-dom'


function App() {

  const [regions, updateRegions] = useState([])
  

  useEffect(() => {
    const apiCall = async () => {
      const results = await axios("https://restcountries.eu/rest/v2/all")
      updateRegions(results.data)
    }
    apiCall()
  }, [])
  
  function totalArea(){
    let areaArray = regions.map(r => r.area)
    let sumAreas = areaArray.reduce((sum, curr) => {
      return sum + curr
    }, 0)
    // converts from square kilometer to square miles
    let convertArea = (sumAreas * 0.386102).toFixed(2)
    return convertArea
  }
  
  function totalPopulation(){
    let populationArray = regions.map(r => r.population)
    let sumPopulation = populationArray.reduce((sum, curr) => {
      return sum + curr
    }, 0)
    return sumPopulation
  }

  function listRegions() {
    const uniqueRegions = []
    regions.forEach((r) => {
      if (uniqueRegions.includes(r.region) === false && r.region !== '') {
        uniqueRegions.push(r.region)
      }
    })
    return uniqueRegions
  }

  function listCountries() {
    const countries = regions.map((r, id) => 
      r.name
    )
    return countries
  }

  return (
    <div className="App">
      <Header />
      {/* {console.log(totalArea())}
      {console.log(totalPopulation())}
      {console.log(regions[1])}
      {console.log(listRegions())} */}
      {/* {console.log(listCountries())} */}
      
      <Switch>

        <Route path="/" exact>
            <Home
              totalCountries={regions.length}
              totalArea={totalArea()}
              totalPopulation={totalPopulation()}
            />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="/explorer" exact>
            <Explorer
              uniqueRegions={listRegions()}
              countries={listCountries()}
            />
        </Route>

        <Route path={`/region/:regionName`}>
          <Region
            regions= {regions}
          />
        </Route>

        <Route path='/country/:countryName'>
          <Country
            regions= {regions}
          />
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

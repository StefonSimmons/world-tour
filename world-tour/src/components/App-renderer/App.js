import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../Header-global/Header'
import Home from '../HomePage/Home'
import About from '../AboutPage/About'
import Contact from '../ContactPage/Contact'
import Explorer from '../ExplorerPage/Explorer'
import Region from '../RegionPage/Region'
import Country from '../CountryPage/Country'
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



  return (
    <div className="App">
      <Header />
      {console.log(totalArea())}
      {console.log(totalPopulation())}
      {console.log(regions[1])}
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
          <Explorer />
        </Route>
        <Route path="/region/:alphacode3">
          <Region />
        </Route>
        <Route path="/country">
          <Country />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from '../Header-global/Header'
import Home from '../HomePage/Home'
import About from '../AboutPage/About'
import Contact from '../ContactPage/Contact'
import Explorer from '../ExplorerPage/Explorer'
import Region from '../RegionPage/Region'
import Country from '../CountryPage/Country'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
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

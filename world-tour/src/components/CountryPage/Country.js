import React from 'react'
import logo from '../../images/logo192.png'

function Country() {
  return (
    <div>
      <main>
        <h1>name of Country clicked</h1>
        <i>native name</i>
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
              <td>Capital</td>
              <td>Gaborone</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>name and symbol</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>Africa</td>
            </tr>
            <tr>
              <td>Sub Region</td>
              <td>Gaborone</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <img src={logo} alt="flagname"/>
      </main>
    </div>
  )
}

export default Country

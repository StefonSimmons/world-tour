import React from 'react'
import { Link } from 'react-router-dom'

function Region() {
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
          <Link to='/country/:alpha3code'>
            Botwana
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Region
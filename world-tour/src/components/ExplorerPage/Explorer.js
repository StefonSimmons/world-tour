import React from 'react'
import { Link } from 'react-router-dom'

function Explorer() {
  return (
    <div>
      <main>
        <button>Visit a Random Country/Region</button>
        <div>[Name of randomly generated country]</div>
        {/* Need to setup a map loop for regions here. Include a className so I can style the region names with a background image*/}
        <Link to='/region/:alphacode3'>
          <h2>Africa</h2>
        </Link>
      </main>
      
    </div>
  )
}

export default Explorer

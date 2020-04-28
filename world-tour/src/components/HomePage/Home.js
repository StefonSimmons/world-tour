import React from 'react'
import '../HomePage/Home.css'




function Home({totalCountries, totalArea, totalPopulation}) {
  return (
    <div>

      <main>
        <section>
          <h1>Welcome, 3rd-Star Explorer</h1>

          <h2>The population on Earth:</h2>
          <p>{totalPopulation}</p>

          <h2>Area of Land (mi<sup>2</sup>)</h2>
          <p>{totalArea}</p>

          <h2>Recorded Designated Regions:</h2>
          <p>{totalCountries}</p>
        </section>
      </main>
    </div>
  )
}

export default Home
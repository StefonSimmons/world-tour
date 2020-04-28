import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  justify-content: center;
  text-align: center;
  margin: 250px 0
`
const Welcome = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 48px
`
const Titles = styled.h2`
font-family: 'Manrope', sans-serif;
font-size: 36px
`
const Numbers = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  letter-spacing: 15px

`

function Home({totalCountries, totalArea, totalPopulation}) {
  return (
    <>

      <Main>
        <section>
          <Welcome>Welcome Home, 3rd-Star Explorer</Welcome>

          <Titles>Population on Earth:</Titles>
          <Numbers>{totalPopulation}</Numbers>

          <Titles>Area of Land (mi<sup>2</sup>)</Titles>
          <Numbers>{totalArea}</Numbers>

          <Titles>Recorded Designated Regions:</Titles>
          <Numbers>{totalCountries}</Numbers>
        </section>
      </Main>
    </>
  )
}

export default Home
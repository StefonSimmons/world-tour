import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

const Main = styled.main`
  justify-content: center;
  text-align: center;
  margin: 250px 0
`
const Welcome = styled.h1`
  margin-bottom: 80px;
  font-family: 'Montserrat', sans-serif;
  font-size: 48px
`
const Header = styled.h2`
font-family: 'Manrope', sans-serif;
font-size: 36px;
margin-bottom: 0px
`
const Numbers = styled.p`

  margin: 5px 0 50px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  letter-spacing: 20px

`

function Home({totalCountries, totalArea, totalPopulation}) {
  return (
    <>

      <Main>
        
        <section>
          <Welcome>Welcome Home, 3rd-Star Explorer</Welcome>

          <Header>Population on Earth:</Header>
          <Numbers>
            <CountUp
              start={7300000000}
              end={totalPopulation}
              duration={600}
              separator=","
            />
          </Numbers>

          <Header>Area of Land (mi<sup>2</sup>):</Header>
          <Numbers>
            <CountUp
              start={50000}
              end={totalArea}
              duration={600}
              separator=","
            />
          </Numbers>

          <Header>Recorded Designated Regions:</Header>
          <Numbers>
            <CountUp
              end={totalCountries}
              duration={60}
              separator=","
            />
            
          </Numbers>
        </section>
      </Main>
    </>
  )
}

export default Home
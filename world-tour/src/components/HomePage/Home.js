import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

const Main = styled.main`
  justify-content: center;
  text-align: center;
  margin: 250px 0 0 0;
  padding-bottom: 5rem;
`
const Welcome = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 45px;
  color: #282c34;
`
const Header = styled.h2`
margin-bottom: 0px;
font-family: 'Manrope', sans-serif;
font-size: 30px;
letter-spacing: 10px;
color: rgb(16, 23, 100);
`
const Numbers = styled.p`
  margin: 5px 0 50px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  letter-spacing: 20px
`
const Split = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 90px;
  color: #282c34;
`
const Divider = styled.hr`
  width: 500px;
  margin-bottom: 80px;
  height: 1px;
  background-color: #1B2432
`
const Greet = styled.span`
  color: #403F4C
`
function Home({totalCountries, totalArea, totalPopulation}) {
  return (
    <>

      <Main>
        
        <section>
          <Welcome><Greet>Welcome Home</Greet> <Split>|</Split> 3rd-Star Explorer</Welcome>
          <Divider/>
          <Header>Population on Earth</Header>
          <Numbers>
            <CountUp
              start={7340000000}
              end={totalPopulation}
              duration={60}
              separator=","
            />
          </Numbers>

          <Header>Area of Land (mi<sup>2</sup>)</Header>
          <Numbers>
            <CountUp
              start={30000000}
              end={totalArea}
              duration={60}
              separator=","
            />
          </Numbers>

          <Header>Recorded Regions</Header>
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
import React from 'react'
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 225px 0 100px 0;
`
const Section = styled.section`
  width: 900px;
  border-radius: 360px; 
  background-color: rgb(183,176,159);
`
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 70px;
`
const DataSection = styled(AboutSection)`
  margin: 15px 0 30px 0
`
const Header = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
  margin: 25px 0 0 0;
  color: rgb(16, 23, 130)
`
const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  text-align: left;
  margin: 15px 0;
  letter-spacing: 3px;
  line-height: 1.6;
  color: rgb(60,95,60)
`
const Link = styled.a`
  color: black;
  text-decoration: none
`

function About() {
  return (
    <div>
      <Main>
        <Section>
          <AboutSection>
            <Header>About</Header>
            <Paragraph>"World Tour" allows users to take a satellite journey to both familiar and foreign lands of Earth. You can randomly teleport or get specific in your search for regional data.</Paragraph>
          </AboutSection>

          <DataSection>
            <Header>Data & Tech</Header>
            <Paragraph>This application is written in React.js and pulls data from the RESTful API at <Link href="https://restcountries.eu/">https://restcountries.eu/</Link></Paragraph>
          </DataSection>
        </Section>
      </Main>
    </div>
  )
}

export default About

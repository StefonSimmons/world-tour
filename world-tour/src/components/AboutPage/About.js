import React from 'react'
import styled from 'styled-components'




const Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 250px 0 100px 0;
`
const Section = styled.section`
  width: 1000px;
  border-radius: 360px; 
  background-color: rgb(183,176,159);
  
  @media(max-width: 861px){   
    width: 600px;
    margin-bottom: 45px;
  }
`
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 100px;
`
const DataSection = styled(AboutSection)`
  margin: 15px 0 30px 0
`
const Header = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
  margin: 25px 0 0 0;
  color: rgb(16, 23, 130);

  @media(max-width: 867px){   
    font-size: 28px;
  }
  @media(max-width: 365px){   
    font-size: 24px;
  }
`
const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  text-align: left;
  margin: 15px 0;
  letter-spacing: 2px;
  line-height: 1.6;
  color: rgb(60,95,60);

  @media(max-width: 867px){   
    font-size: 15px;
    letter-spacing: 1px;
  }
  @media(max-width: 365px){   
    font-size: 15px;
    text-align: center;
  }
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
            <Paragraph>This application is written in React.js and pulls data from the RESTful API at <Link href="https://restcountries.eu/" target='_blank' rel="noopener noreferrer">restcountries.eu</Link></Paragraph>
          </DataSection>

          <DataSection>
            <Header>Logo & Images</Header>
            <Paragraph>Logo: Create on <Link href="https://www.freelogodesign.org/" target='_blank' rel="noopener noreferrer">freelogodesign</Link></Paragraph>
            <Paragraph>Images: searched by region name on <Link href="https://unsplash.com/" target='_blank' rel="noopener noreferrer">Unsplash</Link></Paragraph>
          </DataSection>
        </Section>
      </Main>
    </div>
  )
}

export default About

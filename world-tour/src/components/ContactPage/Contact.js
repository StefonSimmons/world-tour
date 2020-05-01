import React from 'react'
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 225px 0;
`
const Section = styled.section`
  width: 900px;
  border-radius: 360px; 
  background-color: rgb(183,176,159);
  padding: 30px
`
const Header = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
  margin: 25px 0 0 0;
  color: rgb(16, 23, 130);

  @media(max-width: 365px){   
    font-size: 28px
  }
  @media(max-width: 365px){   
    font-size: 24px;
    margin: 10px 0 0 0;
  }

`
const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin: 25px 0 25px 200px;
  letter-spacing: 3px;
  color: rgb(60,95,60);
  text-align: left;

  @media(max-width: 865px){   
    font-size: 15px;
  }
  @media(max-width: 700px){   
    font-size: 12px;
    margin: 25px 0 25px 150px;
  }
  @media(max-width: 550px){   
    font-size: 12px;
    margin: 25px 0 25px 100px;
  }
  @media(max-width: 365px){   
    font-size: 12px;
    margin: 25px 0;
  }
`
const Link = styled.a`
  color: black;
  text-decoration: none
`

function Contact() {
  return (
    <div>
      <Main>
        <Section>
          <Header>Contact</Header>
          <Paragraph>Developer | <Link href="https://www.linkedin.com/in/stefonsimmons" target='_blank' rel="noopener noreferrer">Stefon Simmons</Link></Paragraph>
          <Paragraph>Email | <Link href="mailto:stefonsimmons1@gmail.com">stefonsimmons1@gmail.com</Link></Paragraph>
          <Paragraph>GitHub | <Link href="http://github.com/StefonSimmons/" target='_blank' rel="noopener noreferrer">github.com/StefonSimmons</Link></Paragraph>
        </Section>
      </Main>
    </div>
  )
}

export default Contact

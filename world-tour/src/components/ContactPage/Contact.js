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
  padding: 0 0 30px 0
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
  font-size: 24px;
  margin: 25px 0;
  letter-spacing: 3px;
  color: black;
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
          <Paragraph>Developer | Stefon Simmons</Paragraph>
          <Paragraph>Email | <Link href="mailto:stefonsimmons1@gmail.com">stefonsimmons1@gmail.com</Link></Paragraph>
          <Paragraph>GitHub | <Link href="http://github.com/StefonSimmons/">github.com/StefonSimmons</Link></Paragraph>
        </Section>
      </Main>
    </div>
  )
}

export default Contact

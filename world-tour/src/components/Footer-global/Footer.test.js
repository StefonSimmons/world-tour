import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Footer from './Footer'

test('Footer component renders', () => {
  const FooterComponent = renderer.create(<Footer/>).toJSON()
  expect(FooterComponent).toMatchSnapshot()
})
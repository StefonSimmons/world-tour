import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Header from './Header'

test('Header component renders', () => {
  const HeaderComponent = renderer.create(<Header/>).toJSON()
  expect(HeaderComponent).toMatchSnapshot()
})
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Home from './Home'

test('Home component renders', () => {
  const HomeComponent = renderer.create(<Home/>).toJSON()
  expect(HomeComponent).toMatchSnapshot()
})


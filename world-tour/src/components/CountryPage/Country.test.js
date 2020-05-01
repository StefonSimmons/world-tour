import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Country from './Country'

test('Country component renders', () => {
  const CountryComponent = renderer.create(<Country/>).toJSON()
  expect(CountryComponent).toMatchSnapshot()
})
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Region from './Region'

test('Region component renders', () => {
  const RegionComponent = renderer.create(<Region/>).toJSON()
  expect(RegionComponent).toMatchSnapshot()
})
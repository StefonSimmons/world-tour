import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Explorer from './Explorer'

test('Explorer component renders', () => {
  const ExplorerComponent = renderer.create(<Explorer/>).toJSON()
  expect(ExplorerComponent).toMatchSnapshot()
})
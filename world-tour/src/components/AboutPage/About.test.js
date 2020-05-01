import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import About from './About'

test('About component renders', () => {
  const AboutComponent = renderer.create(<About/>).toJSON()
  expect(AboutComponent).toMatchSnapshot()
})

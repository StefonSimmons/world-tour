import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Contact from './Contact'

test('Contact component renders', () => {
  const ContactComponent = renderer.create(<Contact/>).toJSON()
  expect(ContactComponent).toMatchSnapshot()
})
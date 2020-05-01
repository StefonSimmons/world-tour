import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { mount } from "enzyme"
import React from 'react'
import Header, { Earth, Hamburger, AppHeader}from './Header'

test('Header_Earth component renders', () => {
  const EarthComponent = renderer.create(<Earth/>).toJSON()
  expect(EarthComponent).toMatchSnapshot()
})

test('Header_Hamburger component renders', () => {
  const HamburgerComponent = renderer.create(<Hamburger/>).toJSON()
  expect(HamburgerComponent).toMatchSnapshot()
})

test('Header_AppHeader component renders', () => {
  const AppHeaderComponent = renderer.create(<AppHeader/>).toJSON()
  expect(AppHeaderComponent).toMatchSnapshot()
})

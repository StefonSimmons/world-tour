import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import Explorer, {RegionContainer, RandoBox, RandoBtn, RandoCountry} from './Explorer'

test('Explorer_RegionContainer component renders', () => {
  const RegionCointainerComponent = renderer.create(<RegionContainer/>).toJSON()
  expect(RegionCointainerComponent).toMatchSnapshot()
})

test('Explorer_RandoBox component renders', () => {
  const RandoBoxComponent = renderer.create(<RandoBox/>).toJSON()
  expect(RandoBoxComponent).toMatchSnapshot()
})

test('Explorer_RandoBtn component renders', () => {
  const RandoBtnComponent = renderer.create(<RandoBtn/>).toJSON()
  expect(RandoBtnComponent).toMatchSnapshot()
})

test('Explorer_RandoCountry component renders', () => {
  const RandoCountryComponent = renderer.create(<RandoCountry/>).toJSON()
  expect(RandoCountryComponent).toMatchSnapshot()
})
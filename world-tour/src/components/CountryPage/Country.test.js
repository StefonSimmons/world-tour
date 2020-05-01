import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import { Flag, Main, Label} from './Country'



test('Country_Flag component renders', () => {
  const FlagComponent = renderer.create(<Flag/>).toJSON()
  expect(FlagComponent).toMatchSnapshot()
})

test('Country_Main component renders', () => {
  const MainComponent = renderer.create(<Main/>).toJSON()
  expect(MainComponent).toMatchSnapshot()
})

test('Country_Label component renders', () => {
  const LabelComponent = renderer.create(<Label/>).toJSON()
  expect(LabelComponent).toMatchSnapshot()
})

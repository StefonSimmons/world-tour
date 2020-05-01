import renderer from 'react-test-renderer'
import 'jest-styled-components'
import React from 'react'
import { Table, CountryList, Country }from './Region'

test('Region_Table component renders', () => {
  const TableComponent = renderer.create(<Table/>).toJSON()
  expect(TableComponent).toMatchSnapshot()
})

test('Region_CountryList component renders', () => {
  const CountryListComponent = renderer.create(<CountryList/>).toJSON()
  expect(CountryListComponent).toMatchSnapshot()
})

test('Region_Country component renders', () => {
  const CountryComponent = renderer.create(<Country/>).toJSON()
  expect(CountryComponent).toMatchSnapshot()
})

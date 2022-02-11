import React from "react"
import { mount } from "@cypress/react"
import Searchform from "./SearchForm.js"

describe('<Searchform />', () => {
  it('renders', () => {
    // see: https://reactjs.org/docs/test-utils.html
    mount(<Searchform />)
  })
})
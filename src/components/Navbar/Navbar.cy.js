import React from "react"
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from "@cypress/react"
import Navbar from "./Navbar.js"

describe('<Navbar />', () => {
  it('renders', () => {
    // see: https://reactjs.org/docs/test-utils.html
    mount(
      <Router>
        <Navbar />
      </Router>
    )
  })
})
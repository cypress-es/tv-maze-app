import React from "react"
import { mount } from "@cypress/react"
import Commentitem from "./CommentItem.js"

describe('<Commentitem />', () => {
  it('renders', () => {
    // see: https://reactjs.org/docs/test-utils.html
    mount(<Commentitem />)
  })
})
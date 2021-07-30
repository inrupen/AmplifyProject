import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Navigation from "./Navigation"
// import Footer from "./Footer"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    font-size: 2em;
    font-weight: normal;
  }

  a {
    color: currentColor;
  }

  #container{
    flex: 1 0 auto;
  }
  footer {
    flex-shrink: 0;
  }
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <Wrapper>
        <div id="container">
          {children}
        </div>
        <footer>
          Footer 
        </footer>
      </Wrapper>
    )
  }
}

export default Layout
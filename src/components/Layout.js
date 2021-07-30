import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Navigation from "./Navigation"
import Footer from "./Footer"
import styled from "styled-components"

const Wrapper = styled.div`
  * {
    font-size: 1em;
    line-height: 1.65;
    height: 100%;
    color: #373F49;
    background: #eee;
    margin: 0;
  }

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
    display: flex;
    flex-direction: column;
    min-height: 100vh
  }
  main{
    display: flex;
    flex-grow: 1;
    max-width: 80%;
    margin: 0 auto;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div id="container">
        {children}
        <Footer id="footer" />
      </div>
    )
  }
}

export default Layout
/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { createPost } from './graphql/mutations'
import { listPosts } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
import Layout from "./components/Layout"
import styled from "styled-components"
import Article from "./components/Article"
import Post from "./components/Post"
import Main from './components/Main';
Amplify.configure(awsExports);

const Wrapper = styled.div`
    width: 400;
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    padding: 20;
`


const App = () => {
  return (
    <Wrapper>
      <Layout >
        <Router>
          <Main />
        </Router>  
      </Layout>
    </Wrapper>
  )
}

export default withAuthenticator(App)
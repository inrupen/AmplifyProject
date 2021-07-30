/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'
import {  BrowserRouter as Router,} from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
import Layout from "./components/Layout"
import styled from "styled-components"
import Main from './components/Main';
Amplify.configure(awsExports);

const AppWrapper = styled.div`
  height: 100%;
  width: 400;
  margin: 0; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  padding: 1rem;
  text-align: center;
`

const App = () => {
  return (
    <AppWrapper>
      <Layout >
        <Router>
          <Main />
        </Router>  
      </Layout>
    </AppWrapper>
  )
}

export default withAuthenticator(App)
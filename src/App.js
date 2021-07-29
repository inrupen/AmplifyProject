/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createPost } from './graphql/mutations'
import { listPosts } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
import Layout from "./components/Layout"
import styled from "styled-components"
import Article from "./components/Article"
Amplify.configure(awsExports);

const Wrapper = styled.div`
  * {
    width: 400;
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    padding: 20;
  }

  input, textarea {
    border: none; 
    background-color: #ddd; 
    margin: .2rem; 
    padding: 1rem; 
    font-size: 18; 
  }
  .PostName { 
    font-size: 20; 
    font-weight: bold; 
  }
  .PostDescription { 
    margin-bottom: 0;
  }
  button { 
    text-align: center;
    background: #fff;
    color: #1ECD97; 
    outline: none; 
    font-size: 18px; 
    padding: 12px 0px;
    border-radius:20px;
    border: 2px solid #69c7aa;
    margin: 1rem auto;
    padding: 1rem 4rem;
    &:hover {
    color:white;
    background: #69c7aa;
  }
  }
  .article-list {
    margin: 1rem 2rem;
    padding: 1rem 4rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 5vmin;
    background: #e7e8e8; 
    border-radius: 8px;
    box-shadow: -7px 7px 6px -6px #777;
    z-index: 200;
  }
  .overlay {
    position:absolute;
    top:50%;
    left:50%;
    width:50%;
    height:50%;
    transform:translate(-50%, -50%);
    color: white; 
    background: white; 
    opacity: .8;
    z-index: 99;
    transition: opacity .2s ease-out;
    box-shadow: -4px 7px 20px 0px #5f5f5f;
    border-radius: 8px;
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;
    p{
      color: black; 
    }
  }
  .closeButton {
    cursor: pointer;
    position: absolute;
    top: 4%;
    right: .5%;
    padding: 12px 16px;
    transform: translate(0%, -50%);
    color: black;
    border: 1px solid black;
    border-radius: 5px;
  }
  .closeButton:hover {background: #bbb;}
`

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchPosts() {
    try {
      const PostData = await API.graphql(graphqlOperation(listPosts))
      const Posts = PostData.data.listPosts.items
      setPosts(Posts)
    } catch (err) { console.log('error fetching Posts') }
  }

  async function addPost() {
    try {
      if (!formState.name || !formState.description) return
      const Post = { ...formState }
      setPosts([...Posts, Post])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createPost, {input: Post}))
      toggleOverlay()
    } catch (err) {
      console.log('error creating Post:', err)
    }
  }
  function toggleOverlay() {
    let overlayDiv = document.querySelector(".overlay");
    console.log(overlayDiv.style.opacity);
    if (overlayDiv.style.opacity === '0'){
      overlayDiv.style.opacity = 1;
      overlayDiv.style.zIndex = 299;
    }
    else{
      overlayDiv.style.opacity = 0;
      overlayDiv.style.zIndex = -1;
    }
  }

  return (
    <Router>
    <Wrapper>
      <Layout >

      <div className="overlay" style={{ opacity: 0}}>
        <span className="closeButton" onClick={toggleOverlay}>x</span>
        <p>Publish new post</p>
        <input
          onChange={event => setInput('name', event.target.value)}
          value={formState.name}
          placeholder="Name"
        />
        <textarea
          onChange={event => setInput('description', event.target.value)}
          value={formState.description}
          placeholder="Description"
          name="message" rows="10" cols="30"
        />
        <button onClick={addPost}>Create Post</button>
      </div>
      <div>
        <button onClick={toggleOverlay} >Publish</button>
      </div>

      <Router>
      <ul className="article-list">
        {
          Posts.map((Post, index) => (
            <li key={Post.id ? Post.id : index}>
              <Article Post={Post} Url={Post.name}></Article>
            </li>
          ))
        }
      </ul>
      </Router>
      
      </Layout>
    </Wrapper>
    </Router>
  )
}

export default withAuthenticator(App)
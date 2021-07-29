import React from 'react'
import {
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import Post from './Post';

export const Wrapper = styled.div`

  .previewTitle {
    font-size: 1.5em;
  }
  img{
    box-shadow: -7px 7px 6px -6px #777;
    border-radius: 5px;
  }
`

export default ({ Post,Url }) => (
  <Wrapper>
    <img src={`https://picsum.photos/300/200?`+Post.name} alt="random"></img>
    <h3 className="previewTitle">
      <Link to={Url}>{Post.name}</Link>
    </h3>
    <Route exact path={Url} component={Post} />
    <p className="PostDescription">{(Post.description).split('.'||'\n')[0]}</p>
  </Wrapper>
)

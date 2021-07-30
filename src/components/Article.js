import React from 'react'
import {
  Route,
  Link,
  Router
} from "react-router-dom";
import styled from 'styled-components'
import Post from './Post';

export const Wrapper = styled.div`
  color: #777;
  .previewTitle {
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
  }
  img{
    box-shadow: -7px 7px 6px -6px #777;
    border-radius: 5px;
  }
  .unpublishButton{
    cursor: pointer;
    text-align: center;
    float:right;
    position:relative;
    top:-100px;
    padding: .2rem;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
  }
  .unpublishButton:hover {background: #bbb;}
  .hidden{
    display:none;
  }
`

export default ({ Post,Url,ImgSrc,PageIndex,setDelete,...props }) => (
  <Wrapper>

      <img src={ImgSrc} alt="random"></img>
    <h3 className="previewTitle">
      {Post.name}
    </h3>
    <p className="PostDescription">{(Post.description).split('.'||'\n')[0]} <br />
      {/* <small>{(Post.createdAt).substring(0, 10)}</small> */}
    </p>
    <button className={setDelete ? "unpublishButton" : "hidden" } aria-label="Delete" onClick={() => props.onDelete(Post)}>X</button>
  </Wrapper>
)

import React from 'react'
import styled from 'styled-components'

const FooterLayout = styled.footer`
  .footer {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 10vh;
    max-height: 100px;
    font-size: 1.25em;
  }

  .footerItem {
    display: inline-flex;
    align-items: center;
    margin: 0 1rem;
    
  }

  .footerItem a {
    color: currentColor;
    text-decoration:none;
  }
`

export default () => (
    <FooterLayout>
      <ul className="footer">
        <li className="footerItem">
          <a href="/">Footer-Home</a>
        </li>
        <li className="footerItem">
          <a href="/">Copyright@2021</a>
        </li>
      </ul>
    </FooterLayout>
  )


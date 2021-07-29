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
  }
`

export default () => (
    <FooterLayout>
      <ul className="footer">
        <li className="footerItem">
          <a href="/">Home</a>
        </li>
        <li className="footerItem">
          <a href="/blog/">Published</a>
        </li>
      </ul>
    </FooterLayout>
  )


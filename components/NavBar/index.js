import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import * as theme from "../../style/theme";

const Nav = styled.nav`
  border: 2px solid ${theme.background.primary};
  li {
    width: 20%;
    padding: 3px;
    background: ${theme.background.white};
    color: ${theme.background.primary};
    border-right: 2px solid ${theme.background.primary};
    font-weight: 700;
    font-style: italic;
    text-align: center;
    font-size: ${theme.fontsize.md};
    cursor: pointer;
  }
  li.active {
    background: ${theme.background.primary};
    color: white;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <ul>
          <li className="active">HOME</li>
          <li>BLOG</li>
          <li>POSTCARD</li>
          <li>COMPONENTS</li>
        </ul>
      </Nav>
    );
  }
}

export default NavBar;

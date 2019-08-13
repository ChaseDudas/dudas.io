import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Menu } from 'react-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap/DropdownButton'

import './App.css';

import Home from "./components/HomePage";

 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id = "homeSection">
          <Nav justify className="justify-content-center" id='navBarTop'>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#aboutSection">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Chase Dudas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>


        <div id='aboutSection'>
          <p>
          Chase Dudas is an awesome coder.
          </p>
        </div>

        <div id='projectSection'>

        </div>

        <div id='contactSection'>

        </div>

        <div id='footerSection'>

        </div>
      </HashRouter>
    );
  }
}
 
export default App;
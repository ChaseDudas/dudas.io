import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

import Home from "./components/HomePage";

 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav justify className="justify-content-center">
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
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>


        <div>
          <h1>Welcome!</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/home" component={Home}/>
          </div>
        </div>

        <div id='aboutSection'>
          <p>
          Chase Dudas is an awesome coder.
          </p>
        </div>

      </HashRouter>
    );
  }
}
 
export default App;
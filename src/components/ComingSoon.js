import React, { Component } from "react";
import CodingGif from '../assets/Coding.gif'
import ComingSoon from 'react-coming-soon';
import './ComingSoon.css';
 
class App extends Component {
  render() {
    return (
    	<img src={CodingGif} alt="loading..."/>
 	);
  }
}
 
export default App;
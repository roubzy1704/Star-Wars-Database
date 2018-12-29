import React, { Component } from 'react';
import Button from './Button';
import 'tachyons';
import './App.css';

class App extends Component {

  render() {
    return(
	    <div className = 'body'>
	      <div className ='db tc'>
	      	<div className = 'title'>
	        	<h1> Star Wars Database </h1>
	        </div>
	        <Button />
	      </div>
	    </div>
      );
  }
}

export default App;

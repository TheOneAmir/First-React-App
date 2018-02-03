import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	var pascal = [[0,1,0],[1,0,1]];
	console.log(pascal.length);
	var rows = "";
	
	  for(var i = 0; i < pascal.length; i++){
		  rows += "<tr>\n";
		  for(var j = 0; j<pascal[i].length; j++){
			  rows += "<td>";
			  rows += pascal[i][j];
			  rows += "</td>";
		  }
		  rows += "</tr>";
	  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save this file to reload.
        </p>
		  <table>{rows}</table>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Triangle extends React.Component{
	constructor(props){
		super();
		this.state = {size:props.size};
		this.generateRows = this.generateRows.bind();
	}
	
	generateRows(){
		
	}
}

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
		  <table>
			<tr>
				<td>0</td>
				<td>1</td>
				<td>0</td>
			</tr>
			<tr>
				<td>1</td>
				<td>0</td>
				<td>1</td>
			</tr>
		  </table>
      </div>
    );
  }
}

export default App;

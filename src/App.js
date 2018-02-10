import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UserControls extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isTriangleForm: false,		
			squareForm: [[1,1,1,1,1,1,1,1,1],[1,2,3,4,5,6,7,8,9],[1,3,6,10,15,21,28,36,45],[1,4,10,20,35,56,84,120,165],[1,5,15,35,91,175,259,379,544]],
			triangleForm: [[0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,0,2,0,1,0,0],[0,1,0,3,0,3,0,1,0],[1,0,4,0,6,0,4,0,1]]
		}
		
		this.toggleForm = this.toggleForm.bind(this);
		
	}
	
	toggleForm() {
		this.setState(prevState => ({
			isTriangleForm: !prevState.isTriangleForm
		}));
	}
	
	render() {
		return(
			<div>
				<button className="Toggle-Button" onClick={this.toggleForm}>{this.state.isTriangleForm ? "Square Form" : "Triangle Form"}</button>
				<Triangle rows={this.state.isTriangleForm ? this.state.triangleForm : this.state.squareForm}/>
			</div>
		);
	}
}

class ReactButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isToggled: true
		};
		this.onBClick = this.onBClick.bind(this);
		
	}
	
	onBClick(){
		this.setState(previousState => ({
			isToggled: !previousState.isToggled
		}));
	}
	
	render(){
		return (
			<button className="Toggle-Button" onClick={this.onBClick} type="button">{this.state.isToggled ? 'Triangle Form' : 'Square Form'}</button>
		);
	}
}

class Triangle extends React.Component{
	constructor(props){
		super();
		this.generateRows = this.generateRows.bind();
	}
	
	generateRows(){
		return;
	}
	
	render(){
		//console.log(this.prop.rows);
		//var rows = [[0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,0,2,0,1,0,0],[0,1,0,3,0,3,0,1,0],[1,0,4,0,6,0,4,0,1]];
		return (
			<table className="Pascals">
				<thead>
				</thead>
				<tbody>
					{this.props.rows.map((row, i) =>
						<tr key={i}>
							{row.map((col, j) =>
								<td className="Num-value" key={j}>{col ? col : ''}</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
		);
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pascal's Triangle</h1>
        </header>
		  <UserControls />
      </div>
    );
  }
}

export default App;

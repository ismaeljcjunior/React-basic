import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "ismael"
    }
    this.chageState = this.chageState.bind(this)
    this.resetState = this.resetState.bind(this)
  }
  chageState(){
    this.setState({
      name: "Ismael Junior"
    })
  }
  resetState(){
    this.setState({
      name: "Ismael"
    })
  }
  render() {
    return (
      <div className="App">
        <div>
        {this.state.name}
        </div>
        <button onClick={this.chageState}>Mudar Estado</button>
        <button onClick={this.resetState}>Reset Estado</button>
      </div>
    );
  }
}
export default App;
import React from 'react';
import './App.css';
import Test from './components/Test';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      number: 12,
    }
  }

  handleClick = () => {
    this.setState({
      number: this.state.number+1
    })
  }

  handleClick2 = () => {
    this.setState({
      number: this.state.number-1
    })
  }

  render(){
    return (
      <div className="App">
        <p>Lecture Lifecycle</p>
        <button onClick={this.handleClick}>Click for increment</button>
        <button onClick={this.handleClick2}>Click for decr</button>
        {this.state.number==13 ? <Test args={this.state.number} /> : ''}
      </div>
    );
  }
}

export default App;

import React from 'react';
import Count from './Count.js';
import CounterButton from './CounterButton.js';



class Counter extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      count: 0
    }
  }

  increment = (e) => {
  
    let nextState = {
      count: this.state.count + 1
    }
    this.setState( nextState );
  
  }

  // decrement the counter
  decrement = (e) => {
    let count = this.state.count - 1;
    console.log(this);
    this.setState( { count });
  }

  render() {
    return (
      <div>
        <CounterButton prompt="Subtract" handleClick={this.decrement} />
        <Count currentCount={this.state.count} />
        <CounterButton prompt="Add" handleClick={this.increment} />
      </div>
    )
  }

}

export default Counter;
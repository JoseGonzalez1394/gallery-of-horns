import React from 'react';

class CounterButton extends React.Component {
  
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.prompt}</button>
    )
  }
}

export default CounterButton;
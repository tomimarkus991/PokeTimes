import React, { Component } from 'react';

class Contact extends Component {
  state = {
    number: 0,
  };
  handleAdd = () => {
    const count = this.state.number;
    this.setState({
      number: count + 1,
    });
  };
  handleDecrease = () => {
    const count = this.state.number;
    this.setState({
      number: count - 1,
    });
  };
  render() {
    return (
      <div className="container">
        <button
          className="bg-red-600 border-black border-2 text-white p-4"
          onClick={this.handleAdd}>
          Add
        </button>
        <button
          className="bg-red-600 border-black border-2 text-white p-4"
          onClick={this.handleDecrease}>
          Substract
        </button>
        <h1>{this.state.number}</h1>
      </div>
    );
  }
}

export default Contact;

import React from 'react';
import './App.css';
import KeyPad from "./components/KeyPad";
import Screen from "./components/Screen";


class Calculator extends React.Component {

  constructor() {
    super();
    this.state = {
      result: 0
    };
  }

  static handleClick(e) {
    console.log(e.target);
  }


  render() {
    return <div className="calculator">
            <Screen result={this.state.result} />
            <KeyPad onClick={this.handleClick} />
           </div>;
  };
}



export default Calculator;

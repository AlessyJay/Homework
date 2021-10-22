import React from "react";
import "./App.css";
import { Component, componentDidMount, componentDidUpdate } from "react";
import { Count } from "./components/CountText";

const style = {
  fontSize: "3rem",
  marginLeft: "10%",
  marginTop: "10%",
};

// function App() {
// return (
//   <div style={style}>
//     <h1>Counter App</h1>
//     <h2>0</h2>
//     <button>+</button>
//     <button>-</button>
//     <button>Reset</button>
//   </div>
// );

// }

// class A {
//   // property
//   name = `John`;
//   age = 20;
//   birthYear = 2000;

//   // method
//   say() {
//     alert(`Hello my name is ${this.name}, I am ${this.calAge} years old.`);
//   }

//   calAge() {
//     return 2021 - this.birthYear;
//   }
// }

// const objA = new A();

// objA.say();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      error: ``,
    };

    // เราสามารถใช้ Asynchronus ได้เฉพาะใน coponentDidMount เท่านั้น เช่น clg
    // componentDidMount() {
    //   console.log(`App: ${Component}`)
    // }

    // componentDidUpdate(){
    // console.log(`App: componentDidUpdate`)
    // }
  }

  handleClickPlus = () => {
    // if (this.state.count < 30) {
    //   this.setState({ count: this.state.count + 1 });
    // } else {
    //   this.state.count = 30;
    // }

    this.state.count < 30
      ? this.setState({ count: this.state.count + 1 }) // ถ้ามี state เดียวใช้อันนี้
      : // this.setState(current => {count: current.count + 1}) // ถ้ามีหลาย state ใช้อันนี้ดีกว่า
        this.setState({ count: 30 });
  };

  handleClickMinus = () => {
    // if (this.state.count !== 0) {
    //   this.setState({ count: this.state.count - 1 });
    // } else {
    //   this.state.count = 0;
    // }

    this.state.count !== 0
      ? this.setState({ count: this.state.count - 1 })
      : this.setState({ count: 0 });
  };

  handleClickReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={style}>
        <h1>Counter App</h1>
        <Count count={this.state.count} />
        {/* <h2>{this.state.count}</h2> */}
        <button onClick={this.handleClickPlus}>+</button>
        <button onClick={this.handleClickMinus}>-</button>
        <button onClick={this.handleClickReset}>Reset</button>
      </div>
    );
  }
}

export default App;

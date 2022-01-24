import React from "react";

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };
  }

  btn = () => {
    this.setState({ isToggleOn: false });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(`Your input is: ${e.target.value}`);
    }
  };

  clickMe = () => {
    alert("I was clicked!");
  };

  render() {
    let clicked = "ON";
    if (this.state.isToggleOn === false) {
      clicked = "OFF";
    }

    return (
      <div>
        Hello from Events
        <button onClick={this.clickMe}>Click me for Event!</button>
        <input onKeyPress={this.handleKeyPress}></input>
        <button onClick={this.btn}>{clicked}</button>
      </div>
    );
  }
}

export default Events;

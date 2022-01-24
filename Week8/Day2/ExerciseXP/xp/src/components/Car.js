import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Blue",
    };
  }
  render() {
    return (
      <header>
        this car is {this.state.color} {this.props.mod}
        <Garage size="small" />
      </header>
    ); // Displays Blue Mustang
  }
}

export default Car;

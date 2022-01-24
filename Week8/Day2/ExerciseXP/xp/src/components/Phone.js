import React from "react";

class Phone extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div>
        <h1> My phone is a {this.state.brand}</h1>
        <p>
          it is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Click to change color!</button>
      </div>
    );
  }
}

export default Phone;

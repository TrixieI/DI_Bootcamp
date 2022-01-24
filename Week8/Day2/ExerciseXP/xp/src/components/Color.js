import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  btn = () => {
    this.setState({ favoriteColor: "blue" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>My Faivorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.btn}>Change color!</button>
      </div>
    );
  }
}

export default Color;

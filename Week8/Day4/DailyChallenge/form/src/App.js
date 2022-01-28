import React from "react";
import CountryList from "./CountryList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  handleChange = (e) => {
    let list = CountryList;
    this.setState({
      suggestions: list.filter((i) =>
        i.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  handleClick = (e) => {
    let name = e.target.id;
    this.setState({ suggestions: [] });
    let inp = document.getElementById("pew");
    inp.value = name;
  };

  render() {
    return (
      <div className="App-header">
        <h1>Auto complete</h1>
        <input
          id="pew"
          onChange={this.handleChange}
          name="text"
          type="text"
        ></input>
        {this.state.suggestions.map((item, i) => {
          return (
            <ul
              id={item}
              onClick={this.handleClick}
              style={{ cursor: "pointer" }}
              key={i}
            >
              {item}
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;

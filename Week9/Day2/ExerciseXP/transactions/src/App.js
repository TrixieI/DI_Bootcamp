import React from "react";
import TransactionList from "./components/TransactionList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <TransactionList />
      </div>
    );
  }
}

export default App;

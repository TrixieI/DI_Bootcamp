import React from "react";
import Day from "./Day";

//import the store from store/index.js file
import { store } from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Day weekday={store.getState().weekday} />
      </div>
    );
  }
}

export default App;

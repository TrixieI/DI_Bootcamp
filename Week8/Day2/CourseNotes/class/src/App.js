import React from "react";
// import logo from './logo.svg';
import "./App.css";
import CardsList from "./components/CardsList";

const App = () => {
  return <CardsList />;
};

export default App;
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       counter:0,
//       counter2:10,
//     }
//   }
//   componentDidMount(){
//
//   }
//
//   addOne = () => {
//     const {counter} = this.state
//     this.setState({counter:counter+1,counter2:this.state.counter2-1})
//   }
//
//   minusOne = () => {
//     this.setState({counter:this.state.counter-1})
//   }
//
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <button onClick={this.addOne}> Add One </button>
//           <button onClick={this.minusOne}> Minus One </button>
//           {this.state.counter}
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

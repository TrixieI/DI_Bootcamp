import React from "react";
import "./App.css";

// I realize there has to be a much better way to do this
// But for now i'm just glad it actually works
// maybe one day ill come back to this and do it better

/*
      ,'``.._   ,'``.
     :,--._:)\,:,._,.:       All Glory to
     :`--,''   :`...';\      the HYPNO TOAD!
      `,'       `---'  `.
      /                 :
     /                   \
   ,'                     :\.___,-.
  `...,---'``````-..._    |:       \
    (                 )   ;:    )   \  _,-.
     `.              (   //          `'    \
      :               `.//  )      )     , ;
    ,-|`.            _,'/       )    ) ,' ,'
   (  :`.`-..____..=:.-':     .     _,' ,'
    `,'\ ``--....-)='    `._,  \  ,') _ '``._
 _.-/ _ `.       (_)      /     )' ; / \ \`-.'
`--(   `-:`.     `' ___..'  _,-'   |/   `.)
    `-. `.`.``-----``--,  .'
      |/`.\`'        ,','); 
          `         (/  (/
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  click0 = () => {
    let array = [...this.state.languages];
    let votes = array[0];
    console.log(array);
    this.setState({ votes: (votes.votes += 1) });
    console.log(votes.votes);
  };
  click1 = () => {
    let array = [...this.state.languages];
    let votes = array[1];
    this.setState({ votes: (votes.votes += 1) });
  };
  click2 = () => {
    let array = [...this.state.languages];
    let votes = array[2];
    this.setState({ votes: (votes.votes += 1) });
  };
  click3 = () => {
    let array = [...this.state.languages];
    let votes = array[3];
    this.setState({ votes: (votes.votes += 1) });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.click0}>
          {this.state.languages[0].votes}
          Number of votes for:
          {this.state.languages[0].name}
        </button>
        <button onClick={this.click1}>
          {this.state.languages[1].votes}
          Number of votes for:
          {this.state.languages[1].name}
        </button>
        <button onClick={this.click2}>
          {this.state.languages[2].votes}
          Number of votes for:
          {this.state.languages[2].name}
        </button>
        <button onClick={this.click3}>
          {this.state.languages[3].votes}
          Number of votes for:
          {this.state.languages[3].name}
        </button>
      </div>
    );
  }
}

export default App;

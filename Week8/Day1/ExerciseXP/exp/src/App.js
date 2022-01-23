import "./App.css";
import React from "react";
import UserFavoriteColors from "./UserFavoriteColors";
import Exercise4 from "./Exercise4";

function App() {
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    first_name: "Bob",
    last_name: "Dylan",
    fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div>
      {myElement}
      <div>React is {sum} times better with JSX</div>
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>

      <UserFavoriteColors anim={user.fav_animals} />
      <Exercise4 />
    </div>
  );
}

export default App;

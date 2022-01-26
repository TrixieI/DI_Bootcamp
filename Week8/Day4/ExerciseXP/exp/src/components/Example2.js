import React, { Component } from "react";
import exp2 from "../exp2.json";

export default class Example2 extends Component {
  render() {
    const data = exp2;
    let newArray = data.Skills[0];
    let anotherArray = data.Skills[1];
    return (
      <div>
        <h1>{newArray.Area}</h1>
        {newArray.SkillSet.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.Name}</p>
            </div>
          );
        })}

        <br></br>
        <h1>{anotherArray.Area}</h1>
        {anotherArray.SkillSet.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.Name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

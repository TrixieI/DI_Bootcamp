import React, { Component } from "react";
import exp2 from "../exp2.json";

export default class Example3 extends Component {
  render() {
    const data = exp2;
    let arrayOne = data.Experiences[0];
    let arrayTwo = data.Experiences[1];
    console.log(arrayOne);
    console.log(arrayTwo);
    return (
      <div>
        <img src={arrayOne.logo} alt="logo"></img>
        <br></br>
        <a href={arrayOne.url}>{arrayOne.companyName}</a>
        <br></br>
        <p>
          <b>{arrayOne.roles[0].title}</b>
        </p>
        <p>
          {arrayOne.roles[0].startDate}
          {arrayOne.roles[0].location}
        </p>
        <p>{arrayTwo.roles[0].description}</p>
        <br></br>
        <img src={arrayTwo.logo} alt="logo"></img>
        <br></br>
        <a href={arrayTwo.url}>{arrayTwo.companyName}</a>
        <br></br>
        <p>
          <b>{arrayTwo.roles[0].title}</b>
        </p>
        <p>
          {arrayTwo.roles[0].startDate}
          {arrayTwo.roles[0].location}
        </p>
        <p>{arrayTwo.roles[0].description}</p>
      </div>
    );
  }
}

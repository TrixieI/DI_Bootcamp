import React, { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      txt: "",
      txt2: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ arr: data });
      });
  }

  search = () => {
    this.setState({ txt2: this.state.txt });
  };

  searchItem = (e) => {
    // console.log(e.target.value);
    this.setState({ txt: e.target.value });
  };
  render() {
    const { arr, txt2 } = this.state;
    const filterArr = arr.filter((item) => {
      return item.name.toLowerCase().includes(txt2.toLowerCase());
    });
    return (
      <>
        <SearchBox searchItem={this.searchItem} search={this.search} />
        {filterArr.map((item, i) => {
          return <Card user={item} />;
        })}
      </>
    );
  }
}
export default CardsList;

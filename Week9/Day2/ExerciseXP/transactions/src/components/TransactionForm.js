import React from "react";
import { connect } from "react-redux";
import { insert } from "../actions";

class TransactionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      accountNumber: "",
      FSC: "",
      name: "",
      amount: null,
      fullForm: "",
      list: [],
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const arr = this.state.list;
    const submit = {
      accountNumber: this.state.accountNumber,
      FSC: this.state.FSC,
      name: this.state.name,
      amount: this.state.amount,
    };
    arr.push(submit);
    this.props.insert(this.state.list); // We send the list containing our array of objects to the reducer
  };

  render() {
    return (
      <div>
        <h1>Form</h1>
        Account Number:
        <input
          name="accountNumber"
          onChange={this.handleInputChange}
          placeholder="Account Number"
          type="text"
        ></input>
        <br></br>
        FSC:
        <input
          name="FSC"
          onChange={this.handleInputChange}
          placeholder="FSC"
          type="text"
        ></input>
        <br></br>
        Name:
        <input
          name="name"
          onChange={this.handleInputChange}
          placeholder="name"
          type="text"
        ></input>
        <br></br>
        Amount:
        <input
          name="amount"
          onChange={this.handleInputChange}
          placeholder="amount"
          type="text"
        ></input>
        <br></br>
        <button onClick={this.handleSubmit}>Submit</button>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insert: (data) => dispatch(insert(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);

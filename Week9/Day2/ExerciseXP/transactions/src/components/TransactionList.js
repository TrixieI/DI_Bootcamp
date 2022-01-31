import React from "react";
import TransactionForm from "./TransactionForm";
import { connect } from "react-redux";
import { del } from "../actions";

class TransactionList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <TransactionForm />
          <h1>Transaction List</h1>
        </div>
        {this.props.list.map((item, i) => {
          console.log(item);
          console.log(this.props.list);
          return (
            <div key={i}>
              <ul>
                <li>Account Name: {item.accountNumber}</li>
                <li>FSC: {item.FSC}</li>
                <li>Name :{item.name}</li>
                <li>Amount: {item.amount}</li>
                <button>X</button>
              </ul>
              <br></br>
            </div>
          );
        })}
      </>
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
    del: (index) => dispatch(del(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);

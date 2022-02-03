import React from "react";
import { connect } from "react-redux";
import { insert } from "../actions";
import { Link } from "react-router-dom";
import Posts from "./Posts";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          {this.props.posts.length >= 1 ? (
            this.props.posts.map((item, i) => {
              return (
                <div className="post" key={item.id}>
                  <Link
                    to={`/${item.id}`}
                    onClick={() => this.props.insert(item)}
                    element={<Posts />}
                  >
                    <h4>{item.title}</h4>
                  </Link>
                  {item.body}
                </div>
              );
            })
          ) : (
            <div>
              <h1>“No post to show”</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    id: state.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    insert: (data) => dispatch(insert(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions";
import { Link } from "react-router-dom";

import "../style.css";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.id.title}</h1>
        <p>{this.props.id.body}</p>
        <Link to={`/`} onClick={() => this.props.delpost()} element={<Posts />}>
          <button onClick={() => this.props.delpost()}>Delete Post</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delpost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

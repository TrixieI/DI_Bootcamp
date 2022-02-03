import React from "react";
import { connect } from "react-redux";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Posts from "./components/Posts";
// import { increase, decrease } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{ textAlign: "center" }} className="App">
        <Navbar bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="/">My Blog</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/:post_id" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

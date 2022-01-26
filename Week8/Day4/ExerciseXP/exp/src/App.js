import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%"
    />
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile page</h1>
  </div>
);

const Shop = () => {
  throw new Error("OH NO");
};

const jsonData = {
  key1: "myusername",
  email: "mymail@gmail.com",
  name: "Isaac",
  lastname: "Doe",
  age: 27,
};
(async () => {
  const data = await fetch(
    "https://webhook.site/1991c35a-8ac9-4598-bfc1-038a89b5b723"
  );
  console.log(data);
})();

const handleData = () => {
  fetch("http://localhost:3001/api/world", {
    // Enter your IP address here

    method: "POST",
    mode: "cors",
    body: JSON.stringify(jsonData),
  });
};

const App = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Exercise XP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <ErrorBoundary>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </ErrorBoundary>
    <hr></hr>
    <div>
      <PostList />
    </div>
    <hr></hr>
    <div>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>

    <div>
      <button onClick={() => handleData()}>SEND DATA</button>
    </div>
  </div>
);

export default App;

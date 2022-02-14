import Home from "./components/Home";
import LoginRegisterForm from "./components/LoginRegisterForm";
import About from "./components/About";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./auth/Auth";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/login" element={<LoginRegisterForm title={"Login"} />} />
        <Route
          path="/register"
          element={<LoginRegisterForm title={"Register"} />}
        />
        <Route
          path="/home"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />
        <Route
          path="/"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

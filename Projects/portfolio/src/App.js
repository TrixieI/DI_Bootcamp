import { Navbar } from "./components";
import { Footer, Features, What, Header } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <What />
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default App;

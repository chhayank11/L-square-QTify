import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;

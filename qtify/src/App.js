import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./components/Section/Section";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Section data={data}></Section>
    </div>
  );
}

export default App;

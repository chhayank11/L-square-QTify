import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./components/Section/Section";
import { Divider } from "@mui/material";

function App() {
  const [dataTop, setDataTop] = useState([]);
  const [dataNew, setDataNew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
        ]);
        setDataTop(res1.data);
        setDataNew(res2.data);
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
      <Section data={dataTop} heading={"Top Albums"}></Section>
      <Divider sx={{ borderColor: "#34c94b", my: 4 }}></Divider>
      <Section data={dataNew} heading={"New Albums"}></Section>
    </div>
  );
}

export default App;

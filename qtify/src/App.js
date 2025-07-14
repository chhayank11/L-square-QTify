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
  const [dataSongs, setDataSongs] = useState([]);
  const [dataTabs, setDataTabs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2, res3, res4] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
          axios.get("https://qtify-backend-labs.crio.do/songs"),
          axios.get("https://qtify-backend-labs.crio.do/genres"),
        ]);
        setDataTop(res1.data);
        setDataNew(res2.data);
        setDataSongs(res3.data);
        setDataTabs(res4.data);
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
      <Section data={dataTop} heading={"Top Albums"} type={"album"}></Section>
      <Divider sx={{ borderColor: "#34c94b", my: 4 }}></Divider>
      <Section data={dataNew} heading={"New Albums"} type={"album"}></Section>
      <Divider sx={{ borderColor: "#34c94b", my: 4 }}></Divider>
      <Section
        data={dataSongs}
        heading={"Songs"}
        type={"songs"}
        dataTabs={dataTabs.data}
      ></Section>
    </div>
  );
}

export default App;

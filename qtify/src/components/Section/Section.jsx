import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Mycard from "../Mycard/Mycard";
import Carousel from "../Carousel/Carousel";
import SectionTab from "../SectionTab/SectionTab";

function Section({ data, heading, type, dataTabs }) {
  const [isButtonCollapsed, setIsButtonCollapsed] = useState(false);
  const [filteredData, setFilteredData] = useState([...data]);
  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  function showGrid() {
    return (
      <Grid container spacing={5}>
        {filteredData.map((item) => (
          <Grid item key={item.id}>
            <Mycard card={item} type={type} />
          </Grid>
        ))}
      </Grid>
    );
  }
  function showCarousel() {
    return <Carousel data={filteredData} type={type}></Carousel>;
  }
  return (
    <Box sx={{ mx: 4 }}>
      <Box className={styles.sectionheader}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          {heading}
        </Typography>
        {type !== "songs" && (
          <Button
            sx={{ color: "#34c94b" }}
            onClick={() => setIsButtonCollapsed(!isButtonCollapsed)}
          >
            {isButtonCollapsed ? "Collapse" : "Show All"}
          </Button>
        )}
      </Box>
      {type === "songs" && (
        <SectionTab
          dataTabs={dataTabs}
          data={data}
          setFilteredData={setFilteredData}
        ></SectionTab>
      )}
      <Box>
        {type === "songs"
          ? showCarousel()
          : isButtonCollapsed
          ? showGrid()
          : showCarousel()}
      </Box>
    </Box>
  );
}

export default Section;

import { useState } from "react";
import styles from "./Section.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Mycard from "../Mycard/Mycard";
import Carousel from "../Carousel/Carousel";

function Section({ data, heading }) {
  const [isButtonCollapsed, setIsButtonCollapsed] = useState(false);

  function showGrid() {
    return (
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item key={item.id}>
            <Mycard card={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
  function showCarousel() {
    return <Carousel data={data}></Carousel>;
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
        <Button
          sx={{ color: "#34c94b" }}
          onClick={() => setIsButtonCollapsed(!isButtonCollapsed)}
        >
          {isButtonCollapsed ? "Collapse" : "Show All"}
        </Button>
      </Box>

      <Box>{isButtonCollapsed ? showGrid() : showCarousel()}</Box>
    </Box>
  );
}

export default Section;

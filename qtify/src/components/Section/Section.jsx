import { useState } from "react";
import styles from "./Section.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Mycard from "../Mycard/Mycard";

function Section({ data }) {
  const [isButtonCollapsed, setIsButtonCollapsed] = useState(true);

  function showGrid() {
    return (
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item key={item.id}>
            <Mycard card={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
  function showCarousel() {
    return <></>;
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
          Top Albums
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

import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

function TabPanel({ value, idx, children }) {
  return (
    <div hidden={idx !== value}>{value === idx && <div>{children}</div>}</div>
  );
}

export default function SectionTab({ dataTabs = [], data, setFilteredData }) {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setFilteredData(
      value === 0
        ? data
        : data.filter((item) => item.genre.key === dataTabs[value - 1].key)
    );
  }, [value, data]);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        slotProps={{
          indicator: {
            sx: {
              backgroundColor: "var(--color-primary)",
              height: 2,
            },
          },
        }}
      >
        <Tab
          label="All"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        />
        {dataTabs.map((tab) => {
          return (
            <Tab
              key={tab.key}
              label={tab.label}
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            />
          );
        })}
      </Tabs>

      <TabPanel value={value} idx={0}>
        <h1 color="white">aaaa{0}</h1>
      </TabPanel>
      {dataTabs.map((tab, idx) => {
        return (
          <TabPanel key={tab.key} value={value} idx={idx + 1}>
            <h1 color="white">aaaa{idx + 1}</h1>
          </TabPanel>
        );
      })}
    </Box>
  );
}

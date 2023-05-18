import { useState } from "react";
import "./home.css";
import Globe from "../globe/Globe";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div className="block">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="GeoPortal" />
          <Tab label="Vista 3D" />
        </Tabs>
      </Box>
      <TabPanel value={currentTab} index={0}>
        <h1>GeoPortal view</h1>
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <div className="block">
          <Globe />
        </div>
      </TabPanel>
    </div>
  );
}

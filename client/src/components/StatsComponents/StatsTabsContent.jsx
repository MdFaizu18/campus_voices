/* eslint-disable react/prop-types */

import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { WholeBox } from "../../assets/wrappers/StatsPageWrapper";
import normalFeeds from "../../assets/images/normalFeeds.svg";
import personalFeeds from "../../assets/images/personalFeeds.svg";
import totalFeeds from "../../assets/images/totalFeeds.svg";
import StatsBoxContent from "./StatsBoxContent";

const StatsTabContent = () => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isXsScreen ? "column" : "column",
        mt: "1.5%",
        "@media (max-width: 600px)": { ml: "5%", mt: "5%" },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        orientation={isXsScreen ? "vertical" : "horizontal"}
        centered={!isXsScreen}
      >
        <Tab label="First year" sx={{fontWeight:'600',color:'#ff6600'}}/>
        <Tab label="Second year" sx={{ fontWeight: '600', color: '#ff6600' }} />
        <Tab label="Third year" sx={{ fontWeight: '600', color: '#ff6600' }} />
        <Tab label="Fourth year" sx={{ fontWeight: '600', color: '#ff6600' }} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <WholeBox>
          <StatsBoxContent
            img={totalFeeds}
            feedText={"Total feedback"}
            count={"100"}
          />
        </WholeBox>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <WholeBox>
          <StatsBoxContent
            img={totalFeeds}
            feedText={"Total feedback"}
            count={"99"}
          />
        </WholeBox>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <WholeBox>
          <StatsBoxContent
            img={totalFeeds}
            feedText={"Total feedback"}
            count={"88"}
          />
        </WholeBox>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <WholeBox>
          <StatsBoxContent
            img={totalFeeds}
            feedText={"Total feedback"}
            count={"77"}
          />
        </WholeBox>
      </TabPanel>
    </Box>
  );
};

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default StatsTabContent;

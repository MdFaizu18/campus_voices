import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import NormalFeedback from "./NormalFeedback";
import PersonalFeedbacks from "./PersonalFeedbacks";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple - tabpanel - ${index}`}
            aria-labelledby={` simple - tab - ${ index }` }
{...other }
    >
    { value === index && (
        <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
        </Box>
    )}
    </Box >
  );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple - tab - ${ index }`,
        "aria-controls": `simple - tabpanel - ${ index }`,
};
}

export default function FeedbackForm() {
   
//    this for changing tab values 
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: "100%",
                ml: "-10px",
                "@media (max-width: 600px)": { p: "10px" },
            }}
        >
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    <Tab label="Normal Feedback" {...a11yProps(0)} />
                    <Tab label="Personal Feedback" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <NormalFeedback />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <PersonalFeedbacks />
            </CustomTabPanel>
        </Box>
    );
}
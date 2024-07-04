import { useState } from "react";
import SplineAreaChart from "./SplineAreaChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
    Box,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import { useHeadDashboardContext } from "../../pages/Admin-Head/dashboard/HeadDashboard";

const RightSide = () => {
    const { statsData } = useHeadDashboardContext();
    const { Totalfeedbacks, feedbackTotalYearCount } = statsData;
    const personal = feedbackTotalYearCount.personal;
    const normal = Totalfeedbacks - personal
    const [alignment, setAlignment] = useState("web");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateRows: " .7fr 1fr 5fr ",
                "@media (max-width:600px)": {
                    display: "grid",
                    gap: "2%",
                    gridTemplateRows: " .05fr .05fr .1fr ",
                },
            }}
        >
            <Box
                sx={{
                    marginTop: "2%",
                    display: "flex",
                    justifyContent: "space-around",
                    "@media (max-width:600px)": {
                        display: "grid",
                        placeItems: "center",
                        gap: "2%",
                        fontSize: "23px",
                    },
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "21px",
                            "@media (max-width:600px)": {
                                fontSize: "29px",
                                textAlign: "center",
                            },
                        }}
                    >
                        Reviews
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            "@media (max-width:600px)": {
                                fontSize: "20px",
                                textAlign: "center",
                            },
                        }}
                    >
                        
                        Graphical Visulatization 
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",

                        height: "40px",
                    }}
                >
                    <ToggleButtonGroup
                        color="primary"
                        sx={{
                            border: "1px solid black",
                            width: "220px",
                            display: "flex",
                        }}
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton
                            sx={{ color: "#3d4465", fontSize: "12px" }}
                            value="web"
                        >
                            Monthly
                        </ToggleButton>
                        <ToggleButton
                            sx={{ color: "#3d4465", fontSize: "12px" }}
                            value="android"
                        >
                            Weekly
                        </ToggleButton>
                        <ToggleButton
                            sx={{ color: "#3d4465", fontSize: "12px" }}
                            value="ios"
                        >
                            Today
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Typography sx={{ color: "#58508D" }} variant="h5">
                    <BarChartIcon sx={{ color: "#58508D" }} /> Normal {normal}
                </Typography>
                <Typography sx={{ color: "#BC5090" }} variant="h5">
                    <BarChartIcon sx={{ color: "#BC5090" }} /> Personal {personal}
                </Typography>
            </Box>
            <Box>
                <SplineAreaChart />
            </Box>
        </Box>
    );
};

export default RightSide;
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import PieChart from "./PieChart";
import { animateScroll as scroll } from "react-scroll";
import RightSide from "./RightSide";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import {
    Box,
    Card,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import { useHeadDashboardContext } from "../../pages/Admin-Head/dashboard/HeadDashboard";
import { Link } from "react-router-dom";

const GraphStats = () => {
    const [alignment, setAlignment] = useState("web");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleLinkClick = () => {
        scroll.scrollToTop();
    };

    const { statsData, departRatings,  } = useHeadDashboardContext();
    const { Totalfeedbacks } = statsData;


    const [prevTotalFeedbacks, setPrevTotalFeedbacks] = useState(() => {
        const prevFeedbacks = localStorage.getItem('prevTotalFeedbacks');
        return prevFeedbacks ? parseInt(prevFeedbacks) : 0;
    });
    const [currentTotalFeedbacks, setCurrentTotalFeedbacks] = useState(Totalfeedbacks);
    const [newFeedbacks, setNewFeedbacks] = useState(0);

    useEffect(() => {
        // Save current total feedbacks to localStorage when component unmounts
        localStorage.setItem('prevTotalFeedbacks', currentTotalFeedbacks);
    }, [currentTotalFeedbacks]);

    useEffect(() => {
        // Calculate new feedbacks
        const newFeedbacksCount = currentTotalFeedbacks - prevTotalFeedbacks;
        setNewFeedbacks(newFeedbacksCount > 0 ? newFeedbacksCount : 0);
    }, [currentTotalFeedbacks, prevTotalFeedbacks]);

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                gap: "4%",
                marginTop: "-2%",
                padding: "3%",
                "@media (max-width:600px)": {
                    display: "grid",
                    padding: 2,
                    margin: 0,
                    height: "1200px",
                },
            }}
        >
            {/* //*-------------Left side (pieChart) component-------------------- */}
            <Card
                sx={{
                    flex: "1",
                    "@media (max-width:600px)": {
                        display: "grid",
                        gap: "2%",
                        fontSize: "19px",
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
                                },
                            }}
                        >
                            Feedbacks Summary
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "13px",
                                textAlign: "center",
                                "@media (max-width:600px)": {
                                    fontSize: "19px",
                                },
                            }}
                        >
                            Analysis of the Current Reviews
                        </Typography>
                    </Box>
                </Box>
                {/* //*----------------Green banner (left side)-------------- */}
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#C1F2B0",
                            height: "60px",
                            margin: "3%",
                            borderRadius: "10px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                padding: "20px",
                                gap: "6%",
                                margin: "0%",
                                borderRadius: "10px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    flex: ".1",
                                    background: "#2bc155",
                                    padding: "7% 5% 7% 7%",
                                    display: "flex",
                                    alignItems: "center",
                                    height: "40px",
                                    borderRadius: "10px",
                                    color: "white",
                                }}
                            >
                                {newFeedbacks}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    flex: "1",
                                    width: "250px",
                                    display: "flex",
                                    alignItems: "center",
                                    height: "40px",
                                    fontSize: "19px",
                                }}
                            >
                                New Feedbacks
                                {newFeedbacks>0 &&

                                <FiberManualRecord
                                    // fontSize="small"
                                    sx={{
                                        color: "green",
                                        fontSize: "16px",
                                        marginLeft: "4%",
                                    }}
                                />
                                }
                            </Typography>
                        </Box>
                        <Typography
                            onClick={handleLinkClick}
                            component={Link}
                            to="/dashboard-head/student-feedbacks"
                            variant="h6"
                            sx={{
                                marginRight: "2%",
                                color: "green",
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                height: "40px",
                                cursor: "pointer"
                            }}
                        >
                            View Feeds <ChevronRightIcon sx={{ fontSize: "23px" }} />
                        </Typography>
                    </Box>
                </Box>
                {/* //*-------------review Summary component-------------------- */}
                <Box
                    sx={{
                        marginRight: "2%",
                        fontSize: "16px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <OrderSummary />
                </Box>
                {/* //*-------------Pie Chart component-------------------- */}
                <Box sx={{ marginTop: "5%" }}>
                    <Box>
                        <PieChart />
                    </Box>
                </Box>
            </Card>
            {/* //*-------------RightSide (splineChart) component-------------------- */}
            <Card sx={{ height: "500px", flex: "1" }}>
                <RightSide />
            </Card>
        </Box>
    );
};

export default GraphStats;
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import * as React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Box, Rating, Typography, useMediaQuery } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import StaffDetailsModal from "./StaffDetailsModal";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { ContentBox } from "../../../assets/wrappers/AdminReviewStaffWrapper";
import customFetch from "../../../utils/CustomFetch";

const labels = {
    0.5: "Poor",
    1: "Poor",
    1.5: "Ok",
    2: "Ok",
    2.5: "Average",
    3: "Average",
    3.5: "Good",
    4: "Good",
    4.5: "Excellent",
    5: "Excellent",
};

export const loader = async () => {
    try {
        const { data } = await customFetch.get("/dashboard-admin/staff");
        console.log(data);
        return data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect("/");
    }
};

const RatingBox = ({ stafName, stafPosition, rating, details }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    let result = stafName.charAt(0).toUpperCase();
    const value = rating;
    console.log(details.staffCode);
    const modalData = details.ratings;
    const handleCancel = () => {
        // Implement cancel functionality here
        console.log("Modal canceled");
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <ContentBox
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                transition: "transform 0.3s ease-in-out",
            }}
        >
            <Box
                sx={{
                    m: "3%",
                    "@media (max-width: 600px)": { p: 0 },
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: deepOrange[400],
                        height: "30px",
                        width: "30px",
                        "@media (max-width: 600px)": { width: "35px", height: "35px" },
                    }}
                >
                    {result}
                </Avatar>
            </Box>
            <Box
                sx={{
                    flex: 1.3,
                    "@media (max-width: 600px)": {
                        display: "flex",
                        flexDirection: "column",
                    },
                }}
            >
                <Typography
                    variant={isSmallScreen ? "p" : "h6"}
                    sx={{
                        color: "#051A1A",
                        "@media (max-width: 600px)": { mb: "3px", flexDirection: "row" },
                    }}
                >
                    {stafName}
                </Typography>
                <Typography
                    variant={isSmallScreen ? "p" : "p"}
                    sx={{ color: "#86909C", width: "100px", pt: "5%" }}
                >
                    {stafPosition}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    "@media (max-width: 600px)": {
                        width: "220px",
                    },
                }}
            >
                <Box
                    sx={{
                        width: 280,
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        "@media (max-width: 600px)": {
                            flexDirection: "column ",
                            width: 100,
                        },
                    }}
                >
                    <Rating
                        sx={{ flex: 0.6 }}
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                            <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                        }
                    />
                    <Box
                        sx={{
                            flex: 0.4,
                            ml: 2,
                            fontSize: "20px",
                            "@media (max-width: 600px)": { fontSize: "17px" },
                        }}
                    >
                        {labels[value]}
                    </Box>
                </Box>
                <StaffDetailsModal
                    modalData={modalData}
                    details={details}
                    onCancel={handleCancel} // Make sure onCancel is defined and passed correctly
                />
            </Box>
        </ContentBox>
    );
};

export default RatingBox;
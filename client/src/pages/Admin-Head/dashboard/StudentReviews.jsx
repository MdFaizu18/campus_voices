/* eslint-disable no-dupe-keys */
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import img1 from "../../../assets/images/userprofile/star05.jpg";
import { OrangeButtons } from "../../../assets/wrappers/HeadDashboardWrapper";
import { BorderStyle } from "../../../pages/Admin-Head/dashboard/StatsPage";

const StudentReviews = () => {
    const handleLinkClick = () => {
        scroll.scrollToTop();
    };
    return (
        <Box
            sx={{
                padding: "5%",
                height: "400px",
                textAlign: "center",
                borderRadius: "20px",
                display: "grid",
                gridTemplateRows: "2fr 1fr 1fr",
                boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                fontSize: "35px",
                "@media (max-width: 600px)": {
                    marginTop: "10%",
                },
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    marginLeft: "0px",
                    marginBottom: "4px",
                    fontWeight: "600",
                    fontSize: "20px",
                    display: "grid",
                }}
            >
                STUDENT REVIEW
                <BorderStyle width={40} />
            </Typography>
            <Box sx={{}}>
                <img
                    src={img1}
                    height="170px"
                    style={{ flex: 0, padding: "2%", margin: "12px" }}
                />
            </Box>

            <Typography
                sx={{
                    fontSize: "15px",
                    color: "black",
                    "@media (max-width: 600px)": {
                        fontSize: "13px",
                    },
                }}
            >
              Visit the feedbacks here given by our department students to resolve their queries.
            </Typography>
            <Link
                to="/dashboard-head/student-feedbacks"
                style={{ textDecoration: "none" }}
            >
                <OrangeButtons onClick={handleLinkClick} sx={{ padding: "9px 20px", borderRadius: "5px" }}>
                    student review
                </OrangeButtons>
            </Link>
        </Box>
    );
};

export default StudentReviews;
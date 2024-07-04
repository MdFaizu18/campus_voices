/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Typography } from "@mui/material";
// import { OrangeButton } from "../../../assets/Wrapper/ReviewStaffsLayout";
import { GoVerified } from "react-icons/go";
import { TextContentBox } from "../../assets/wrappers/StudentDahsboardWrapper";
import { useHeadDashboardContext } from "../../pages/Admin-Head/dashboard/HeadDashboard";
// import { TextContentBox } from "../../assets/wrappers/HeadDashboardWrapper";

const DashboardLayer1 = () => {
    const { departRatings } = useHeadDashboardContext();
    console.log(departRatings)
    const { totalRating, totalRatingsCount } = departRatings;
    const AvgRating = parseFloat((totalRating / totalRatingsCount).toFixed(1));

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateRows: ".6fr  .6fr 1fr",
                "@media (max-width: 600px)": {
                    gridTemplateRows: ".7fr  .5fr 3fr",
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: "550",
                    letterSpacing: "1px",
                    color: "#213343",
                    "@media (max-width: 600px)": {
                        fontSize: "35px",
                        letterSpacing: "0px",
                    },
                }}
            >
                Keep on Progressing to achieve and Explore..
            </Typography>

            <Box
                sx={{
                    height: "70px",
                    borderTop: "2px solid black",
                    borderBottom: "2px solid black",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box sx={{ display: "flex", flex: 1, gap: "1%" }}>
                    <Avatar sx={{ background: "#777" }} />
                    <Typography
                        sx={{
                            flex: 1,
                            fontSize: "18px",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            color: "#10065b",
                            "@media (max-width: 600px)": {
                                flex: 2,
                                fontSize: "15px",
                            },
                        }}
                    >
                        Head of Department
                        <GoVerified
                            style={{
                                marginLeft: "10px",
                                fontSize: "20px",
                                fontWeight: "600",
                                color: "navy",
                            }}
                        />{" "}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        color: "#213343",
                        "@media (max-width: 600px)": {
                            fontSize: "15px",
                            fontWeight: "none",
                        },
                    }}
                >
                    Department status : {AvgRating} / 5
                </Typography>
            </Box>
            <TextContentBox>
                <Box sx={{ flex: 1.5 }}>
                    <Box
                        sx={{
                            margin: "-4% 0 2% 1%",
                            padding:"3% 0%",
                            "@media (max-width: 600px)": {
                                margin: "2% 0 0% 0%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                color: "rgb(255, 102, 0)",
                                textShadow: "1px 1px 0px black",
                                fontSize: "45px",
                                "@media (max-width: 600px)": {
                                    fontSize: "35px",
                                    margin: "-2% 0 5% 5%",
                                },
                            }}
                        >
                           Department Chatter Box
                        </Box>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: " 'Poppins', sans-serif",
                            "@media (max-width: 600px)": {
                                fontSize: "18px",
                                margin: "-2% 0 5% 5%",
                            },
                        }}
                    >
                        "Engage with your students community by evaluating valuable feedback
                        to improve your campus experience."
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1.5,
                        marginTop:"2%",
                        "@media (max-width: 600px)": {
                            marginTop: "-40px",
                        },
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: " 'Poppins', sans-serif", textAlign: "justify" }}
                    >
                        Students are encouraged to share their feedback on various aspects
                        of campus life, including academics, facilities, sports and
                        extracurricular activities. By voicing their experiences and
                        suggestions, students play a vital role in improving the overall
                        college community and able to interact with the authoritites for
                        further queries.
                    </Typography>
                </Box>
            </TextContentBox>
        </Box>
    );
};

export default DashboardLayer1;
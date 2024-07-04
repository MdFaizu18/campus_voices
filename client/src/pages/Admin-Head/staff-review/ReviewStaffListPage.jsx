/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import gold from "../../../assets/images/gold.png";
import silver from "../../../assets/images/silver.png";
import bronze from "../../../assets/images/bronze.png";
import appresal from "../../../assets/images/appresal.png";
import avatar from "../../../assets/images/avatar.jpg";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { Box, Avatar, Breadcrumbs, Link, Typography } from "@mui/material";
import {
    CardBox,
    CardWrapper,
    FullCardBox,
    HeadBox,
    MainWrapperBox,
    RattingCount,
    TextFieldBox,
    TopBox,
} from "../../../assets/wrappers/AdminReviewStaffWrapper";
import RatingBox from "./RatingBox"; // Importing the RatingBox component
import { toast } from "react-toastify";
import { Form, redirect, useLoaderData, useSubmit } from "react-router-dom";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import overall from "../../../assets/images/overall.png";
import customFetch from "../../../utils/CustomFetch";


export const loader = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    try {
        const departRating = await customFetch.get('/depart-ratings');
        const staffLists = await customFetch.get('/dashboard-head/staff');
        const { data } = await customFetch.get("/dashboard-student/ratings", {
            params,
        });
        return { data, departRating, staffLists };
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect("/");
    }
};

const getColorByIndex = (index) => {
    switch (index) {
        case 0:
            return ["#FFF", "#FFC94A"]; // Gold for 1st position
        case 1:
            return ["#FFF", "silver"]; // Silver for 2nd position
        case 2:
            return ["#FFF", "#944E63"]; // Bronze for 3rd position
        default:
            return ["#ffF", "#FFF"]; // Light green for others
    }
};

// Function to get the medal image based on index
const getMedalImage = (index) => {
    switch (index) {
        case 0:
            return gold;
        case 1:
            return silver;
        case 2:
            return bronze;
        default:
            return appresal;
    }
};

export const BorderStyle = ({ width }) => {
    return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: `${width}px`,
          borderBottom: "2px solid #000050",
        }}
      ></Box>
      <Box
        sx={{
          width: `${width}px`,
          borderBottom: "2px solid orange",
        }}
      ></Box >
    </Box >
  );
};

const ReviewStaffListPage = () => {
    const { data, departRating, staffLists } = useLoaderData();
    console.log(data)
    console.log(departRating.data)
    console.log(staffLists.data)
    const {TotalNoStaffs}= staffLists.data;
    const { totalRating, totalRatingsCount } = departRating.data;
    const AvgRating = parseFloat((totalRating / totalRatingsCount).toFixed(1));
    const staffList = data.rating;
    const Topstaffs = data.topFive;
    console.log(Topstaffs)
    const overallAverage = data.departmentOverallAverage;
    const totalReviews = data.totalReviews;
    const submit = useSubmit();
    const [hoveredBoxes, setHoveredBoxes] = React.useState(
        Array(Topstaffs.length).fill(false)
    );

    const handleMouseEnter = (index) => {
        setHoveredBoxes((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    const handleMouseLeave = (index) => {
        setHoveredBoxes((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
        });
    };

    return (
        <Box
            sx={{
                m: "1%",
                padding: "0% 7%",
                "@media (max-width: 600px)": {
                    width: "100%",
                    padding: "0%",
                    margin: "0%",
                },
            }}
        >
            <HeadBox sx={{}}>
                <Box
                    flex={1}
                    sx={{ marginLeft: "1.5%", display: "flex", justifyContent: "start" }}
                >
                    {/* <Form>
                        <TextFieldBox
                            sx={{ width: "250px" }}
                            defaultValue=""
                            label="Search"
                            name="search"
                            onChange={(e) => {
                                submit(e.currentTarget.form);
                            }}
                        />
                    </Form> */}
                </Box>
                <Box
                    sx={{
                        textAlign: "center",
                        fontWeight: "600",
                        marginBottom:"2%",
                        color: "#000060",
                        fontSize: "23px",
                    }}
                >
                    STAFF ANALYTICS
                    <BorderStyle width={40} />
                </Box>
                <Box flex={0.96} sx={{ display: "flex", justifyContent: "end" }}>
                    <Breadcrumbs underlined="hover">
                        <Link underline="hover" color="inherit" href="/dashboard-head">
                            Home
                        </Link>
                        <Link
                            color="text.primary"
                            arial-current="page"
                            href="/dashboard-head/staff-reviews"
                        >
                            Staff Review
                        </Link>
                    </Breadcrumbs>
                </Box>
            </HeadBox>
            <MainWrapperBox>
                <FullCardBox>
                    <CardBox>
                        <CardWrapper sx={{ background: "#ff771e" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "40px",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        placeItems: "center",
                                    }}
                                >
                                    <RattingCount>{TotalNoStaffs}</RattingCount>
                                    <Typography
                                        sx={{ fontSize: "16px", fontWeight: "550", color: "white" }}
                                    >
                                        Total staff
                                    </Typography>
                                </Box>
                                <RecentActorsIcon
                                    style={{ width: "50px", height: "50px", color: "white" }}
                                />
                            </Box>
                        </CardWrapper>
                        <CardWrapper sx={{ background: "#0d9276" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "20px",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "120px",
                                        display: "grid",
                                        placeItems: "center",
                                    }}
                                >
                                    <RattingCount>{totalReviews}</RattingCount>
                                    <Typography
                                        sx={{ fontSize: "16px", fontWeight: "550", color: "white" }}
                                    >
                                        Total Review
                                    </Typography>
                                </Box>
                                <AutoGraphIcon
                                    style={{ width: "50px", height: "50px", color: "white" }}
                                />
                            </Box>
                        </CardWrapper>
                        <CardWrapper sx={{ background: "#387adf" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "40px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        placeItems: "center",
                                    }}
                                >
                                    <RattingCount>{AvgRating}</RattingCount>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            color: "white",
                                        }}
                                    >
                                        Overall
                                    </Typography>
                                </Box>
                                <img
                                    src={overall}
                                    style={{ width: "50px", height: "50px", color: "white" }}
                                />
                            </Box>
                        </CardWrapper>
                    </CardBox>
                    <Box
                        sx={{
                            display: "grid",
                            placeItems: "center",
                            boxShadow:
                                "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                            width: "750px",
                            borderRadius: "7px",
                            pt: "1.5%",
                            paddingBottom: "5%",
                            "@media (max-width: 600px)": {
                                width: "90%",
                                marginTop: "25%",
                                marginLeft: "5%",
                                paddingBottom: "5%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                fontWeight: "600",
                                color: "#000060",
                                fontSize: "23px",
                            }}
                            variant="h5"
                        >
                            STAFF RATINGS
                            <BorderStyle width={30} />
                        </Box>
                        {staffList.map((stat) => {
                            return (
                                <RatingBox
                                    key={stat._id}
                                    stafName={stat.name}
                                    rating={Number(stat.overallAverage)}
                                    stafPosition={"CSE"}
                                    details={stat}
                                />
                            );
                        })}
                    </Box>
                </FullCardBox>

                <TopBox sx={{}}>
                    <Box
                        sx={{
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#000060",
                            width: "100%",
                            paddingTop: "5%",
                            mt: "5%",
                            height: "20px",
                        }}
                    >
                        TOP RATED STAFFS
                        <BorderStyle width={24} />
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            placeItems: "center",
                            padding: "2% 7%",
                            rowGap: 2,
                        }}
                    >
                        {/* // Assuming Topsatffs is an array of staff objects */}
                        {Topstaffs.map((stat, index) => (
                            <Box
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                key={stat._id} // Assuming stat.id is unique for each staff member
                                sx={{
                                    display: "grid",
                                    width: "90%",
                                    alignItems: "center",
                                    height: "60px",
                                    cursor:"pointer",
                                    // background: getColorByIndex(index)[1],
                                    boxShadow:
                                        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
                                    // background: getColorByIndex(index)[0],
                                    border: `4px solid ${getColorByIndex(index)[1]}`,
                            borderRadius: "3px",
                        background: hoveredBoxes[index]
                        ? getColorByIndex(index)[1]
                        : "none",
                        transition:
                        "transform 0.3s ease-in-out, background 0.3s ease-in-out",
                }}
              >
                        <Box
                            sx={{
                                display: "flex",
                                gap: "10px",
                            }}
                        >
                            <Avatar
                                src={avatar}
                                style={{
                                    marginLeft: "10px",
                                    height: "40px",
                                    width: "40px",
                                }}
                                alt={stat.name}
                            />

                            <Box
                                sx={{
                                    display: "flex",
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box sx={{ flex: 0.8, fontSize: "18px", color: "black" }}>
                                    {stat.name}
                                </Box>
                                <Avatar
                                    src={getMedalImage(index)}
                                    sx={{
                                        dsiaply: "flex",
                                        height: "40px",
                                        width: "30px",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
            ))}
                </Box>
            </TopBox>
        </MainWrapperBox>
    </Box >
  );
};

export default ReviewStaffListPage;
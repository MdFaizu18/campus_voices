/* eslint-disable no-unused-vars */
import { Box, Card, Typography } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ForumIcon from '@mui/icons-material/Forum';
import GraphStats from "./GraphStats";
import AdminStatsCard from "./AdminStatsCard";
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useHeadDashboardContext } from "../../pages/Admin-Head/dashboard/HeadDashboard";

//*-----------------Toggle buttons-----------------

const DashboardLayer2 = () => {
    const { statsData, departRatings, staffLists } = useHeadDashboardContext();
    const { totalRating, totalRatingsCount } = departRatings;
    const {Totalfeedbacks,Totalusers}=statsData;
    const {TotalNoStaffs}=staffLists
    const AvgRating = totalRating / totalRatingsCount;


    const statData = [
        {
            id: 1,
            name: "Total Staffs",
            count: TotalNoStaffs,
            icon: AssignmentIndIcon,
        },
        {
            id: 2,
            name: "Total Users",
            count: Totalusers,
            icon: GroupAddIcon,
           
        },
        {
            id: 3,
            name: "Total Feedbacks",
            count: Totalfeedbacks,
            icon: ForumIcon,
        },
        {
            id: 4,
            name: "Total Reviews",
            count: totalRatingsCount,
            icon: RateReviewIcon,
        },
    ];

    const renderStats = statData.map((stats) => (
        <AdminStatsCard
            key={stats.id}
            statCount={stats.count}
            statName={stats.name}
            statIcon={stats.icon}
        />
    ));




    return (
        <Box sx={{ display: "grid", placeItems: "center" }}>
            <Box
                sx={{
                    display: "grid",
                    placeItems: "center",
                    width: "70%",
                    rowGap: "20px",
                    marginBottom: "4%",
                    "@media (max-width:600px)": {
                        display: "grid",
                        gap: "2%",
                        fontSize: "22px",
                        // margin: 0,
                    },
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        "@media (max-width: 600px)": {
                            textAlign: "center",
                        },
                    }}
                >
                    {" "}
                    Stats Analysing !
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "center",
                        "@media (max-width: 600px)": {
                            display: "none",
                        },
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, doloribus nihil aliquid laudantium veritatis qui, quas
                    et non rerum nulla suscipit tempora blanditiis nostrum animi. Ipsa,
                    libero, voluptate corrupti. Dolor.
                </Typography>
            </Box>
            {/* //*-------GeneralStats------------------------ */}
            <Box
                sx={{
                    "@media (max-width:600px)": {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr ",
                        placeItems: "center",
                        margin: "0px 7px",
                        gap: "1%",
                    },
                }}
            >
                <Box
                    sx={{
                        marginBottom: "4%",
                        display: "flex",
                        gap: "20px",
                        justifyContent: "space-evenly",
                        "@media (max-width:600px)": {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1%",
                            margin: "0%",
                        },
                    }}
                >
                    {renderStats}
                </Box>
            </Box>
            {/* //*------------------GraphCharts------------------- */}
            <GraphStats />
        </Box>
    );
};

export default DashboardLayer2;
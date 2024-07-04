import { Box, Typography } from "@mui/material";
import { useHeadDashboardContext } from "../../pages/Admin-Head/dashboard/HeadDashboard";

const OrderSummary = () => {
    const { statsData } = useHeadDashboardContext();
    const { Totalfeedbacks, feedbackTotalYearCount } = statsData;
    const personal = feedbackTotalYearCount.personal;
    const normal = Totalfeedbacks-personal
    
    const summary = [
        {
            id: 1,
            count: normal,
            type: "Normal Feedbacks",
        },
        {
            id: 2,
            count: personal,
            type: " Personal Feedbacks",
        },
    
    ];
    
    const renderSummary = summary.map((order) => (
        <Box
            key={order.id}
            sx={{
                border: "1px solid rgba(0,0,0,0.4)",
                borderRadius: "5px",
                padding: "2% 10%",
                "@media (max-width:600px)": {},
            }}
        >
            <Typography sx={{ fontWeight: "700" }} variant="h4">
                {order.count}
            </Typography>
            <Typography sx={{ opacity: ".8" }} variant="body1">
                {order.type}
            </Typography>
        </Box>
    ));
    return <>{renderSummary}</>;
};

export default OrderSummary;
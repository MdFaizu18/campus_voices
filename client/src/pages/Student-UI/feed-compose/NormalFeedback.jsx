import SendIcon from "@mui/icons-material/Send";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import FeedbackImage from "../../../assets/images/FeedbackImage2.jpg";
import { useStudentOutletContext } from "../../DashboardStudent";
import { Form } from "react-router-dom";
import customFetch from "../../../utils/CustomFetch";
import { toast } from "react-toastify";

const NormalFeedback = () => {
    const { userData } = useStudentOutletContext();
    const userId = userData._id
    const userName = userData?.name;
    const userDep = userData?.department;
    const normal = "normal"

    const [year, setYear] = useState('');
    const [message, setMessage] = useState('');

    // For General Feedback component (FeedbackForm)
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const today = new Date().toISOString().split('T')[0]; // Get today's date in format 'YYYY-MM-DD'
            const feedbackCountKey = `feedbackCount_${userId}`; // Use userId for general feedback
            const lastSubmissionDateKey = `lastSubmissionDate_${userId}`;

            let feedbackCountToday = parseInt(localStorage.getItem(feedbackCountKey)) || 0;
            const lastSubmissionDate = localStorage.getItem(lastSubmissionDateKey);

            // If last submission date is not today, reset feedback count
            if (lastSubmissionDate !== today) {
                feedbackCountToday = 0;
                localStorage.setItem(lastSubmissionDateKey, today);
            }

            if (feedbackCountToday >= 2) {
                toast.error("You have reached the daily submission limit for feedback.");
                return;
            }

            // Proceed with feedback submission
            const formData = new FormData();
            formData.append("name", userName);
            formData.append("department", userDep);
            formData.append("year", year);
            formData.append("messageType", normal);
            formData.append("message", message);
            const data = Object.fromEntries(formData);

            // Perform the submission using customFetch directly
            await customFetch.post('/dashboard-student/feedbacks', data);
            toast.success("General feedback submitted successfully");

            // Update local storage to reflect the new feedback submission
            localStorage.setItem(feedbackCountKey, feedbackCountToday + 1);

            // Clear the form fields after successful submission
            setYear('');
            setMessage('');
        } catch (error) {
            toast.error(error?.response?.data?.msg || "Failed to submit general feedback");
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    mb: "-30px",
                    mt: "-10px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                }}
            >
                <Box
                    sx={{ width: "60%", "@media (max-width: 600px)": { width: "100%" } }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "Bold", p: "2% 5% 0 5%" }}>
                        Normal Feedback
                    </Typography>
                    <Form onSubmit={handleSubmit}>
                    <Box 
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                            p: "5%",
                            "@media (max-width: 600px)": {
                                p: "3% 0",
                                gap: "20px",
                                mt: "15px",
                            },
                        }}
                    >
                        <TextField
                            id="outlined-disabled"
                            label="Name"
                            name="name"
                            value={userName}
                            readOnly
                        />
                        <Box
                            sx={{
                                display: "flex",
                                gap: "20px",
                            }}
                        >
                            <TextField
                                id="outlined-disabled"
                                label="Department"
                                name="department"
                                value={userDep}
                                readOnly
                                sx={{ flex: 2 }}
                            />
                            <TextField
                                select
                                variant="outlined"
                                label="Year"
                                name="year"
                                sx={{ flex: 2 }}
                                value={year}
                                onChange={(event) => setYear(event.target.value)}
                            >
                                {["I", "II", "III", "IV"].map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <TextField 
                        rows={3} multiline label="Message"
                         name="message"
                        placeholder="Type Your Message Here..."
                        value={message}
                        onChange={(event) => setMessage(event.target.value)} />
                        <Button
                            variant="contained"
                            type="submit"
                            endIcon={<SendIcon />}
                            sx={{ mt: "10px", background: "#ff6500" }}
                        >
                            Send
                        </Button>
                    </Box>
                    </Form>
                </Box>
                <Box sx={{ ml: "6%" }}>
                    <Box sx={{ display: { sm: "block", xs: "none" } }}>
                        <img
                            src={FeedbackImage}
                            style={{ height: "300px", width: "100%", marginTop: "30px" }}
                        />
                    </Box>
                    <Box sx={{ width: "330px", "@media (max-width: 600px)": { ml: "-5%" }, }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                "@media (max-width: 600px)": { mt: "10px", mb: "10px" },
                            }}
                        >
                            Note:
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                            porro nisi ab reiciendis sequi reprehenderit culpa iusto eum
                            earum? Soluta ex magni fugiat .
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default NormalFeedback;
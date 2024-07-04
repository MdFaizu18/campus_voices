import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, Typography } from "@mui/material";
import FeedbackImage from "../../../assets/images/FeedbackImage1.jpg";
import { useStudentOutletContext } from "../../DashboardStudent";
import customFetch from "../../../utils/CustomFetch";
import { toast } from "react-toastify";
import { useState } from "react";
import { Form } from "react-router-dom";

const PersonalFeedbacks = () => {
    const { userData } = useStudentOutletContext();
    const userId = userData?._id;
    const userName = userData?.name;
    const userDep = userData?.department;

    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            // Retrieve user-specific feedback count and last submission date from local storage
            const today = new Date().toISOString().split('T')[0]; // Get today's date in format 'YYYY-MM-DD'
            const feedbackCountKey = `personalFeedbackCount_${userId}`;
            const lastSubmissionDateKey = `personalLastSubmissionDate_${userId}`;

            let feedbackPersonalCountToday = parseInt(localStorage.getItem(feedbackCountKey)) || 0;
            const lastPersonalSubmissionDate = localStorage.getItem(lastSubmissionDateKey);

            // If last submission date is not today, reset feedback count
            if (lastPersonalSubmissionDate !== today) {
                feedbackPersonalCountToday = 0;
                localStorage.setItem(lastSubmissionDateKey, today);
            }

            if (feedbackPersonalCountToday >= 2) {
                toast.error("You have reached the daily submission limit for personal feedback.");
                return;
            }

            // Proceed with feedback submission
            const formData = new FormData();
            formData.append("name", userName);
            formData.append("department", userDep);
            formData.append("year", 'I'); // Assuming 'I' as default year
            formData.append("messageType", 'personal');
            formData.append("message", message);
            const data = Object.fromEntries(formData);

            // Perform the submission using customFetch directly
            await customFetch.post('/dashboard-student/feedbacks', data); // Changed this line
            toast.success("Personal feedback submitted successfully");

            // Update local storage to reflect the new feedback submission
            localStorage.setItem(feedbackCountKey, feedbackPersonalCountToday + 1);

            // Clear the form field after successful submission
            setMessage('');
        } catch (error) {
            toast.error(error?.response?.data?.msg || "Failed to submit personal feedback");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    mb: "-30px",
                    ml: "6%",
                    "@media (max-width: 600px)": { flexDirection: "column", ml: "0%" },
                }}
            >
                <Box sx={{ display: { sm: "block", xs: "none" } }}>
                    <img
                        src={FeedbackImage}
                        style={{ height: "400px", width: "100%", marginTop: "-35px" }}
                    />
                </Box>
                <Box
                    sx={{ width: "60%", "@media (max-width: 600px)": { width: "100%" } }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "Bold", p: "2% 5% 0 5%" }}
                        >
                            Personal Feedback
                        </Typography>
                    </Box>
                    <Box sx={{ p: "2% 5% 0 5%" }}>
                        <Typography sx={{ color: "gray", fontWeight: "600" }}>
                            Note: This is personal box, here messages were only seen by Head
                            of Department (HOD) where it doesn't show any user details, so without
                            hesitation you could give feedback about anything here...
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            p: "5%",
                        }}
                    >
                        <TextField value={userName} name='name' style={{ display: 'none' }} />
                        <TextField value={userDep} name='department' style={{ display: 'none' }} />
                        <TextField value='I' name='year' style={{ display: 'none' }} />
                        <TextField value='personal' name='messageType' style={{ display: 'none' }} />
                        <TextField
                            rows={3}
                            multiline
                            name="message"
                            label="Message"
                            value={message}
                            placeholder="Type Your Message Here..."
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={{ mt: "10px", background: "#ff6500" }}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Form>
    );
};

export default PersonalFeedbacks;

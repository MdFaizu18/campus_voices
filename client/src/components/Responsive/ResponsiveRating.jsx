/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import Box from "@mui/material/Box";
import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
    Modal,
    Typography,
} from "@mui/material";

import { toast } from "react-toastify";
import {
    DescTypography,
    MainBoxWrapper,
    SubmitButton,
    WantTypography,
} from "../../assets/wrappers/AdminResAddStaffWrapper";
import AddCommentIcon from "@mui/icons-material/AddComment";
import customFetch from "../../utils/CustomFetch";

export const action = async ({ formData }) => {
    try {
        const checkedRatings = formData.ratings.filter((rating) => rating.checked);
        await customFetch.post("/dashboard-student/ratings", {
            ...formData,
            ratings: checkedRatings,
        });
        toast.success("Staff ratings added successfully");
    } catch (error) {
        toast.error(error?.response?.data?.msg || "Insertion failed");
        return error;
    }
};

const ResponsiveRating = () => {
    const [formData, setFormData] = useState({
        name: "",
        staffCode: "",
        ratings: [
            { quotient: "Teaching", checked: false },
            { quotient: "Collaborative", checked: false },
            { quotient: "Syllabus Completion", checked: false },
            { quotient: "Communication", checked: false },
            { quotient: "Out of Knowledge", checked: false },
        ],
        newQuotient: "", // For adding new quotient
    });

    const [open, setOpen] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (index) => {
        const newRatings = [...formData.ratings];
        newRatings[index].checked = !newRatings[index].checked;
        setFormData({ ...formData, ratings: newRatings });
    };

    const handleNewQuotientChange = (event) => {
        setFormData({ ...formData, newQuotient: event.target.value });
    };

    const addQuotient = () => {
        const { newQuotient } = formData;
        if (newQuotient.trim() === "") {
            toast.error("Please enter a new quotient");
            return;
        }
        const newRating = { quotient: newQuotient, checked: false };
        setFormData({
            ...formData,
            ratings: [...formData.ratings, newRating],
            newQuotient: "", // Reset newQuotient input
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.name.trim() === "" || formData.staffCode.trim() === "") {
            toast.error("Please enter name and staff code");
            return;
        }
        try {
            await action({ formData });
            setOpen(false); // Close modal after successful submission
        } catch (error) {
            console.error("Error:", error);
            toast.error(
                error?.response?.data?.msg || "An error occurred. Please try again."
            );
        }
    };

    return (
        <Box sx={{ marginTop: "5%", borderTop: "1px dashed black" }}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
                <MainBoxWrapper>
                    <WantTypography>MAKE SURE ABOUT YOUR STAFF !</WantTypography>
                    <DescTypography>
                        If you recently hired an STAFF employee, then we&lsquo;d like to
                        hear about the staff for managing their records. Please fill out the
                        form below to store the staff history.
                    </DescTypography>
                    <Button
                        sx={{ color: "white", background: "#000b3f", padding: "12px" }}
                        onClick={() => setOpen(true)}
                    >
                        Compliment
                    </Button>
                </MainBoxWrapper>
            </Box>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        width: 380,
                        maxHeight: 870,
                        bgcolor: "background.paper",
                        p: 4,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "20px",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Typography
                            variant="h4"
                            sx={{ textAlign: "center", color: "#000b3f", fontWeight: "600" }}
                        >
                            COMPLIMENT REQUEST
                        </Typography>
                        <Box sx={{ display: "grid", rowGap: "10px", marginTop: "10%  " }}>
                            <TextField
                                id="name"
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <TextField
                                id="staffCode"
                                label="Staff Code"
                                name="staffCode"
                                variant="outlined"
                                value={formData.staffCode}
                                onChange={handleInputChange}
                            />
                            {formData.ratings.map((rating, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={rating.checked}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    }
                                    label={rating.quotient}
                                />
                            ))}
                            <Box sx={{ display: "flex", gap: "20px" }}>
                                <TextField
                                    id="newQuotient"
                                    label="New Quotient"
                                    name="newQuotient"
                                    variant="outlined"
                                    value={formData.newQuotient}
                                    onChange={handleNewQuotientChange}
                                />
                                <Button
                                    style={{
                                        fontSize: "34px",
                                        height: "50px",
                                        width: "50px",
                                        fontWeight: "900",
                                        color: "white",
                                        background: "#000b1f",
                                        borderRadius: "50px",
                                    }}
                                    onClick={addQuotient}
                                >
                                    <AddCommentIcon />
                                </Button>
                            </Box>
                            <SubmitButton type="submit">Submit</SubmitButton>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default ResponsiveRating;
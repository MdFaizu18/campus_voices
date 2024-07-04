/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Rating, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import customFetch from "../../utils/CustomFetch";

export const loader = async () => {
    try {
        const { data } = await customFetch.get("/dashboard-student/ratings");
        const allFeedbacks = data.rating;
        const mappedData = allFeedbacks.map((feedback) => {
            const { _id, name, department, ratings } = feedback;
            const quotientValues = ratings.map((rating) => ({
                quotient: rating.quotient,
                star: "",
            }));
            return { _id, name, department, ratings: quotientValues };
        });
        return mappedData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return redirect("/");
    }
};

export const action = async ({ formData, id }) => {
    try {
        await customFetch.patch(`/dashboard-student/ratings / ${ id }`, formData);
        toast.success("Feedback sended Successfully");
    } catch (error) {
        toast.error(error?.response?.data?.msg || "Insertion failed");
        return error;
    }
};

const StudentRatingsPage = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loadedData = await loader();
                if (loadedData.length > 0) {
                    setFormData(loadedData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (event, staffId, ratingIndex) => {
        const { value } = event.target;
        const updatedFormData = formData.map((staff) => {
            if (staff._id === staffId) {
                return {
                    ...staff,
                    ratings: staff.ratings.map((rating, index) => {
                        if (index === ratingIndex) {
                            return {
                                ...rating,
                                star: value,
                            };
                        }
                        return rating;
                    }),
                };
            }
            return staff;
        });
        setFormData(updatedFormData);
    };

    const handleSubmit = async (event, id) => {
        event.preventDefault();
        const staffData = formData.find((staff) => staff._id === id);
        try {
            await action({ formData: staffData, id });
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <Box sx={{ padding: "4%", marginTop: "2%", display: "flex" }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{
                    flex: 1,
                    display: "flex",
                    placeItems: "center",
                    padding: "3%",
                    gap: 6,
                }}
            >
                {formData.map((staff) => (
                    <Box
                        key={staff._id}
                        sx={{
                            padding: "2%",
                            display: "flex",
                            flexDirection: "column",

                            gap: 2,
                            border: "2px dashed black",
                        }}
                    >
                        <Grid item xs={7} sx={{ display: "flex" }}>
                            <Typography variant="h6" sx={{ flex: 1 }}>
                                {staff.name}
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: "center" }}>
                                {staff.department}
                            </Typography>
                        </Grid>
                        {staff.ratings.map((rating, index) => (
                            <Box key={index} sx={{ display: "flex" }}>
                                <Grid item xs={7}>
                                    <Typography variant="body1">{rating.quotient}</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Rating
                                        sx={{ width: "200px", borderRadius: "50px" }}
                                        id={`star - ${staff._id}-${index}`}
                                    label="Star"
                                    name={`star - ${staff._id}-${index}`}
                                    variant="outlined"
                                    value={rating.star}
                                    onChange={(e) => handleInputChange(e, staff._id, index)}
                  />
                                </Grid>
                            </Box>
                        ))}
                        <Button
                            sx={{ width: "100px" }}
                            onClick={(e) => handleSubmit(e, staff._id)}
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default StudentRatingsPage;
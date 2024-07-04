/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import profileImg from '../../../assets/images/profile.png';
import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import { redirect } from "react-router-dom";
import customFetch from "../../../utils/CustomFetch";
import BannerImg from '../../../assets/images/FeedbackBanner1.jpg';
import LogoAndNavabar from "../../../components/LogoAndNavabar";
import ProfileAvatar from "../user-profile/ProfileAvatar";
import { FeedCountBox, FeedCountBox2 } from "../../../assets/wrappers/StuffPageWrapper";
import BannerContent from "./BannerContent";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/dashboard-student/ratings");

    const allFeedbacks = data.rating;
    const mappedData = allFeedbacks.map((feedback) => {
      const { _id, name, department, ratings } = feedback;
      const quotientValues = ratings.map((rating) => ({
        quotient: rating.quotient,
        star: 0,
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
    console.log(formData);
    await customFetch.patch(`/dashboard-student/ratings/${id}`, formData);
    toast.success("Rating Submitted Successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Insertion failed");
    return error;
  }
};

const StaffOutlet = () => {
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

  const handleInputChange = (value, staffId, ratingIndex) => {
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

  const canSubmitRating = (staffId) => {
    const submissionDate = localStorage.getItem(`ratingSubmission-${staffId}`);
    if (submissionDate) {
      const currentDate = new Date();
      const lastSubmissionDate = new Date(submissionDate);
      const diffTime = Math.abs(currentDate - lastSubmissionDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 30;
    }
    return true;
  };

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    if (!canSubmitRating(id)) {
      toast.error("You can only submit a rating for each staff once every 30 days.");
      return;
    }
    const staffData = formData.find((staff) => staff._id === id);
    try {
      await action({ formData: staffData, id });
      localStorage.setItem(`ratingSubmission-${id}`, new Date().toISOString());
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <LogoAndNavabar />
      <Box sx={{
        display: "flex", padding: "2%", "@media (max-width: 1100px)": {
          flexDirection: "column"
        },
      }}>
        <Box sx={{ flex: "1" }}>
          <BannerContent formData={formData} />
        </Box>
        <Box sx={{ flex: '3' }}>
          <Box sx={{
            display: 'flex', justifyContent: 'flex-end', margin: '0% 5% 2% 0', "@media (max-width: 1100px)": {
              margin: "0 5% 5% 0"
            },
          }}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="/dashboard-student">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/dashboard-student/ratings"
                aria-current="page"
              >
                Staff Ratings
              </Link>
            </Breadcrumbs>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img src={BannerImg} alt="banner" height={200} width='97%' />
          </Box>
          <Box sx={{ padding: "0%", marginTop: "2%", display: "flex" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{
                flex: 1,
                display: "flex",
                placeItems: "center",
                padding: "3%",
                gap: 5,
                "@media (max-width: 600px)": {
                  padding: "2% 3% 0% 8%"
                },
              }}
            >
              {formData.map((staff) => (
                <Box
                  key={staff._id}
                  sx={{
                    width: "500px",
                    padding: "2%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    "@media (max-width: 600px)": {
                      width: "400px",
                      padding: "2%",
                    },
                  }}
                >
                  <Grid item xs={7} sx={{ display: "flex", paddingLeft: "3%" }}>
                    <Box>
                      <img src={profileImg} height={30} width={30} />
                    </Box>
                    <Typography variant="h6" sx={{ flex: 1, marginLeft: "8px", fontWeight: '600', color: "" }}>
                      {staff.name}
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      {/* CSE */}
                    </Typography>
                  </Grid>
                  {staff.ratings.map((rating, index) => (
                    <Box key={index} sx={{ display: "flex", padding: "0 0 0 5%" }}>
                      <Grid item xs={7}>
                        <Typography variant="body1">{rating.quotient}</Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Rating
                          sx={{ borderRadius: "50px", fontSize: '30px', paddingRight: "-10px" }}
                          id={`star - ${staff._id}-${index}`}
                          label="Star"
                          name={`star - ${staff._id}-${index}`}
                          variant="outlined"
                          value={rating.star}
                          precision={0.5}
                          onChange={(event, value) =>
                            handleInputChange(value, staff._id, index)
                          }
                        />
                      </Grid>
                    </Box>
                  ))}
                  <Button
                    sx={{ width: "100px", background: "#ff6500" }}
                    disabled={!canSubmitRating(staff._id)}
                    onClick={(e) => handleSubmit(e, staff._id)}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StaffOutlet;
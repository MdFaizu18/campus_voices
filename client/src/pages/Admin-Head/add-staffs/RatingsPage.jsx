/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import { toast } from "react-toastify";
import {
  DescTypography,
  MainBoxWrapper,
  RattingGridWrapper,
  SubmitButton,
  WantTypography,
} from "../../../assets/wrappers/AdminAddStaffWrapper";
import AddCommentIcon from "@mui/icons-material/AddComment";
import customFetch from "../../../utils/CustomFetch";


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

const RatingsPage = () => {
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
    newQuotient: "", 
  });

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
      newQuotient: "", 
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
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error?.response?.data?.msg || "An error occurred. Please try again."
      );
    }
  };

  return (
    <Box sx={{ marginTop: "5%" }}>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <MainBoxWrapper>
          <WantTypography>MAKE SURE ABOUT YOUR STAFF !</WantTypography>
          <DescTypography>
            If you recently hired an STAFF employee, then we&lsquo;d like to
            hear about the staff for managing their records. we strive to
            continually improve our services to exceed expectations. Please fill
            out the form below to store the staff history.
          </DescTypography>
        </MainBoxWrapper>
      </Box>
      <Box sx={{padding: "4% 12%"}}>
        <RattingGridWrapper>
          <Typography
            sx={{
              fontSize: "29px",
              textShadow: "4px 4px 2px #ccc",
              fontWeight: "600",
              color: "#000b1a",
              paddingTop: "1%",
            }}
          >
            COMPLIMENT REQUEST
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "2%" }}>
            <Box
              sx={{
                padding: "2%",
                height: "300px",
                width: "330px",
                background: "#fff",
                boxShadow: " rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
              }}
            ></Box>
            <Box
              sx={{
                width: "700px",
                display: "grid",
                placeItems: "start",
                rowGap: "10%",
                marginLeft: "10%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10%",
                }}
              >
                <TextField
                  sx={{ width: "250px" }}
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  sx={{ width: "250px" }}
                  id="staffCode"
                  label="Staff Code"
                  name="staffCode"
                  variant="outlined"
                  value={formData.staffCode}
                  onChange={handleInputChange}
                />
              </Box>

              <Box>
                {formData.ratings.map((rating, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={rating.checked}
                        onChange={() => handleCheckboxChange(index)}
                        sx={{ color: "#ff3400", fontSize: "16px" }}
                      />
                    }
                    label={rating.quotient}
                  />
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
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
                    fontSize: "44px",
                    height: "60px",
                    width: "60px",
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
        </RattingGridWrapper>
      </Box>
      <Box sx={{ height: "200px"}}></Box>
    </Box>
  );
};

export default RatingsPage;
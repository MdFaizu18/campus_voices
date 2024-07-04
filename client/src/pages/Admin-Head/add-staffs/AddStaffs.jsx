/* eslint-disable react-refresh/only-export-components */
import Box from "@mui/material/Box";
import { Grid, MenuItem, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { Form, redirect } from "react-router-dom";
import RatingsPage from "./RatingsPage";
import {
  DescTypography,
  GridWrapper,
  MainBoxWrapper,
  SmallTextFieldBox,
  SubmitButton,
  TextFieldBox,
  WantTypography,
} from "../../../assets/wrappers/AdminAddStaffWrapper";
import ResponsiveAddStaff from "../../../components/Responsive/ResponsiveAddStaff";
import { useState } from "react";
import customFetch from "../../../utils/CustomFetch";

export const action = async ({ request }) => {
  console.log(request);
  try {
    const formData = await request.formData();
    // Convert formData to a regular JavaScript object
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    // Perform registration with the converted data
    await customFetch.post("/dashboard-head/staff", data);
    toast.success("Staffs added Successful");
    return redirect("/dashboard-head");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Insertion failed");
    return error;
  }
};

export default function AddStaffs() {
  const [position, setPositon] = useState("");
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <MainBoxWrapper>
            <WantTypography variant="h4">
              WANT TO ADD YOUR STAFF ?
            </WantTypography>
            <DescTypography>
              If you recently hired an STAFF employee, then we&lsquo;d like to
              hear about the staff for managing their records. we strive to
              continually improve our services to exceed expectations. Please
              fill out the form below to store the staff history.
            </DescTypography>
          </MainBoxWrapper>
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            marginTop: "2%",
          }}
        >
          <Form method="POST">
            <GridWrapper>
              <Typography
                sx={{
                  fontSize: "29px",
                  textShadow: "4px 4px 2px #ccc",
                  fontWeight: "600",
                  color: "#000b1a",
                }}
              >
                EMPLOYEE INFORMATION
              </Typography>
              <Grid
                container
                columnSpacing={2}
                sx={{ justifyContent: "center" }}
              >
                <Grid container xs={4.8} columnGap={3} >
                  <Grid item xs={4.9}>
                    <Typography>First Name</Typography>
                    <SmallTextFieldBox
                      name="firstName"
                      type="text"
                      labelText="First Name"
                      placeholder="E.g., John "
                    />
                  </Grid>
                  <Grid item xs={4.9}>
                    <Typography>Last Name</Typography>
                    <SmallTextFieldBox
                      name="lastName"
                      type="text"
                      labelText="Last Name"
                      placeholder="E.g., Doe"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Typography>StaffCode</Typography>
                  <TextFieldBox
                    name="staffCode"
                    type="text"
                    labelText="StaffCode"
                    placeholder="E.g., 321001"
                  />
                </Grid>
              </Grid>

              <Grid container columnGap={10} sx={{ justifyContent: "center" }}>
                <Grid item xs={4}>
                  <Typography>Email</Typography>
                  <TextFieldBox
                    name="email"
                    type="text"
                    labelText="Email"
                    placeholder=" abc@gmail.com"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>Phone Number</Typography>
                  <TextFieldBox
                    name="phoneNumber"
                    type="text"
                    labelText="Phone Number"
                    placeholder="(000) 000-0000"
                  />
                </Grid>
              </Grid>
              <Grid container columnGap={10} sx={{ justifyContent: "center" }}>
                <Grid item xs={4}>
                  <Typography>Department</Typography>
                  <TextFieldBox
                    name="department"
                    type="text"
                    labelText="Department "
                    placeholder="E.g., CSE"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>Department Code</Typography>
                  <TextFieldBox
                    name="departmentCode"
                    type="text"
                    labelText="Department Code"
                    placeholder="E.g., 320100"
                  />
                </Grid>
              </Grid>
              <Grid container columnGap={10} sx={{ justifyContent: "center" }}>
                <Grid item xs={4}>
                  <Typography>Experience</Typography>
                  <TextFieldBox
                    name="experience"
                    type="text"
                    labelText="Experience "
                    placeholder="E.g., 01"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>Job Position</Typography>
                  <TextFieldBox
                    sx={{ width: "320px" }}
                    select
                    name="jobPosition"
                    // label="Assistant Proffessor"
                    value={position || ""}
                    onChange={(event) => setPositon(event.target.value)}
                  >
                    {[
                      "HOD",
                      "AssistantHod",
                      "AssistantProfessor",
                      "LabAssistant",
                    ].map((position) => (
                      <MenuItem key={position} value={position}>
                        {position}
                      </MenuItem>
                    ))}
                  </TextFieldBox>
                </Grid>
              </Grid>

              <SubmitButton type="submit">Submit</SubmitButton>
            </GridWrapper>
          </Form>
        </Box>
        <RatingsPage />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ResponsiveAddStaff />
      </Box>
    </>
  );
}
import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { Breadcrumbs, Grid, Link, MenuItem, Typography } from "@mui/material";
import { Form} from "react-router-dom";
import {
    GridWrapper,
    MainBoxWrapper,
    SmallTextFieldBox,
    SubmitButton,
    TextFieldBox,
    WantTypography,
} from "../../../assets/wrappers/AdminAddStaffWrapper";
import ResponsiveAddStaff from "../../../components/Responsive/ResponsiveAddStaff.jsx";
import customFetch from "../../../utils/CustomFetch.js";
import { toast } from 'react-toastify';
import { redirect, useLoaderData } from 'react-router-dom';


export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/dashboard-head/staff/${params.id}`);
       console.log(data);
        return data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return redirect('/dashboard-head/staffs-list');
    }
};

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.patch(`/dashboard-head/staff/${params.id}`, data);
        toast.success('Staff edited successfully');
        return redirect('/dashboard-head/staffs-list');
    } catch (error) {
        toast.error(error.response.data.msg || "Please fill all details");
        return error;
    }
};



const EditStaff = () => {
    const [position, setPositon] = useState("");
    const { staff } = useLoaderData();
    console.log(staff)
  return (
    <>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin:'2% 5% 0% 5%' }}>
                      <Breadcrumbs>
                          <Link underline="hover" color="inherit" href="/dashboard-head">
                              Home
                          </Link>
                          <Link underline="hover" color="inherit" href="/dashboard-head/staffs-list">
                              staff Lists
                          </Link>
                          <Box
                              underline="hover"
                              color="text.primary"
                              href="/dashboard-head/staffs-list"
                              aria-current="page"
                          >
                             Edit Staff
                          </Box>
                      </Breadcrumbs>
                  </Box>
              <Box sx={{ display: "grid", placeItems: "center" }}>
                  <MainBoxWrapper>
                      <WantTypography variant="h4">
                          WANT TO EDIT YOUR STAFF ?
                      </WantTypography>
        
                  </MainBoxWrapper>
              </Box>
              <Box
                  sx={{
                      display: "grid",
                      placeItems: "center",
                      marginTop: "2%",
                      marginBottom: "5%",
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
                              STAFFS INFORMATION
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
                                          defaultValue={staff.firstName}
                                      />
                                  </Grid>
                                  <Grid item xs={4.9}>
                                      <Typography>Last Name</Typography>
                                      <SmallTextFieldBox
                                          name="lastName"
                                          type="text"
                                          labelText="Last Name"
                                          placeholder="E.g., Doe"
                                          defaultValue={staff.lastName}
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
                                      value={staff.staffCode}
                                      readOnly
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
                                      defaultValue={staff.email}
                                  />
                              </Grid>
                              <Grid item xs={4}>
                                  <Typography>Phone Number</Typography>
                                  <TextFieldBox
                                      name="phoneNumber"
                                      type="text"
                                      labelText="Phone Number"
                                      placeholder="(000) 000-0000"
                                      defaultValue={staff.phoneNumber}
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
                                      value={staff.department}
                                      readOnly
                                  />
                              </Grid>
                              <Grid item xs={4}>
                                  <Typography>Department Code</Typography>
                                  <TextFieldBox
                                      name="departmentCode"
                                      type="text"
                                      labelText="Department Code"
                                      placeholder="E.g., 320100"
                                      defaultValue={staff.departmentCode}
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
                                      defaultValue={staff.experience}
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
                                      defaultValue={staff.jobPosition}
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
             
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
              <ResponsiveAddStaff />
          </Box>
      </>
  )
}

export default EditStaff
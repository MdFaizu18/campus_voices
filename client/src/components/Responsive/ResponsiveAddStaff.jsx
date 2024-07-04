/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import {
    DescTypography,
    GridWrapper,
    MainBoxWrapper,
    WantTypography,
    SubmitButton,
} from "../../assets/wrappers/AdminResAddStaffWrapper";
import FormRowSelect from "../FormRowSelect";
import { JOB_POSTION } from "../../../../utils/constant.js";
import { Form, redirect } from "react-router-dom";
import FormInput from "../FormInput.jsx";
import { toast } from "react-toastify";
import ResponsiveRatting from "./ResponsiveRating.jsx";
import customFetch from "../../utils/CustomFetch";


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
        await customFetch.post("/dashboard-admin/staff", data);
        toast.success("Staffs added Successful");
        return redirect("/dashboard-head");
    } catch (error) {
        toast.error(error?.response?.data?.msg || "Insertion failed");
        return error;
    }
};

const ResponsiveAddStaff = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        console.log("Form data:", data);

        // Perform any additional processing or validation here

        try {
            // Submit form data to the server
            await customFetch.post("/dashboard-admin/staff", data);
            toast.success("Staff added successfully");
            handleClose(); // Close the modal after form submission
        } catch (error) {
            toast.error(error?.response?.data?.msg || "Insertion failed");
            // Handle error appropriately
        }
    };

    return (
        <div>
            <Box sx={{ display: "grid", placeItems: "center", padding: "5%" }}>
                <MainBoxWrapper>
                    <WantTypography>WANT TO ADD YOUR STAFF?</WantTypography>
                    <DescTypography>
                        If you recently hired a staff member, then we&lsquo;d like to hear
                        about them for managing their records. Please fill out the form
                        below to store the staff history.
                    </DescTypography>
                    <Button
                        sx={{ color: "white", background: "#000b3f", padding: "12px" }}
                        onClick={handleOpen}
                    >
                        {" "}
                        Add Staff{" "}
                    </Button>
                </MainBoxWrapper>
                <Dialog sx={{ borderRadius: "20px" }} open={open} onClose={handleClose}>
                    <DialogTitle sx={{ color: "#000b1f", fontSize: "30px" }}>
                        Employee Information
                    </DialogTitle>
                    <DialogContent>
                        <Form method="POST" onSubmit={handleSubmit}>
                            <GridWrapper>
                                <Box
                                    sx={{
                                        display: "grid",
                                        marginTop: "5%",
                                        placeItems: "start",
                                        rowGap: "3%",
                                    }}
                                >
                                    <FormInput
                                        name="firstName"
                                        type="text"
                                        labelText="First Name"
                                        placeholder="E.g., John"
                                    />
                                    <FormInput
                                        name="lastName"
                                        type="text"
                                        labelText="Last Name"
                                        placeholder="E.g., Doe"
                                    />
                                    <FormInput
                                        name="staffCode"
                                        type="text"
                                        labelText="Staff Code"
                                        placeholder="E.g., 321001"
                                    />
                                    <FormInput
                                        name="email"
                                        type="text"
                                        labelText=" Staff Email"
                                        placeholder="E.g., abc@gmail.com"
                                    />
                                    <FormInput
                                        name="phoneNumber"
                                        type="text"
                                        labelText="Phone Number"
                                        placeholder="(000) 000-0000"
                                    />
                                    <FormInput
                                        name="department"
                                        type="text"
                                        labelText="Department"
                                        placeholder="E.g., CSE"
                                    />
                                    <FormInput
                                        name="departmentCode"
                                        type="text"
                                        labelText="Department Code"
                                        placeholder="E.g., 320100"
                                    />
                                    <FormInput
                                        name="experience"
                                        type="text"
                                        labelText="Experience"
                                        placeholder="E.g., 1"
                                    />
                                    <FormRowSelect
                                        labelText="Job Position"
                                        name="jobPosition"
                                        list={[...Object.values(JOB_POSTION)]}
                                    />
                                    <SubmitButton type="submit">Submit</SubmitButton>
                                </Box>
                            </GridWrapper>
                        </Form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                <ResponsiveRatting />
            </Box>
        </div>
    );
};

export default ResponsiveAddStaff;

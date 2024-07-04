import { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import customFetch from "../../../utils/CustomFetch";
import { toast } from "react-toastify";


const PersonalDet = (userData) => {
    const [user, setUser] = useState(userData.user);
    console.log(user)
    const [department, setDepartment] = useState(user.department || " ");
    const [gender, setGender] = useState(user.gender || " ");
    const [isSaved, setIsSaved] = useState(false);


    // Check if any field is empty
    const isAnyFieldEmpty = () => {
        return (
            user.name.trim() === "" ||
            user.DOB === "" ||
            department.trim() === "" ||
            gender=== "" ||
            user.registerNo === "" ||
            user.email.trim() === "" ||
            user.mobileNo === "" ||
            user.address === ""
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData); // Get form data directly from event target

            // Perform the submission using customFetch directly
            await customFetch.patch(`/dashboard-student/current-user/${user._id}`, data);
            toast.success("User Profile Updated Successfully");
            setIsSaved(true);
            window.location.reload();
        } catch (error) {
            toast.error(error?.response?.data?.msg || "Failed to submit details");
        }
    };

    const handleButtonClick = () => {
        if (!isSaved) {
            setIsSaved(true);
        } else {
            setIsSaved(false);
        }
    };

    return (
        <Box
            sx={{
                width: "60%",
                mt: "40px",
                height: "580px",
                bgcolor: "#F7F7FA",
                borderRadius: "10px",
                boxShadow: " rgba(17, 17, 26, 0.1) 0px 1px 0px",
                p: "3% 2% 0 3%",
                "@media (max-width: 800px)": { width: "99%", height: "530px" },
            }}
        >
        <Box sx={{display:'flex'}}> 
            <Typography variant="h5" sx={{ fontWeight: "Bold", p: "2% 2% 5% 2%" }}>
                Personal Details
            </Typography>
                {isAnyFieldEmpty() && (
                    <Typography variant="body1" sx={{ p: "2.5% 0 5% 0", color: 'red' }}>
                        ⓘ Please fill all the details
                    </Typography>
                )}
        </Box>

            <Box sx={{ ml: "5%", display: "flex" }}>
                <Box
                    sx={{
                        width: "180px",
                        color: "navy",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        "@media (max-width: 600px)": { marginTop:"1.5%",width: "130px",gap:'15px'},
                    }}
                >
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize:'18px', }, }}>
                        Name
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Date of Birth
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Department
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Gender
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Register No
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Email ID
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Mobile
                    </Typography>
                    <Typography sx={{ fontWeight: "Bold", fontSize: '20px', "@media (max-width: 600px)": { fontSize: '18px', }, }}>
                        Address
                    </Typography>
                </Box>
                <Box>
                    <Form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                color: "#00004d",
                                width: ["25vw"], 
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                ml: "10%",
                                "@media (max-width: 800px)": { width: "160px",  },
                            }} >
                            <TextField
                                variant="standard"
                                name="name"
                                value={user.name}
                                onChange={isSaved ? (event) => setUser({ ...user, name: event.target.value }) : undefined}
                            />
                            <TextField
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={user.DOB}
                                name="DOB"
                                onChange={isSaved ? (event) => setUser({ ...user, DOB: event.target.value }) : undefined}
                                variant="standard"
                            />
                            <TextField
                                select
                                name="department"
                                value={department}
                                variant="standard"
                                onChange={(event) => setDepartment(event.target.value)}
                                // disabled={!isSaved}
                            >
                                {["CSE", "ECE", "MECH", "BME", "AIML", "EEE", "IT"].map(
                                    (department) => (
                                        <MenuItem key={department} value={department || ""}>
                                            {department}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                            <TextField
                                select
                                name="gender"
                                variant="standard"
                                value={gender}
                                // disabled={!isSaved}
                                onChange={(event) => setGender(event.target.value)}
                            >
                                {["Male", "Female"].map((gender) => (
                                    <MenuItem key={gender} value={gender}>
                                        {gender}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                variant="standard"
                                name="registerNo"
                                value={user.registerNo}
                                onChange={isSaved ? (event) => setUser({ ...user, registerNo: event.target.value }) : undefined}
                            />
                            <TextField
                                variant="standard"
                                name="email"
                                value={user.email}
                                onChange={isSaved ? (event) => setUser({ ...user, email: event.target.value }) : undefined}
                            />
                            <TextField type="text" 
                            name="mobileNo" 
                            variant="standard" 
                            value={user.mobileNo}
                            onChange={isSaved ? (event) => setUser({ ...user, mobileNo: event.target.value }) : undefined}
                            />
                            <TextField rows={3} multiline
                             name="address" 
                             value={user.address}
                                onChange={isSaved ? (event) => setUser({ ...user, address: event.target.value }) : undefined}
                              />
                            {!isSaved ? (
                                <Button type="submit" variant="contained" sx={{ background: "navy", margin: "4% 0 0 83%", width: "50px", "@media (max-width: 600px)": { margin:"4% 0 0 60%"}, }} onClick={handleButtonClick}>
                                    Edit
                                </Button>
                            ) : (
                                <Button variant="contained" sx={{ background: "#FF6600", marginTop: "4%" }} onClick={handleButtonClick}>
                                    Save
                                </Button>
                            )}
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Box>
    );
};
export default PersonalDet;
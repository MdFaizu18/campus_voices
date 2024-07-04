    import Visibility from "@mui/icons-material/Visibility";
    import VisibilityOff from "@mui/icons-material/VisibilityOff";
    import {
        Box,
        Button,
        FormControl,
        IconButton,
        InputAdornment,
        InputLabel,
        OutlinedInput,
        Typography,
    } from "@mui/material";
    import { useState } from "react";
    import { toast } from "react-toastify";
    import customFetch from "../../../utils/CustomFetch";
import { hassPassword } from "../../../../../utils/passwordUtils";
import { Form } from "react-router-dom";

    const Password = (user) => {
        const userId = user.user._id
        const [passwordData, setPasswordData] = useState({
            oldPassword: "",
            newPassword: "",
            password: "",
        });

        const [showPassword, setShowPassword] = useState(false);
        const [showPassword1, setShowPassword1] = useState(false);
        const [showPassword2, setShowPassword2] = useState(false);

        const handleChange = (prop) => (event) => {
            setPasswordData({ ...passwordData, [prop]: event.target.value });
        };

        const handleClickShowPassword = (field) => () => {
            if (field === 0) setShowPassword((show) => !show);
            else if (field === 1) setShowPassword1((show) => !show);
            else if (field === 2) setShowPassword2((show) => !show);
        };

        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };
        const handleSubmit = async (event) => {
            event.preventDefault();

            try {
                // Hash the new password and confirm password
                const hashedNewPassword = await hassPassword(passwordData.newPassword);
                const hashedConfirmPassword = await hassPassword(passwordData.password);
                // Construct FormData object
                const formData = new FormData(event.target);
                // Set _id in the FormData object
                // Convert FormData to a regular JavaScript object
                const data = Object.fromEntries(formData);
                // Remove confirmPassword from the data
                data.password = hashedConfirmPassword; // Remove confirmPassword field
                // Remove oldPassword from the data
                delete data.oldPassword;
                delete data.newPassword;
                console.log(data)
                await customFetch.patch(`/dashboard-student/current-user/${userId}`, data);
                    toast.success("Password changed successfully!");
                    // Clear the input fields after successful submission
                    setPasswordData({
                        oldPassword: "",
                        newPassword: "",
                        password: "",
                    });
              
            } catch (error) {
                console.error("Error changing password:", error);
                toast.error("An error occurred while changing password");
            }
        };


        return (
            <Box
                sx={{
                    width: "35%",
                    mt: "3.5%",
                    bgcolor: "#F7F7FA",
                    borderRadius: "10px",
                    boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
                    p: "5% 1% 0 1%",
                    height: "480px",
                    "@media (max-width: 600px)": { width: "99%", height: "450px" },
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "Bold", textAlign: "center" }}>
                    Change Password
                </Typography>
                <Form onSubmit={handleSubmit}> {/* Corrected: moved onSubmit handler to the outer form */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            p: "20px",
                        }}
                    >
                        <FormControl sx={{ m: 1, width: "94%" }} variant="outlined">
                            <InputLabel htmlFor="old-password">Old Password</InputLabel>
                            <OutlinedInput
                                name="oldPassword"
                                type={showPassword ? "text" : "password"}
                                value={passwordData.oldPassword}
                                onChange={handleChange("oldPassword")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword(0)}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Old Password"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: "94%" }} variant="outlined">
                            <InputLabel htmlFor="new-password">New Password</InputLabel>
                            <OutlinedInput
                                name="newPassword"
                                type={showPassword1 ? "text" : "password"}
                                value={passwordData.newPassword}
                                onChange={handleChange("newPassword")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword(1)}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="New Password"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: "94%" }} variant="outlined">
                            <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                name="password"
                                type={showPassword2 ? "text" : "password"}
                                value={passwordData.password}
                                onChange={handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword(2)}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                            />
                        </FormControl>
                        <Button type="submit" variant="contained" sx={{ mt: "20px", background: "#FF6600" }}>
                            Save
                        </Button>
                    </Box>
                </Form> {/* Corrected: moved closing form tag here */}
            </Box>
        );
    };

    export default Password;


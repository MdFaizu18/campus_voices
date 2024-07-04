import React, { useState } from 'react';
import { Form, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Typography, TextField, Box, MenuItem } from '@mui/material';
import Logo2 from '../assets/images/logo2.png';
import { CenterBox, WrapperMainBox, WrapperTextFeild } from '../assets/wrappers/RegisterPageWrapper';
import customFetch from '../utils/CustomFetch';
import {  useSnackbar } from 'notistack'; // Importing Snackbar
import 'react-toastify/dist/ReactToastify.css'; // You can remove this line since you're not using toastify

const Register = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { enqueueSnackbar } = useSnackbar(); // Accessing snackbar methods
    const [department, setDepartment] = useState('');  

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            // Perform registration
            await customFetch.post("/auth/register", data);
            enqueueSnackbar("Registration Successful", { variant: 'success' });
            navigate("/login");
        } catch (error) {
            console.error(error);
            enqueueSnackbar(error?.response?.data?.msg || "Registration failed", { variant: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <CenterBox>
            <WrapperMainBox>
                <Container component="main" maxWidth="xs">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box>
                            <img src={Logo2} alt="logo" height={100} width={120} />
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontFamily: 'Arial, sans-serif' }}>Register</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '3%' }}>
                        <Form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <WrapperTextFeild
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        name="name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        label="Department"
                                        variant="outlined"
                                        fullWidth
                                        name="department"
                                        value={department || ''}
                                        onChange={(event) => setDepartment(event.target.value)}
                                    >
                                        {['CSE', 'ECE', 'MECH', 'BME', 'AIML', 'EEE', 'IT'].map((department) => (
                                            <MenuItem key={department} value={department}>
                                                {department}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Register No"
                                        variant="outlined"
                                        fullWidth
                                        name="registerNo"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        name="password"
                                        type="password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                sx={{ marginTop: '3%', backgroundolor: 'navy' }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Box sx={{ marginTop: '10%' }}>
                                        <RouterLink to="/login" variant="body2">
                                            Already a member? Login
                                        </RouterLink>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    </Box>
                </Container>
            </WrapperMainBox>
        </CenterBox>
    );
};


export default Register;

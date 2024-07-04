import React, { useState } from 'react';
import { Form, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Typography, TextField, Box } from '@mui/material';
import Logo2 from '../assets/images/logo2.png';
import { CenterBox, WrapperMainBox } from '../assets/wrappers/LoginPageWrapper';
import customFetch from '../utils/CustomFetch';
import { SnackbarProvider, useSnackbar } from 'notistack'; // Importing Snackbar
import 'react-toastify/dist/ReactToastify.css'; // You can remove this line since you're not using toastify

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); // Accessing snackbar methods

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const userEmail = data.email;

    try {
      // Get user details
      const userDetails = await customFetch.get(`/users/dashboard-admin/${userEmail}`);
      const userRole = userDetails.data?.user?.role;

      // Submit login data
      await customFetch.post("/auth/login", data);

      // Show snackbar for success
      enqueueSnackbar("Login Successful", { variant: 'success'});

      // Redirect based on user role
      navigate(
        userRole === "admin"
          ? "/dashboard-admin"
          : userRole === "head"
            ? "/dashboard-head"
            : "/dashboard-student"
      );
    } catch (error) {
      console.error(error);
      // Show snackbar for error
      enqueueSnackbar(error?.response?.data?.msg || "Invalid credentials", { variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CenterBox>
      <WrapperMainBox>
        <Container component="main" maxWidth="xs" >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box >
              <img src={Logo2} alt="logo" height={100} width={120} />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontFamily: 'Arial, sans-serif' }}>Login</Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: '3%' }}>
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
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
                    label="Register No"
                    variant="outlined"
                    fullWidth
                    name="registerNo"
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
                sx={{ marginTop: '3%' }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Box sx={{ marginTop: '10%' }}>
                    <RouterLink to="/register" variant="body2">
                      Don't Have Account? Register
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

export default Login;

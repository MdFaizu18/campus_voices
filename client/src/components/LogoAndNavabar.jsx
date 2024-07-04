import { Box } from '@mui/material'
import React from 'react'
import { useState, useEffect } from "react";
import headLogo from "../assets/images/logo3.png";
import NavbarMain from "./NavbarMain";
import { useNavigate } from 'react-router-dom';
import customFetch from '../utils/CustomFetch';
import { useSnackbar } from 'notistack'; // Importing Snackbar
import { useStudentOutletContext } from '../pages/DashboardStudent';

const LogoAndNavabar = () => {
  const navigate = useNavigate();
  const { userData } = useStudentOutletContext();
  const slicedName = userData?.name ? userData.name.slice(0, 10) : '';
  const { enqueueSnackbar } = useSnackbar(); // Accessing snackbar methods

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get("/auth/logout");
    enqueueSnackbar("Logout Successfully", { variant: 'success' });
    console.log('logout user');
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgStyle = {
    margin:"0 0 0 -10%",
    width: "90vw",
    height: "55px",
    display: windowWidth <= 600 ? "none" : "block",
  };

  return (
    <>
      <Box>
        <img src={headLogo} alt="headLogo" style={imgStyle} />
        <NavbarMain logoutUser={logoutUser} userName={slicedName} />
      </Box>
    </>
  )
}

export default LogoAndNavabar
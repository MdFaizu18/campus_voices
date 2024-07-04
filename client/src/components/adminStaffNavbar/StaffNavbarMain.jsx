import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Modal,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { IoMdLogOut } from "react-icons/io";
import {  BsFillCollectionFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import {
    CustomToolbar,
    MainBox,
    ResponsiveCustomToolbar,
} from "../../assets/wrappers/NavbarWrapper";


const pages = [
    {
        id: 1,
        name: "Feeds",
        icon: <BsFillCollectionFill style={{ width: 21, height: 21 }} />,
        link: "/dashboard-admin/",
    },

];

function StaffNavbarMain({ logoutUser }) {
    
    return (
        <>
            <MainBox position="static" color="success">
                <Container maxWidth="xl">
                    <CustomToolbar sx={{ display: { xs: "none", md: "flex" } }}>
                        {/* Campus voices */}
                        <Typography
                            sx={{
                                color: "rgb(255, 102, 0)",
                                fontSize: "22px",
                                padding: "0px 4px",
                                flex: 0.2,
                            }}
                        >
                            Campus <span style={{ color: "white" }}>Voices</span>
                        </Typography>

                        {/* Nav Links */}
                        <Box
                            sx={{
                                flex: 0.7,
                                display: "flex",
                                justifyContent: "center",
                                gap: "30px",
                            }}
                        >
                            {pages.map((page) => (
                                <Box
                                    key={page.id}
                                    sx={{ display: "flex", cursor: "pointer", gap: "8%" }}
                                >
                                    <Box sx={{ marginTop: "3%" }}>{page.icon}</Box>
                                    <Typography sx={{ fontSize: "19px" }}>
                                        <Link
                                            key={page.id}
                                            to={page.link}
                                            style={{
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                color: "white",
                                            }}
                                            onClick={(e) => {
                                                if (page.name === "Personal") {
                                                    e.preventDefault();
                                                    setOpenPasswordModal(true);
                                                }
                                            }}
                                        >
                                            {page.name}
                                        </Link>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* User Identity */}
                        <Box sx={{ margin: '0 25px', display: 'flex', gap: '1px' }} >

                            <PersonIcon sx={{ marginTop: '4px' }} />
                            {/* <UserProfile userName={'HOD'} /> */}
                            <Typography variant="h6">Staffs</Typography>
                        </Box>

                        {/* Logout */}
                        <Box
                            sx={{
                                flex: 0.1,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                            }}
                        >
                            <Box
                                onClick={logoutUser}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                <IoMdLogOut style={{ width: 21, height: 21 }} />
                                <Typography sx={{ fontSize: "18px", marginTop: "1%" }}>
                                    Logout
                                </Typography>
                            </Box>
                        </Box>
                    </CustomToolbar>
                    {/* Responsiveness */}
                    <ResponsiveCustomToolbar
                        sx={{ height: "100px", display: { xs: "flex", md: "none" } }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                            }}
                        >
                            <Typography
                                sx={{
                                    flex: 1,
                                    color: "rgb(255, 102, 0)",
                                    fontSize: "26px",
                                    padding: "0px 4px",
                                }}
                            >
                                Campus <span style={{ color: "white" }}>Voices</span>
                            </Typography>
                        </Box>
                    </ResponsiveCustomToolbar>
                </Container>
            </MainBox>
        
        </>
    );
}

export default StaffNavbarMain;
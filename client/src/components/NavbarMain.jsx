import { Box, Container, Typography } from "@mui/material";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BsPersonVcardFill, BsFillCollectionFill } from "react-icons/bs";
import {
    CustomToolbar,
    MainBox,
    ResponsiveCustomToolbar,
} from "../assets/wrappers/NavbarWrapper";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserProfile from "./UserProfile";
import BasicModal from "./NavbarDrawer";
import NavbarDrawer from "./NavbarDrawer";


const pages = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome style={{ width: 21, height: 21 }} />,
        link: "/dashboard-student",
    },
    {
        id: 2,
        name: "Feeds",
        icon: <BsFillCollectionFill style={{ width: 21, height: 21 }} />,
        link: "/dashboard-student/stuffs",
    },
    {
        id: 3,
        name: "About",
        icon: <BsPersonVcardFill style={{ width: 21, height: 21 }} />,
        link: "/dashboard-student/about",
    },
];

function NavbarMain({ logoutUser,userName }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <MainBox position="static" color="success">
            <Container maxWidth="xl">
                <CustomToolbar sx={{ display: { xs: "none", md: "flex" } }}>
                    {/*-------------------------------Campus voices------------------------------ */}
                    <Typography
                        sx={{
                            color: " rgb(255, 102, 0)",
                            fontSize: "22px",
                            padding: " 0px 4px",
                            flex: 0.2,
                        }}
                    >
                        Campus <span style={{ color: "white" }}>Voices</span>
                    </Typography>

                    {/*-------------------------------Nav Links------------------------------ */}
                    <Box
                        sx={{
                            flex: 0.7,
                            display: "flex",
                            justifyContent: "center",
                            gap: "30px",
                            marginLeft:'6%'
                        }}
                    >
                        {pages.map((page) => (
                            <Box
                                key={page.id}
                                sx={{ display: "flex", cursor: "pointer", gap: "8%"}}
                            >
                                <Box sx={{ marginTop: "3%" }}>{page.icon} </Box>
                                <Typography sx={{ fontSize: "19px" }}>
                                    <Link
                                        key={page.id}
                                        to={page.link}
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        {page.name}
                                    </Link>
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/*--------------------------------User Identity------------------------------- */}
                    <Box>
                      {/* user profile functionality  */}
                      <UserProfile userName={userName}/>  
                    </Box>

                    
                    {/*-------------------------------- Logout------------------------------- */}
                    <Box
                        sx={{
                            flex: 0.1,
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",

                        }}

                    >
                        <Box onClick={logoutUser} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer' }} >
                            <IoMdLogOut style={{ width: 21, height: 21 }} />
                            <Typography sx={{ fontSize: "18px", marginTop: "1%" }}>
                            Logout
                            </Typography>
                        </Box>


                    </Box>
                </CustomToolbar>
                {/*-----------------------Responsiveness-------------------  */}
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
                                color: " rgb(255, 102, 0)",
                                fontSize: "26px",
                                padding: " 0px 4px",
                            }}
                        >
                            Campus <span style={{ color: "white" }}>Voices</span>
                        </Typography>

                    <NavbarDrawer/>
                    </Box>
                </ResponsiveCustomToolbar>
            </Container>
        </MainBox>
    );
}
export default NavbarMain;
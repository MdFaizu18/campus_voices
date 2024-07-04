/* eslint-disable react/prop-types */
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
import { FaHome } from "react-icons/fa";
import { BsPersonVcardFill, BsFillCollectionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import UserProfile from "../UserProfile";
import {
    CustomToolbar,
    MainBox,
    ResponsiveCustomToolbar,
} from "../../assets/wrappers/NavbarWrapper";
import AdminNavbarDrawer from "./AdminNavbarDrawer";
// import passwordImg from "../../../assets/images/passwordImg.jpg";

const pages = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome style={{ width: 21, height: 21 }} />,
        link: "/dashboard-head",
    },
    {
        id: 2,
        name: "Personal",
        icon: <BsFillCollectionFill style={{ width: 21, height: 21 }} />,
        link: "/dashboard-head/personal-review",
    },
    {
        id: 3,
        name: "About",
        icon: <BsPersonVcardFill style={{ width: 21, height: 21 }} />,
        link: "/dashboard-head/about",
    },
];

function AdminNavbarMain({ logoutUser }) {
    const [openPasswordModal, setOpenPasswordModal] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handlePasswordSubmit = () => {
        if (password === "admin123") {
            window.location.href = "/dashboard-head/personal-review";
        } else {
            setPasswordError("Incorrect password");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handlePasswordSubmit();
        }
    };

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
                        <Box sx={{margin:'0 25px',display:'flex',gap:'1px'}} >

                            <PersonIcon sx={{marginTop:'4px'}}/>
                            {/* <UserProfile userName={'HOD'} /> */}
                            <Typography variant="h6">HOD</Typography>
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
                            <AdminNavbarDrawer logoutUser={logoutUser}/>
                        </Box>
                    </ResponsiveCustomToolbar>
                </Container>
            </MainBox>

            {/* Password Modal */}
            <Modal
                open={openPasswordModal}
                onClose={() => setOpenPasswordModal(false)}
                aria-labelledby="passwordTitle"
                aria-describedby="passwordDescription"
                sx={{ display: "grid", placeItems: "center" }}
            >
                <Box
                    sx={{
                        display: "grid",
                        placeItems: "center",
                        width: "500px",
                        height: "400px",
                        backgroundColor: "white",
                        boxShadow: 24,
                        borderRadius: 8,
                        p: 3,
                        minWidth: 300,
                    }}
                >
                    <Typography variant="h6">Security code</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* <img
                            src={passwordImg}
                            alt="secure"
                            style={{
                                height: "200px",
                                width: "200px",
                            }}
                        /> */}
                        <Typography variant="body1" id="passwordTitle" mb={2}>
                            Enter Password to open the personal Feedbacks from the students
                        </Typography>
                    </Box>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        fullWidth
                        mb={2}
                        onKeyDown={handleKeyPress} // Handle Enter key press
                    />
                    <Box display="flex" gap="10px " sx={{ marginTop: "2%" }}>
                        <Button
                            sx={{
                                background: "red",
                                "&:hover": {
                                    backgroundColor: "red",
                                },
                            }}
                            variant="contained"
                            onClick={() => setOpenPasswordModal(false)}
                            mr={1}
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={{
                                background: "orange",
                                "&:hover": {
                                    backgroundColor: "orange",
                                },
                            }}
                            variant="contained"
                            onClick={handlePasswordSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

export default AdminNavbarMain;
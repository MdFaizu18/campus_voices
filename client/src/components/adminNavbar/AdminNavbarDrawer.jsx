/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillCollectionFill, BsPersonVcardFill } from "react-icons/bs";
import { Link, redirect, useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

import { toast } from "react-toastify";
import img1 from "../../assets/images/logo2.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { BorderStyle } from "../../pages/Admin-Head/dashboard/StatsPage";
import customFetch from "../../utils/CustomFetch";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 650,
    width: 350,
    background: "white",
    boxShadow: 24,
    borderRadius: "10px",
    borderTop: "10px solid #000b3f",
    paddingTop: "5%",
};

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

export default function AdminNavbarDrawer({ closeModal }) {
    const navigate= useNavigate();
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setPassword(""); // Reset password input
        setPasswordError(""); // Reset password error
        closeModal(); // Call the closeModal function provided by the parent component
    };

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get("/auth/logout");
        toast.success("Logout Successfully")
        console.log('logout user');
    };

    const handlePasswordSubmit = () => {
        if (password === "secret123") {
            setPasswordError(""); // Reset password error on successful validation
            handleClose(); // Close modal
            window.location.href = "/dashboard-head/personal-review"; // Redirect to personal review page
        } else {
            setPasswordError("Incorrect password");
        }
    };

    return (
        <Box style={{ margin: "2%" }}>
            <Button onClick={handleOpen}>
                <MenuOpenIcon sx={{ fontSize: "40px", color: "white" }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img
                        src={img1}
                        height="125px"
                        style={{ marginLeft: "25%", marginBottom: "20px" }}
                    />
                    <Typography
                        id="modal-modal-title"
                        sx={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#000b3f",
                            marginBottom: "20px",
                        }}
                        variant="h4"
                        component="h2"
                    >
                        Travel <span style={{ color: "#ff6600" }}>Through</span>
                        <BorderStyle width={70} />
                    </Typography>
                    <Box
                        sx={{
                            margin: "20px",
                            marginTop: "40px",
                            display: "grid",
                            justifyContent: "center",
                            padding: "20px",
                            borderRadius: "20px",
                            borderBottom: "10px solid #000b3f",
                            boxShadow:
                                " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
                            gap: "30px",
                        }}
                    >
                        {pages.map((page) => (
                            <Box
                                key={page.id}
                                sx={{ display: "flex", cursor: "pointer", gap: "8%" }}
                            >
                                <Box sx={{ marginTop: "3%" }}>{page.icon} </Box>
                                <Typography sx={{ fontSize: "24px" }}>
                                    {/* {page.name !== "Personal" ? ( */}
                                    <Link
                                        key={page.id}
                                        to={page.link}
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                        onClick={handleClose} // Close modal on link click
                                    >
                                        {page.name}
                                    </Link>
                                    {/* ) : (
                    <span
                      style={{
                        cursor: "pointer",
                        color: "black",
                        textDecoration: "underline",
                      }}
                      onClick={handlePasswordSubmit} // Prompt for password on link click
                    >
                      {page.name}
                    </span>
                  )} */}
                                </Typography>
                            </Box>
                        ))}
                        <Box
                            sx={{
                                paddingRight: "1.5%",
                                flex: 0.1,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                            }}
                        >
                            <FaUserCircle style={{ width: 21, height: 21 }} />
                            <Typography sx={{ fontSize: "24px", marginTop: "1%" }}>
                                HOD
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                flex: 0.1,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                                cursor: "pointer",
                            }}
                        >
                            <IoLogOut style={{ width: 21, height: 21 }} />
                            <Typography
                                sx={{ fontSize: "24px", marginTop: "1%" }}
                                onClick={logoutUser}
                            >
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
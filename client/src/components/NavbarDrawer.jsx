/* eslint-disable no-dupe-keys */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillCollectionFill, BsPersonVcardFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";
import img1 from "../assets/images/logo1.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import customFetch from "../utils/CustomFetch";
import { useSnackbar } from 'notistack'; 
import { useStudentOutletContext } from "../pages/DashboardStudent";

const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 550,
    width: 350,
    background:'white',
    boxShadow: 24,
    borderRadius: "40px",
    p: 1,
};
const pages = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome style={{ width: 21, height: 21 }} />,
        link: "/dashboard-student",
    },
    {
        id: 2,
        name: "Stuff",
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

export default function NavbarDrawer() {

    const { userData } = useStudentOutletContext();
    const userName = userData?.name;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();
    const logoutUser = async () => {
        navigate("/");
        await customFetch.get("/auth/logout");
        enqueueSnackbar("Logout Successfully", { variant: 'success' });
        console.log("logout user");
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
                    <img src={img1} height="150px" style={{ marginLeft: "27%" }} />
                    <Typography
                        id="modal-modal-title"
                        sx={{
                            textAlign: "center",

                            color: "#000b3f",
                        }}
                        variant="h4"
                        component="h2"
                    >
                        Travel Through
                    </Typography>
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "grid",
                            justifyContent: "center",
                            gap: "20px",
                        }}
                    >
                        {pages.map((page) => (
                            <Box
                                key={page.id}
                                sx={{ display: "flex", cursor: "pointer", gap: "8%" }}
                            >
                                <Box sx={{ marginTop: "3%" }}>{page.icon} </Box>
                                <Typography sx={{ fontSize: "19px" }}>
                                    <Link
                                        key={page.id}
                                        to={page.link}
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        {page.name}
                                    </Link>
                                </Typography>
                            </Box>
                        ))}
                        {/*--------------------------------User Identity------------------------------- */}
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
                            <Typography component={Link} to="/dashboard-student/user-profile" sx={{ fontSize: "18px", marginTop: "1%",textDecoration:'none',color:'black' }}>
                                {userName}
                            </Typography>
                        </Box>
                        {/*-------------------------------- Logout------------------------------- */}
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
                                sx={{ fontSize: "18px", marginTop: "1%" }}
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
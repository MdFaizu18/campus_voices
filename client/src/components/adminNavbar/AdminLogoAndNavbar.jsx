import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import headLogo from "../../assets/images/logo3.png";
import NavbarMain from "./AdminNavbarMain";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/CustomFetch";


const AdminLogoAndNavabar = () => {
    const navigate = useNavigate();

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get("/auth/logout");
        toast.success("Logout Successfully")
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
        width: "90vw",
        height: "66px",
        display: windowWidth <= 600 ? "none" : "block",
    };

    return (
        <>
            <Box>
                <img src={headLogo} alt="headLogo" style={imgStyle} />
                <NavbarMain logoutUser={logoutUser} />
            </Box>
        </>
    );
};

export default AdminLogoAndNavabar;
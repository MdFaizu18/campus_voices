import Contact from "../assets/images/footer/contact.png";
import Fb from "../assets/images/footer/fb.png";
import Insta from "../assets/images/footer/insta.png";
import Linkedin from "../assets/images/footer/linkedin.png";
import Location from "../assets/images/footer/location.png";
import Mail from "../assets/images/footer/mail.png";
import Twitter from "../assets/images/footer/twitter.png";
import { Box, styled, Typography } from "@mui/material";


const d = new Date();
let year = d.getFullYear();

const SocialMediaIconWrapper = styled("img")({
    height: "30px", width: "30px"
})
const Footer = () => {

    const links = [
        "Home",
        "About Us",
        "Contact Us",
        "Blog",
        "Mandatory Disclosure",
    ];
    const usefullLinks = [
        "Privacy Policy",
        "Terms and Conditions",
        "Disclaimer",
        "About MIT",
        "Support",
    ];

    const styles = {
        marginTop: "3%",
    };

    return (
        <Box>
            <Box
                sx={{
                    width: "100%",
                    height: "330px",
                    // bgcolor: "#00004d",
                    bgcolor:"#060629",
                    // bgcolor: "#ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#b3c6ff",
                    mb: "-30px",
                    "@media (max-width: 600px)": {
                        height: "0",
                        pt: "5%",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
                        height: "270px",
                        width: "92%",
                        "@media (max-width: 600px)": {
                            display: "flex",
                            flexDirection: "column ",
                            height: "1020px",
                            gap: "40px",
                        },
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ color: "white", fontWeight: "Bold" }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            sx={{
                                color: "#ff7733",
                                mt: "-5%",
                                mb: "8%",
                                "@media (max-width: 600px)": { mt: "-4%", mb: "3%" },
                            }}
                        >
                            ________
                        </Typography>
                        <Typography sx={{ pr: "10%" }}>
                            we are dedicated to nurturing creativity through constructive
                            feedback and community support for artists .
                        </Typography>
                        <Box
                            sx={{
                                mt: "8%",
                                display: "flex",
                                gap: "2%",
                                "@media (max-width: 600px)": { mt: "5%" },
                            }}
                        >
                            <SocialMediaIconWrapper
                                style={{ height: "30px", width: "30px" }}
                                src={Fb}
                            />
                            <SocialMediaIconWrapper
                                style={{ height: "30px", width: "30px" }}
                                src={Insta}
                            />
                            <SocialMediaIconWrapper
                                style={{ height: "30px", width: "30px" }}
                                src={Linkedin}
                            />
                            <SocialMediaIconWrapper
                                style={{ height: "30px", width: "30px" }}
                                src={Twitter}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ color: "white", fontWeight: "Bold" }}
                        >
                            Our Links
                        </Typography>
                        <Typography
                            sx={{
                                color: "#ff7733",
                                mt: "-5%",
                                mb: "8%",
                                "@media (max-width: 600px)": { mt: "-4%", mb: "3%" },
                            }}
                        >
                            ________
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", mt: "-2%" }}>
                            {links.map((link, index) => (
                                <Typography key={index} style={styles}>
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ color: "white", fontWeight: "Bold" }}
                        >
                            Useful Links
                        </Typography>
                        <Typography
                            sx={{
                                color: "#ff7733",
                                mt: "-5%",
                                mb: "8%",
                                "@media (max-width: 600px)": { mt: "-4%", mb: "3%" },
                            }}
                        >
                            ________
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", mt: "-2%" }}>
                            {usefullLinks.map((usefullLink, index) => (
                                <Typography key={index} style={styles}>
                                    {usefullLink}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ color: "white", fontWeight: "Bold" }}
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            sx={{
                                color: "#ff7733",
                                mt: "-5%",
                                mb: "8%",
                                "@media (max-width: 600px)": { mt: "-4%", mb: "7%" },
                            }}
                        >
                            ________
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                "@media (max-width: 600px)": {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                },
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <img
                                    src={Location}
                                    alt=""
                                    style={{ height: "30px", marginTop: "10px" }}
                                />
                                <Typography sx={{ ml: "10px" }}>
                                    Mahendrapuri, Mallasamudram (W), Thiruchengode, Namakkal,
                                    Tamil Nadu 637503
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", mt: "-8px" }}>
                                <img
                                    src={Mail}
                                    alt=""
                                    style={{ height: "21px", marginTop: "10px" }}
                                />
                                <Typography sx={{ ml: "11px", mt: "10px" }}>
                                    info@mahendratech.org
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", mt: "-1px" }}>
                                <img
                                    src={Contact}
                                    style={{
                                        height: "26px",
                                        marginTop: "10px",
                                    }}
                                />
                                <Typography sx={{ ml: "14px", mt: "10px" }}>
                                    +91 04288-288527
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "35px",
                    bgcolor: "#ff6500",
                    color: "white",
                    fontWeight: "Bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    pr: "4%",
                }}
            >
                <Box>
                    <Typography>
                        Copyright ©
                        <span style={{ color: "#cc0000", fontWeight: "600" }}> Web</span>{" "}
                        Spyders {year} . All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
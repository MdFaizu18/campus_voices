import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LogoAndNavabar from "../components/LogoAndNavabar";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

import image1 from "../assets/images/4.jpg";
import image2 from "../assets/images/5.jpg";
import image3 from "../assets/images/6.jpg";
import Mit from "../assets/images/image10.png";
import Footer from "../components/Footer";
import AdminLogoAndNavabar from "../components/adminNavbar/AdminLogoAndNavbar";

const AdminAbout = () => {
    const items = [
        {
            id: "0",
            num: "1925",
            wording: "Opened in",
        },
        {
            id: "1",
            num: "2000",
            wording: "Students",
        },
        {
            id: "2",
            num: "90%",
            wording: "Graduation rate of our student",
        },
        {
            id: "3",
            num: "200",
            wording: "Faculty",
        },
    ];

    return (
        <>
          
            <Box sx={{ padding: '2% 8%' }}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        "@media (max-width: 600px)": {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            // bgcolor: "blue ",
                            width: "50%",
                            height: "400px",
                            ml: "3%",
                            "@media (max-width: 600px)": {
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                height: "0",
                                ml: "0",
                                pl: "3%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                mt: "10%",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "navy",
                                    fontWeight: "Bold",
                                }}
                            >
                                ABOUT US
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: "4%",
                                    width: "80%",
                                    lineHeight: "50px",
                                    "@media (max-width: 600px)": {
                                        width: "100%",
                                        lineHeight: "40px",
                                        mb: "0",
                                    },
                                }}
                            >
                                We Are One of The Largest, Most Diverse Institutions in The Tamil
                                Nadu
                            </Typography>
                        </Box>
                    </Box>
                    {/* .................................... */}
                    <Box
                        sx={{
                            width: "50%",
                            "@media (max-width: 600px)": {
                                width: "100%",
                                pl: "3%",
                                mt: "5%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                mt: "10%",
                                "@media (max-width: 600px)": {
                                    mt: "3%",
                                },
                            }}
                        >
                            <Typography variant="h6">
                                Our community is being called to reimagine the future. As the only
                                university where a renowned design school comes together with
                                premier colleges, we are making learning more relevant and
                                transformational. We are enriched by the wide range of experiences
                                and perspectives of our students, faculty, staff and alumni.
                            </Typography>
                            <Typography variant="h6" sx={{ mt: "3%" }}>
                                Preparing students to make meaningful contributions to society as
                                leaders in a complex world.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#ff681f",
                                    p: "10px 20px",
                                    borderRadius: "0",
                                    mt: "6%",
                                }}
                                endIcon={<ArrowForwardIcon />}
                            >
                                Read more
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/* ................. */}
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        p: "5%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8%",
                        mt: "-1%",
                        "@media (max-width: 600px)": {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            mt: "5%",
                            gap: "30px",
                            mb: "10%",
                        },
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: 250,
                            textAlign: "center",
                            "@media (max-width: 600px)": {
                                width: "100%",
                                mt: "5%",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={image1}
                            sx={{ height: "10%", p: "13% " }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color={"#ff681f"}
                            >
                                Affordability
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our financial aid program makes UniCamp affordable for every
                                family throughout the world.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            maxWidth: 250,
                            textAlign: "center",
                            "@media (max-width: 600px)": { width: "100%", mt: "5%" },
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={image2}
                            sx={{ height: "10%", p: "13% " }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color={"#ff681f"}
                            >
                                Affordability
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our financial aid program makes UniCamp affordable for every
                                family throughout the world.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            maxWidth: 250,
                            textAlign: "center",
                            "@media (max-width: 600px)": { width: "100%", mt: "5%" },
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={image3}
                            sx={{ height: "10%", p: "12% " }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color={"#ff681f"}
                            >
                                Affordability
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our financial aid program makes UniCamp affordable for every
                                family throughout the world.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                {/* ................ */}
                <Card
                    sx={{
                        width: "100%",
                        bgcolor: " #ff68c",
                    }}
                >
                    <CardMedia
                        component="img"
                        image={Mit}
                        sx={{
                            height: "400px",
                            width: "90%",
                            m: "3% 5%",
                            border: " 1px solid black",
                            "@media (max-width: 600px)": {
                                height: "220px",
                                width: "100%",
                                m: "0",
                                mt: "10%",
                            },
                        }}
                    />
                    <CardContent
                        sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            mt: "-2%",
                            "@media (max-width: 600px)": {
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                mt: "5%",
                            },
                        }}
                    >
                        {items.map((item) => (
                            <Box key={item.id}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "Bold",
                                        color: "#ff681f",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.num}
                                </Typography>
                                <Typography sx={{ textAlign: "center" }}>
                                    {item.wording}
                                </Typography>
                            </Box>
                        ))}
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "300px",
                        padding: "5% 15%",
                    }}
                >
                    <Typography variant="h4">Visiting OurCamp</Typography>
                    <Box
                        sx={{
                            borderBottom: "5px solid orange",
                            width: "15%",
                            mb: "3%",
                            "@media (max-width: 600px)": {
                                width: "50%",
                                mb: "3%",
                            },
                        }}
                    ></Box>
                    <Box>
                        <Typography variant="body1">
                            Studying business at UniCamp is a great way to enhance your career.
                        </Typography>
                        <Typography>
                            In today`s competitive environment, professionals need the skills to
                        </Typography>
                        <Typography>adapt to an ever-changing business world.</Typography>
                    </Box>
                </Box>

            </Box>
            <Footer />
        </>
    );
};

export default AdminAbout;
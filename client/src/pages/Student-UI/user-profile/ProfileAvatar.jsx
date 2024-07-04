import { Box, Typography } from "@mui/material";
import mLogo from "../../../assets/images/logo2.png";
import ProfileImage from "../../../assets/images/banner.jpg";
import studentimg1 from "../../../assets/images/profileImg.png";
import studentimg2 from "../../../assets/images/profileImg2.png";
import {
    AvatharWrapper,
    BannerWrapper,
} from "../../../assets/wrappers/UserProfileWrapper";
import { useProfileOutletContext } from "./ProfileOutlet";

const ProfileAvatar = () => {
    const { userData, feedsCount } = useProfileOutletContext();
    const userName = userData.name 
    const gender = userData.gender;
    console.log(gender);
    console.log(userData);
    console.log(feedsCount);

    return (
        <Box
            sx={{
                width: "97.5%",
                bgcolor: "#F7F7FA",
                borderRadius: "10px",
                boxShadow: " rgba(17, 17, 26, 0.1) 0px 1px 0px",
            }}
        >
            <BannerWrapper src={ProfileImage} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent:'space-around',
                    "@media (max-width: 600px)": { flexDirection: "column", ml: "10px" },
                }}
            >
                <Box
                    sx={{
                        marginLeft: "4%",
                        marginTop: "-4%",
                        marginBottom: "1.5%",
                    }}
                >{gender == "Female" ? 
                <AvatharWrapper src={studentimg2} /> :
                <AvatharWrapper src={studentimg1}/>
                }
                </Box>
                <Box sx={{ m: "1% 2% 1% -5% ", "@media (max-width: 600px)": {  ml: "10px" }, }}>
                    <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
                        {userName}
                    </Typography>
                    <Typography>Student at</Typography>
                    <Typography>
                        <img
                            src={mLogo}
                            style={{
                                height: "23px",
                                width: "25px",
                                marginBottom: "-6px",
                                marginRight: "5px",
                            }}
                        />
                        Mahendra Institute of Technology
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "55px", mt: "2%", "@media (max-width: 600px)": { gap:'30px'}, }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "Bold", mb: "5px" }}>
                            Total Feeds
                        </Typography>
                        <Typography
                            sx={{
                                mb: "1px",
                                textAlign: "center",
                                "@media (max-width: 600px)": { textAlign: "left" },
                            }}
                        >
                            Count:{feedsCount.feedsTotal}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "Bold", mb: "5px" }}>
                            Personal Feeds
                        </Typography>
                        <Typography
                            sx={{
                                mb: "1px",
                                textAlign: "center",
                                "@media (max-width: 600px)": { textAlign: "left" },
                            }}
                        >
                            Count:{feedsCount.personalFeedbacksCount}
                        </Typography>
                    </Box>{" "}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "Bold", mb: "5px" }}>
                            Normal Feeds
                        </Typography>
                        <Typography
                            sx={{
                                mb: "1px",
                                textAlign: "center",
                                "@media (max-width: 600px)": { textAlign: "left" },
                            }}
                        >
                            Count:{feedsCount.normalFeedbacksCount}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileAvatar;
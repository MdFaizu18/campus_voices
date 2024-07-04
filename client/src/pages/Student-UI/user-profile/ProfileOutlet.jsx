import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import LogoAndNavbar from '../../../components/LogoAndNavabar';
import Password from "./Password";
import PersonalDet from "./PersonalDet";
import ProfileAvatar from "./ProfileAvatar";
import customFetch from "../../../utils/CustomFetch";
import { redirect, useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

export const loader = async () => {
    try {
        const userDataResponse = await customFetch.get('/dashboard-student/current-user');
        const feedbackCounts = await customFetch.get('/dashboard-student/feedbacks');
        const userCurrentData = userDataResponse.data;
        const feedsCount = feedbackCounts.data;
        return { userCurrentData ,feedsCount};
    } catch (error) {
        return redirect('/');
    }
}

const UserProfileOutletContext = createContext();
const ProfileOutlet = () => {    

    const { userCurrentData ,feedsCount} = useLoaderData();
    const userData = userCurrentData.user;
    return (
        <UserProfileOutletContext.Provider 
        value={{userData,feedsCount}}>

        <LogoAndNavbar/>
            <Box sx={{ bgcolor: "#F7F7FA", padding: '0px 5% 5% 5%', "@media (max-width: 600px)": {padding:"0px" }, }}>
        <Box sx={{display:'flex',justifyContent:'space-between',padding:'2% 6% 0% 6%'}}>
        <Box>
            <Typography variant="h5" sx={{ fontWeight: "Bold"}}>
                User Details
            </Typography>
        </Box>
        <Box>
                        <Breadcrumbs>
                            <Link underline="hover" color="inherit"
                             href="/dashboard-student">
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/dashboard-student/user-profile"
                                aria-current="page"
                            >
                                user-profile
                            </Link>
                        </Breadcrumbs>
        </Box>


        </Box>
            <Box
                sx={{
                    m: "1% 5%",
                    pl: "2%",
                    bgcolor: "white",
                    width: "90%",
                    borderRadius: "10px",
                    pb: "5%",
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "Bold", p: "2% 0" }}>
                    Profile
                </Typography>
                <ProfileAvatar  user={userData} feedsCount={feedsCount}/>
                <Box
                    sx={{
                        display: "flex",
                        gap: "2.5%",
                        "@media (max-width: 800px)": { flexDirection: "column" },
                    }}
                >
                    <PersonalDet user={userData} />
                    <Password user={userData} />
                </Box>
            </Box>
        </Box>
        </UserProfileOutletContext.Provider>
    );
};
export const useProfileOutletContext = () => useContext(UserProfileOutletContext);
export default ProfileOutlet;